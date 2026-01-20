import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9LC8vzpRAIxyRdAws9r18yYudK_vGKU8",
  authDomain: "tashu-pooja-ghar.firebaseapp.com",
  projectId: "tashu-pooja-ghar",
  storageBucket: "tashu-pooja-ghar.firebasestorage.app",
  messagingSenderId: "882885029399",
  appId: "1:882885029399:web:4fde44035add0aeb07f652"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
