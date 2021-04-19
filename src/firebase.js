import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBlVG_fUAElpd3AkNL9_CyFyQ0uw1Jf7VU',
  authDomain: 'discordapp-64384.firebaseapp.com',
  projectId: 'discordapp-64384',
  storageBucket: 'discordapp-64384.appspot.com',
  messagingSenderId: '613926028073',
  appId: '1:613926028073:web:4e600c198b69fdd7f0ad38',
  measurementId: 'G-RF91YJKRGT',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
