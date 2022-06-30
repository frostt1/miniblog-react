
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'



const firebaseConfig = {

  apiKey: "AIzaSyBlSJs_rWvtS1DyMLo_6Y_IOB2wbaS3Cm4",

  authDomain: "miniblog-ea306.firebaseapp.com",

  projectId: "miniblog-ea306",

  storageBucket: "miniblog-ea306.appspot.com",

  messagingSenderId: "1000562111464",

  appId: "1:1000562111464:web:d6f467cc17a77d34e72a5d"

};




const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }