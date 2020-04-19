import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyAD5ow45W3uSUfIKdZc1US2Df7h-7vKIys",
    authDomain: "react-slack-clone-eb551.firebaseapp.com",
    databaseURL: "https://react-slack-clone-eb551.firebaseio.com",
    projectId: "react-slack-clone-eb551",
    storageBucket: "react-slack-clone-eb551.appspot.com",
    messagingSenderId: "429656830255",
    appId: "1:429656830255:web:831b4894caa7ef310471da",
    measurementId: "G-9C8ZEH94BZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase; 