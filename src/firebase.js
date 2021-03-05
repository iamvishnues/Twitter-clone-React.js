import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCKiHxL1MeIHe90cCjNL0_U3qP9R9qk690",
  authDomain: "twitter-react-af2fa.firebaseapp.com",
  projectId: "twitter-react-af2fa",
  storageBucket: "twitter-react-af2fa.appspot.com",
  messagingSenderId: "1097715210313",
  appId: "1:1097715210313:web:a16a58dd5e670e7071c798",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
