"use client";
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";

export default function SignOut() {
  //state management
  const [userAuth, setUser] = useState(null);

  //side effects
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  //signout handler
  async function handleSignOut() {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error occured during sign out: ", error);
    }
  }
  return <div onClick={handleSignOut}>Sign Out</div>;
}
