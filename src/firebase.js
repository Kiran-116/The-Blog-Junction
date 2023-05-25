import {initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCRAZ8EOBzOh30lyBnBQ0lxIU3HE2LoAvA",
  authDomain: "react-blogs-app-5aff2.firebaseapp.com",
  projectId: "react-blogs-app-5aff2",
  storageBucket: "react-blogs-app-5aff2.appspot.com",
  messagingSenderId: "761667495370",
  appId: "1:761667495370:web:2142407a1447e6e7bc9b33"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };