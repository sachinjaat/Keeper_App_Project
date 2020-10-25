import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBh8OVmygDcpEwICCBE6_94LCVuZ6AbUkw",
    authDomain: "keep-clone-f33d7.firebaseapp.com",
    databaseURL: "https://keep-clone-f33d7.firebaseio.com",
    projectId: "keep-clone-f33d7",
    storageBucket: "keep-clone-f33d7.appspot.com",
    messagingSenderId: "949339968730",
    appId: "1:949339968730:web:4ee2e5e1c51e4b164481e3",
    measurementId: "G-QTZWYJ9H20"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;