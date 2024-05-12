"use client";

import { auth, db } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import Post from "./Post";

export default function Posts() {
  // state management
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [checked, setChecked] = useState(false);

  //side effects
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  useEffect(() => {
    if (user) {
      const userId = auth.currentUser.uid;
      const showMyPost = checked ? where("userId", "==", userId) : "";
      const q = query(collection(db, "posts"));
      const unsub = onSnapshot(q, (snapshot) => {
        const postArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(postArray);
      });
      return () => unsub();
    }
  }, [user, checked]);

  return (
    <section>
      {posts.map((post) => (
        <Post key={post.id} user={user} post={post} />
      ))}
    </section>
  );
}
