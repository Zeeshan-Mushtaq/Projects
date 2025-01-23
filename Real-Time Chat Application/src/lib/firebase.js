import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  apiKey:  "AIzaSyDbxQhLUbFbgtp-EvnNjS0SxyGeNXs6osA",
  authDomain: "reactchat-a4b13.firebaseapp.com",
  projectId: "reactchat-a4b13",
  storageBucket: "reactchat-a4b13.appspot.com",
  messagingSenderId: "808056002958",
  appId: "1:808056002958:web:2d2c216fc370b7bfe5acdf"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
