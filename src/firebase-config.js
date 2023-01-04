
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDKLjzP6Hv3qWdIV_1KJGb5e02-e4gvZLE",
  authDomain: "my-blog-8315f.firebaseapp.com",
  projectId: "my-blog-8315f",
  storageBucket: "my-blog-8315f.appspot.com",
  messagingSenderId: "640432666940",
  appId: "1:640432666940:web:f71772ac9774715ed9c639"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);