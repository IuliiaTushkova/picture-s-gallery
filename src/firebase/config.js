import { firebase } from '@firebase/app'
import 'firebase/storage';
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyAruy1V7SB_bLGgqLmnk0mKksqSSQXG0HA",
    authDomain: "picture-s-gallery.firebaseapp.com",
    databaseURL: "https://picture-s-gallery-default-rtdb.firebaseio.com",
    projectId: "picture-s-gallery",
    storageBucket: "picture-s-gallery.appspot.com",
    messagingSenderId: "549427128273",
    appId: "1:549427128273:web:8b356e31c5149b504262f0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };