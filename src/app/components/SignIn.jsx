"use client";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import { useRouter } from "next/navigation";

export default function SignIn() {
  //state management
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  //side effects
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });
  }, [router]);

  // email & password sign-in handler
  async function handleEmailSignin(e) {
    e.preventDefault();
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCred.user);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  }

  return (
    <>
      <form
        onSubmit={handleEmailSignin}
        className="flex flex-col justify-center max-w-lg mx-auto px-4 space-y-6 font-[sans-serif] text-[#333]"
      >
        <label className="flex flex-col text-xl">
          Email:
          <input
            className="px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-blue-500"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            name="email"
            id="email"
            aria-placeholder="email"
          />
        </label>

        <label className="flex flex-col text-xl mb-2">
          Password:
          <input
            className="px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-blue-500"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            name="password"
            id="password"
            aria-placeholder="password"
          />
        </label>
        <button className="cursor-pointer px-6 py-2.5 rounded text-white text-lg text-center tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">
          Sign In
        </button>
      </form>
    </>
  );
}
