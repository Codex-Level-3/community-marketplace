"use client";

import { signInWithPopup } from "firebase/auth";

import { auth, provider } from "../firebaseConfig";
import Gmail from "../svgs/Gmail";
import { useState } from "react";

export default function GoogleSignIn() {
  //state management
  const [user, setUser] = useState("");

  //Google handler
  async function handleGoogleSignIn() {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Error signing up with Google: ", error);
    }
  }

  return (
    <div className="text-3xl flex justify-center p-3">
      <Gmail handleGoogleSignIn={handleGoogleSignIn} />
    </div>
  );
}
