import Firebase from 'firebase/app';
import 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  
};
// Initialize Firebase
const firebaseApp = Firebase.initializeApp(firebaseConfig);
const firebaseAuth = firebaseApp.auth();

export { firebaseAuth };
