import * as firebase from 'firebase/app';
import 'firebase/auth';


// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBRPNotOHiVYIW1XKQSw7YKSm79rpw1Q28',
  authDomain: 'devfest-a8928.firebaseapp.com',
  databaseURL: 'https://devfest-a8928.firebaseio.com',
  projectId: 'devfest-a8928',
  storageBucket: 'devfest-a8928.appspot.com',
  messagingSenderId: '631808106825',
  appId: '1:631808106825:web:7dd76ac4ef2b08616cfa98',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAuth = firebaseApp.auth();

export { firebaseAuth };
