// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCit5afKEm052QPwp88XpZ2R6t2lyGIn3I",
  authDomain: "reviews-4962d.firebaseapp.com",
  projectId: "reviews-4962d",
  storageBucket: "reviews-4962d.appspot.com",
  messagingSenderId: "203351977095",
  appId: "1:203351977095:web:9934bfd5c4759d8c745c22",
  measurementId: "G-Z3XEJ80E13"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore;