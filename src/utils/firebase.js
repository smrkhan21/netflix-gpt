// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwrbnaiSz9iN8GTAdG7SsI-eN7864n1t0",
  authDomain: "netflix-cb527.firebaseapp.com",
  projectId: "netflix-cb527",
  storageBucket: "netflix-cb527.appspot.com",
  messagingSenderId: "762259019672",
  appId: "1:762259019672:web:e8561d43d1600daaf67ded",
  measurementId: "G-D3PWC48X6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);