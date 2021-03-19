import * as firebase from 'firebase';
import 'firebase/firebase-firestore';

  //Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD1VCZKcFD4lj-qT-YEFloogOW7Y_RppfA",
    authDomain: "venapp-2ef53.firebaseapp.com",
    projectId: "venapp-2ef53",
    storageBucket: "venapp-2ef53.appspot.com",
    messagingSenderId: "317802372818",
    appId: "1:317802372818:web:9a7ab98bd6cb946265570b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();

  export default firestore;
