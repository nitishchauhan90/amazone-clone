import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCFyb6CdKsjgXvhEoIpOFYEeDXfeor2hk0",
    authDomain: "clone-fdac1.firebaseapp.com",
    projectId: "clone-fdac1",
    storageBucket: "clone-fdac1.appspot.com",
    messagingSenderId: "740424853404",
    appId: "1:740424853404:web:5c395ed7db0070fe11ca59",
    measurementId: "G-8HJNG3D44H"
};
const firebaseapp =firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();
const auth = firebase.auth();


export {db,auth};
