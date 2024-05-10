import { auth, db } from "@/app/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";

export default function AddComment() {
  //state management
  const [text, setText] = useState("");

  //submit handler
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const docRef = doc(db, "posts", post.id);
      const ref = await updateDoc(docRef, {
        comments: [
          ...post.comments,
          { displayName: auth.currentUser.displayName, text },
        ],
      });
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Comment:
          <textarea
            onChange={(e) => setText(e.target.value)}
            value={text}
            name="text"
            id="text"
          ></textarea>
        </label>
        <button>Add Comment</button>
      </form>
    </>
  );
}
