import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRraJs20jucXhnLoXx_7H79zU1sK-CvPY",
  authDomain: "mymoney-6049e.firebaseapp.com",
  projectId: "mymoney-6049e",
  storageBucket: "mymoney-6049e.appspot.com",
  messagingSenderId: "368554177705",
  appId: "1:368554177705:web:b34acb1ecc414a4f93e5b8", 
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
