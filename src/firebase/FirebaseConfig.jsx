// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALfEmMald-Uwy5RyH8vo_O-Om5yrJqPKE",
  authDomain: "myshortecom-d547c.firebaseapp.com",
  projectId: "myshortecom-d547c",
  storageBucket: "myshortecom-d547c.appspot.com",
  messagingSenderId: "515316266432",
  appId: "1:515316266432:web:146281c0f428c86d434425"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth =getAuth(app);

export {fireDB, auth};