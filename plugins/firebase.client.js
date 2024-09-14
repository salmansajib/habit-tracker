import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin(() => {
  const firebaseConfig = {
    apiKey: "AIzaSyCFNxBqX_ygHcMOg_3_1YfZuPMBltz7Qrg",
    authDomain: "habit-tracker-app-edc68.firebaseapp.com",
    projectId: "habit-tracker-app-edc68",
    storageBucket: "habit-tracker-app-edc68.appspot.com",
    messagingSenderId: "410735794098",
    appId: "1:410735794098:web:ea01e2524db12b875d36ab",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  return {
    provide: {
      firebaseApp: app,
      db,
    },
  };
});
