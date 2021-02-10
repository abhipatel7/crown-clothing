import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCEJzsPwBj7wMifTrzNpsGOv8P2b9wYb8Y",
  authDomain: "crown-clothing-2301f.firebaseapp.com",
  projectId: "crown-clothing-2301f",
  storageBucket: "crown-clothing-2301f.appspot.com",
  messagingSenderId: "219978785789",
  appId: "1:219978785789:web:e2ad5f7f15f82b173c6f94",
  measurementId: "G-9ZEKZSKF9Z",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
