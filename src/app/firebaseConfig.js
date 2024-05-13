// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
export const provider = new GoogleAuthProvider();
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4qIWcPpPkARyWV-mhB8-Wvjd55XBFWz4",
  authDomain: "community-project-7e2e1.firebaseapp.com",
  projectId: "community-project-7e2e1",
  storageBucket: "community-project-7e2e1.appspot.com",
  messagingSenderId: "820903242146",
  appId: "1:820903242146:web:dd6f1227ff5d89dfb62afb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
