"use client";
import Modal from "@/app/components/Modal";
import { db } from "@/app/firebaseConfig";
import Edit from "@/app/svgs/Edit";
import Trash from "@/app/svgs/Trash";
import { deleteDoc, doc } from "firebase/firestore";
import { useState } from "react";
import AddComment from "./AddComment";
import ViewComments from "./ViewComments";
import Accordion from "react-bootstrap/Accordion";

export default function Post({ post, user }) {
  //state management
  const [show, setShow] = useState(false);

  function onShow(boolean) {
    setShow(boolean);
  }

  // delete handler
  async function handleDelete() {
    const postRef = doc(db, "posts", post.id);
    try {
      await deleteDoc(postRef);
    } catch (error) {
      console.error("error deleting document ", error);
    }
  }
  return (
    <>
      {show && <Modal id={post.id} onShow={onShow} isNew={false} />}
      <div className="relative mb-5 mt-5 mx-auto max-w-lg rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
        <div className="bg-white p-7 rounded-md">
          <p className="font-semibold text-xl text-zinc-800">
            {post.displayName}
          </p>
          <h3 className="font-bold text-2xl text-sky-900">{post.title}</h3>
          <p className="text-lg">{post.description}</p>
          {user && (
            <>
              {user.uid === post.userId && (
                <div className="flex justify-center pt-4 text-xl gap-2">
                  <Trash handleDelete={handleDelete} />
                  <div onClick={() => setShow(true)}>
                    <Edit />
                  </div>
                </div>
              )}
            </>
          )}
        </div>
        <AddComment post={post} />
        <div className="w-full mx-auto">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Comments</Accordion.Header>
              <Accordion.Body>
                <ViewComments post={post} />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
}
