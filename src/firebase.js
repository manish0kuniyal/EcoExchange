import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider,getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCLq6P201LB7tp20gui4Ifg-eXyeYlVFSI",
  authDomain: "learnxchange-10c4c.firebaseapp.com",
  projectId: "learnxchange-10c4c",
  storageBucket: "learnxchange-10c4c.appspot.com",
  messagingSenderId: "903844174770",
  appId: "1:903844174770:web:f67012294e3316aa91e2ab",
  measurementId: "G-BNFTBG997W"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)
export const googleProvider=new GoogleAuthProvider()
export const db=getFirestore(app)