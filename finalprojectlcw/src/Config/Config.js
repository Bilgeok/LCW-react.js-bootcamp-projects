import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDHZIoXthPsH7N6TVdjREs1JNsksPConec",
  authDomain: "eticaret-f18b9.firebaseapp.com",
  projectId: "eticaret-f18b9",
  storageBucket: "eticaret-f18b9.appspot.com",
  messagingSenderId: "956105287823",
  appId: "1:956105287823:web:e72b5d6aa93438e94528fa",
  measurementId: "G-SJCK1M3F0D"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}