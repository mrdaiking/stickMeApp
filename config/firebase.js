import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDMpLMlvxGwe8b-_f2G92qOdQ3iu-VBfac",
    authDomain: "stickme-8445a.firebaseapp.com",
    databaseURL: "https://stickme-8445a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "stickme-8445a",
    storageBucket: "stickme-8445a.appspot.com",
    messagingSenderId: "483719318805",
    appId: "1:483719318805:web:36296ed1f22e312b026d1c",
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;