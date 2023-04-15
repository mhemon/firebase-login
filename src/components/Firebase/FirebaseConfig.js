// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF1cfb556NBqgDxHPGW6v4UPZ9v2FVl90",
  authDomain: "fir-auth-practice-ce502.firebaseapp.com",
  projectId: "fir-auth-practice-ce502",
  storageBucket: "fir-auth-practice-ce502.appspot.com",
  messagingSenderId: "684066713603",
  appId: "1:684066713603:web:888a5111bc76b7f5fade36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app