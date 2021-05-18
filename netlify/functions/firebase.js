const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyAWF1-wtffGFjuddIqX69LTWPKMO8aDm5s",
  authDomain: "kiei-451-cherylhu.firebaseapp.com",
  projectId: "kiei-451-cherylhu",
  storageBucket: "kiei-451-cherylhu.appspot.com",
  messagingSenderId: "844782751021",
  appId: "1:844782751021:web:a7d1f3c230a5f21d8057a4"
} // replace from my own project

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase