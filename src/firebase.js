import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCYKEF2b9t8UXqzlMeWqHmIEPS04LH90jE",
  authDomain: "todoist-e0bc6.firebaseapp.com",
  databaseURL: "https://todoist-e0bc6-default-rtdb.firebaseio.com",
  projectId: "todoist-e0bc6",
  storageBucket: "todoist-e0bc6.appspot.com",
  messagingSenderId: "37918811173",
  appId: "1:37918811173:web:ac0e548843ccdd5c384bcc",
});

export { firebaseConfig as firebase };