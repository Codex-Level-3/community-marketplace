"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useRouter } from "next/navigation";
import Product from "./components/Product";
import AddPost from "../components/AddPost";
import Posts from "./components/Posts";
import Modal from "../components/Modal";

export default function page() {
  //state management
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);

  function onShow(boolean) {
    setShow(boolean);
  }

  //side effects
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/");
      } else {
        setUser(user);
      }
    });
    return () => unsub();
  });
  const router = useRouter();
  return (
    <main>
      {user ? (
        <>
          <Header />
          <section className="bg-sky-600 mb-4">
            <div className="flex flex-col justify-center items-center p-6">
              <h1 className="font-bold text-4xl text-white">Welcome!</h1>
              <p className="font-semibold text-2xl text-white">
                Connect with neighbors and find hidden gems in your area.
              </p>
            </div>
          </section>
          <Product />
          <section className="pt-4">
            <h2 className="text-3xl text-blue-500 font-semibold mb-2 mx-3">
              Posts :
            </h2>
            <p className="text-2xl text-indigo-900 mx-3">
              Join the conversation - post about your events and products here.
            </p>
          </section>
          <AddPost onShow={onShow} />
          <Posts />
          {show && <Modal isNew={true} onShow={onShow} />}
          <Footer />
        </>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <p className="text-5xl text-pink-800 font-bold">
            This page is protected!
          </p>
        </div>
      )}
    </main>
  );
}
