import firebase from "firebase";
import {
  API,
  APP_ID,
  AUTH_DOMAIN,
  DATABASE_URL,
  MEASUREMENT_ID,
  MESSAGING_SENDER,
  PROJECT_ID,
  STORAGE_BUCKET,
} from "./config";

const firebaseConfig = {
  apiKey: API,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
