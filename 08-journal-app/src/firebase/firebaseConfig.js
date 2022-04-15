import "firebase/firestore";
import "firebase/auth";

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAZq-gEjBUMS2pi0mWjzy3yb38aPG9dgJ8",
    authDomain: "react-curso-udemy-1097d.firebaseapp.com",
    projectId: "react-curso-udemy-1097d",
    storageBucket: "react-curso-udemy-1097d.appspot.com",
    messagingSenderId: "721875231664",
    appId: "1:721875231664:web:e2d2150e503a751c922c75"
};
  
initializeApp( firebaseConfig );
const auth = getAuth();
const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    auth
}