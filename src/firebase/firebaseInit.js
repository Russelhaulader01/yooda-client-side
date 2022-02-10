import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase-config";

const InitializeFirebase = () => {
  return  initializeApp(firebaseConfig);
}
export default InitializeFirebase;