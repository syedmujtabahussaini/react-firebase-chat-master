// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQkuSPCHV05rN3mK3Abg-eWUYl5FcGq8k",
  authDomain: "chatapp01-d2ca2.firebaseapp.com",
  projectId: "chatapp01-d2ca2",
  storageBucket: "chatapp01-d2ca2.appspot.com",
  messagingSenderId: "118836018874",
  appId: "1:118836018874:web:0f93ef663b114e46b9cc83",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
