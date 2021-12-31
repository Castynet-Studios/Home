import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBW-m3dqGoxKxXPSyJU6WkECxh_ORZHl2k",
  authDomain: "castynet-e445a.firebaseapp.com",
  projectId: "castynet-e445a",
  storageBucket: "castynet-e445a.appspot.com",
  messagingSenderId: "1052930236216",
  appId: "1:1052930236216:web:ffa66aa2fa156729c2ebcd",
  measurementId: "G-R9FHR78EZQ",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);
