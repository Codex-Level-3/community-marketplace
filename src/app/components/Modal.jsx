"use client";

import { useState } from "react";
import { auth, db } from "../firebaseConfig";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";

export default function Modal({ onShow, isNew, id }) {
  //State management
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // add post function
  async function addPost() {
    const userId = auth.currentUser.uid;
    const newPost = {
      comments: [],
      title,
      description,
      userId,
      displayName: auth.currentUser.displayName,
    };
    const colRef = collection(db, "posts");
    try {
      await addDoc(colRef, newPost);
    } catch (error) {
      console.error("Error adding post", error);
    }
  }

  //submit handle
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (isNew) {
        await addPost();
      } else {
        const docRef = doc(db, "posts", id);
        const ref = await updateDoc(docRef, { title, description });
      }
      setTitle("");
      setDescription("");
      onShow(false);
    } catch (error) {}
  }
  return (
    <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-md p-6 relative">
        <div className="flex items-center pb-3 border-b text-black">
          <h3 className="text-xl text-blue-600 font-bold flex-1">
            {isNew ? "Add a Post" : "Edit Post"}
          </h3>
          <svg
            onClick={() => onShow(false)}
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 ml-2 cursor-pointer shrink-0 fill-black hover:fill-red-500"
            viewBox="0 0 320.591 320.591"
          >
            <path
              d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
              data-original="#000000"
            ></path>
            <path
              d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
              data-original="#000000"
            ></path>
          </svg>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 font-[sans-serif] max-w-md mx-auto mt-4 mb-6"
        >
          <label className="flex flex-col text-lg text-blue-800 font-semibold">
            Title:
            <input
              className="px-4 py-3 bg-gray-100 w-full text-sm font-normal outline-none border-b-2 border-blue-500 rounded"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              name="title"
              id="title"
            />
          </label>
          <label className="flex flex-col text-lg text-blue-800 font-semibold">
            Description:
            <textarea
              className="p-4 bg-white max-w-md mx-auto w-full block text-sm font-normal border border-gray-300 outline-[#007bff] rounded"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              type="text"
              name="description"
              id="description"
            ></textarea>
          </label>
        </form>
        <div className="flex justify-between">
          <button
            className="px-6 py-2 rounded-md text-black text-sm border-none outline-none bg-gray-200 hover:bg-red-300 active:bg-gray-200"
            onClick={() => onShow(false)}
          >
            Cancel
          </button>
          <button
            className="px-6 py-2 rounded-md text-white text-sm border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
