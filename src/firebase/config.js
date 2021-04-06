import firebase from 'firebase/app'

import 'firebase/storage'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyBwNYgem6iqEwzG8F2GNRp1rmAFFZPrtXM",
  authDomain: "vale-946b4.firebaseapp.com",
  projectId: "vale-946b4",
  storageBucket: "vale-946b4.appspot.com",
  messagingSenderId: "367317039040",
  appId: "1:367317039040:web:833992863e0dbe80267a25"
}

firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp }