import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyAgKTWNfOlqB4indJDA0Kv76hWB8VT0bKI",
  authDomain: "tiktokclone---jornadadev.firebaseapp.com",
  projectId: "tiktokclone---jornadadev",
  storageBucket: "tiktokclone---jornadadev.appspot.com",
  messagingSenderId: "834018943789",
  appId: "1:834018943789:web:ef420b6fb123bb33a269a4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;