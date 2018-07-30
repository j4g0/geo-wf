import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAUgFcyRheEmw8hoCkb2xENUefK_3CVSA0",
  authDomain: "geo-wf.firebaseapp.com",
  databaseURL: "https://geo-wf.firebaseio.com",
  projectId: "geo-wf",
  storageBucket: "geo-wf.appspot.com",
  messagingSenderId: "31496289181"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()
