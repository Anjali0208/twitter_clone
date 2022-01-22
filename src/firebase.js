import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCfSoh0CCBdbdIaaplhUkb-yp0rTXr3xzM",
  authDomain: "twitter-clone-68831.firebaseapp.com",
  projectId: "twitter-clone-68831",
  storageBucket: "twitter-clone-68831.appspot.com",
  messagingSenderId: "345801453412",
  appId: "1:345801453412:web:1ca70820ba91f4224e5471",
  measurementId: "G-2RGNGDDC1D"

}

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
