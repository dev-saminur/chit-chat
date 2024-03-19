// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvSdjCcX-0FvpbqsWixmRIAcYSg7y3diU",
  authDomain: "chat-app-9f08c.firebaseapp.com",
  databaseURL: "https://chat-app-9f08c-default-rtdb.firebaseio.com",
  projectId: "chat-app-9f08c",
  storageBucket: "chat-app-9f08c.appspot.com",
  messagingSenderId: "325397791962",
  appId: "1:325397791962:web:d0c3d30b64509920d4d1e3",
  measurementId: "G-2LERGC6G9W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig;
