import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC38nCpENFqraQm3k9qbJHORvmT4Q2qmEo",
  authDomain: "linkedin-clone-dc2d0.firebaseapp.com",
  projectId: "linkedin-clone-dc2d0",
  storageBucket: "linkedin-clone-dc2d0.appspot.com",
  messagingSenderId: "543676914499",
  appId: "1:543676914499:web:0df26b8c75ef0554d2adf6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app)
export const database = getFirestore(app)