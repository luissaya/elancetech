import firebase from 'firebase/compat/app'
import { getFirestore } from 'firebase/firestore'

// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
    apiKey: "AIzaSyAiS2LVU3hcl11mrUGpPXpAwNrA6yF2cs4",
    authDomain: "elancetech-8d37a.firebaseapp.com",  
    databaseURL: "https://elancetech-8d37a-default-rtdb.firebaseio.com",
    projectId: "elancetech-8d37a",
    storageBucket: "elancetech-8d37a.appspot.com",
    messagingSenderId: "163243328612",
    appId: "1:163243328612:web:26c8aa43b5def0de938b71",
    measurementId: "G-KD6N06430N"
  };

const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);

