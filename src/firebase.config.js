import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAsIQuZzILD3QXXJj1kqqnEtxDjYHIbpQs",
  authDomain: "housemarketplace-d79c3.firebaseapp.com",
  projectId: "housemarketplace-d79c3",
  storageBucket: "housemarketplace-d79c3.appspot.com",
  messagingSenderId: "835375129471",
  appId: "1:835375129471:web:07f18abb3702ba991b304a",
  measurementId: "G-V8Q2LDK04Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()