import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDiCa7zzIjXDxyxLAfjI95S3W8BH-fjdjw",
    authDomain: "note-dc934.firebaseapp.com",
    databaseURL: "https://note-dc934.firebaseio.com",
    projectId: "note-dc934",
    storageBucket: "note-dc934.appspot.com",
    messagingSenderId: "959682867606"
};
firebase.initializeApp(config);

export const database = firebase.database().ref('/notes');

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();


