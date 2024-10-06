import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyC6NSLuN2TlS38SsRAwO4jnayIgYMfa-5o",
  authDomain: "trip-keeper-ad188.firebaseapp.com",
  projectId: "trip-keeper-ad188",
  storageBucket: "trip-keeper-ad188.appspot.com",
  messagingSenderId: "926061934756",
  appId: "1:926061934756:web:a4274d6bd564229186ce31",
  measurementId: "G-302SXNVWGH"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
