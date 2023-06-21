import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth"; // for autherntiocation

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdDNZAiZAz_2UkiZFAUEVPzqXaRwMQSkA",
  authDomain: "livechat-89606.firebaseapp.com",
  projectId: "livechat-89606",
  storageBucket: "livechat-89606.appspot.com",
  messagingSenderId: "301152403583",
  appId: "1:301152403583:web:6c325738064b8ac6d13f4a",
  measurementId: "G-J7WC9G8ESB",
};

//init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth(); // for autherntiocation
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
