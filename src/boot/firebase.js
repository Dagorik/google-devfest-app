import Firebase from 'firebase/app';
import 'firebase/auth';
import fireConfig from '../../firebase.conf';


// Initialize Firebase
const firebaseApp = Firebase.initializeApp(fireConfig);
const firebaseAuth = firebaseApp.auth();

export { firebaseAuth };
