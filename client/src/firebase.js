import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyC38b3AUUjt6jh05JC5YFRhGavmatFG-oU',
  authDomain: 'peak-performance-47127.firebaseapp.com',
  databaseURL: 'https://peak-performance-47127.firebaseio.com',
  projectId: 'peak-performance-47127',
  storageBucket: 'peak-performance-47127.appspot.com',
  messagingSenderId: '1046043852010'
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;