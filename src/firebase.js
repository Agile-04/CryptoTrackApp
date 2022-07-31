// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3DGEtU43gZbsFxG5eDmWznwMuLdptRmc",
  authDomain: "cryptotrack-d877f.firebaseapp.com",
  projectId: "cryptotrack-d877f",
  storageBucket: "cryptotrack-d877f.appspot.com",
  messagingSenderId: "123472172294",
  appId: "1:123472172294:web:78a926cd084ae9a129ba87",
  measurementId: "G-86FKC597H4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;