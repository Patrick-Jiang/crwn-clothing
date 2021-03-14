import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: 'crwn-db-21401.firebaseapp.com',
    projectId: 'crwn-db-21401',
    storageBucket: 'crwn-db-21401.appspot.com',
    messagingSenderId: '202287089077',
    appId: '1:202287089077:web:1f051e7a8a53662c2905fc',
    measurementId: 'G-CVJDKR6NEV'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;