import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKmCMAcePPbDdEZHNO-vB9L6ml28WGw_c",
  authDomain: "mymoney-f3a45.firebaseapp.com",
  projectId: "mymoney-f3a45",
  storageBucket: "mymoney-f3a45.appspot.com",
  messagingSenderId: "1015223148712",
  appId: "1:1015223148712:web:f0a41716c5a6d898f9a29d",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
