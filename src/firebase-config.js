
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBqRvrZFaawD-d7WN5eu72qMQ_eFdX89jk",
  authDomain: "my-blog-4e076.firebaseapp.com",
  projectId: "my-blog-4e076",
  storageBucket: "my-blog-4e076.appspot.com",
  messagingSenderId: "1009622350578",
  appId: "1:1009622350578:web:5013d5c61587e248b62e6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);