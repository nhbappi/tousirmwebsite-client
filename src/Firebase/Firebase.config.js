
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.react_app_apiKey,
  authDomain: process.env.react_app_authDomain,
  projectId: process.env.react_app_projectId,
  storageBucket: process.env.react_app_storageBucket,
  messagingSenderId: process.env.react_app_messagingSenderId,
  appId: process.env.react_app_appId,
};


const app = initializeApp(firebaseConfig);
export default app;