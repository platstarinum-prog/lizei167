import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// 🔥 ТВОЙ Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBMMylnfXj63t-CCKXvrES8gFKuRqaCYXE",
  authDomain: "lyzeum-99cd9.firebaseapp.com",
  projectId: "lyzeum-99cd9",
  storageBucket: "lyzeum-99cd9.appspot.com",
  messagingSenderId: "145866624253",
  appId: "1:145866624253:web:a50dcefe80916028e5c294"
};

// 🚀 INIT APP
const app = initializeApp(firebaseConfig);

// 🔐 AUTH (логин директора)
export const auth = getAuth(app);

// 🗄 FIRESTORE (новости, события)
export const db = getFirestore(app);

// 📸 STORAGE (фото, файлы)
export const storage = getStorage(app);