import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const app = initializeApp({
  apiKey: "AIzaSyDrO2F4oMcS-Ha5WQfZFr_fCInhzGZ_ErY",
  authDomain: "nohorny-823dc.firebaseapp.com",
  projectId: "nohorny-823dc",
  storageBucket: "nohorny-823dc.appspot.com",
  messagingSenderId: "778113634747",
  appId: "1:778113634747:web:5477a72192b1dd99b3749e",
  measurementId: "G-MQKBR913BQ",
});

const db = getFirestore(app);

export { app, db };
