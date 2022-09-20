
//import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBxB7dfdXpCq8mDJtioxCWLqz6ArXg_Nz0",
  authDomain: "my-first-project-e-clone.firebaseapp.com",
  projectId: "my-first-project-e-clone",
  storageBucket: "my-first-project-e-clone.appspot.com",
  messagingSenderId: "715414470087",
  appId: "1:715414470087:web:0525563fba3a10a4e36de2",
  measurementId: "G-1LL4ZZWKXF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };


