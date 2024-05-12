import { auth, db } from "@/app/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";

export default function AddComment({ post }) {
  //state management
  const [text, setText] = useState("");
  const [displayName, setDisplayName] = useState(
    auth.currentUser.displayName || ""
  );

  //submit handler
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const docRef = doc(db, "posts", post.id);
      const ref = await updateDoc(docRef, {
        comments: [
          ...post.comments,
          { displayName: displayName || "Anonymous", text },
        ],
      });
      console.log(ref);
      setText("");
      setDisplayName("");
    } catch (error) {
      console.error(error);
    }
  }

  //function to handle display name input
  function handleDisplayName(e) {
    setDisplayName(e.target.value);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white border-t border-gray-200 w-full mx-auto p-4"
      >
        {auth.currentUser.displayName ? (
          <p className="font-semibold">
            Logged in as: {auth.currentUser.displayName}
          </p>
        ) : (
          <label className="font-semibold">
            Name:
            <input
              type="text"
              value={displayName}
              onChange={handleDisplayName}
              placeholder="Enter your name"
              className="w-full rounded-md px-4 bg-gray-100 text-md pt-2 outline-blue-500 mb-2 pb-2"
            />
          </label>
        )}
        <label className="block mb-2 font-semibold">
          Comment:
          <textarea
            className="w-full rounded-md px-4 bg-gray-100 text-sm pt-3 outline-blue-500"
            onChange={(e) => setText(e.target.value)}
            value={text}
            name="text"
            id="text"
          ></textarea>
        </label>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out">
          Add Comment
        </button>
      </form>
    </>
  );
}
