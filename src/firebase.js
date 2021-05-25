import firebase from 'firebase';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD97YGZ3EN_T9coMnGsRyJdD4_Ig5HFTXA",
    authDomain: "educrates-84cf6.firebaseapp.com",
    projectId: "educrates-84cf6",
    storageBucket: "educrates-84cf6.appspot.com",
    messagingSenderId: "237527639171",
    appId: "1:237527639171:web:22faa4ca3161f5b24ca7b6"
};
  // Initialize Firebase
  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();

  export{db, firebaseApp as default}; 