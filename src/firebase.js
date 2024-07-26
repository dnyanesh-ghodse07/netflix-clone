import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMrACEfsXzYnc_AyS4yTRBCyNSBATBKUw",
  authDomain: "react-practice-app-aab42.firebaseapp.com",
  projectId: "react-practice-app-aab42",
  storageBucket: "react-practice-app-aab42.appspot.com",
  messagingSenderId: "827785646035",
  appId: "1:827785646035:web:550e39ba27489507432926",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore();

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, login, logout, signup };
