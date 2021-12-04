import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAGF9bBFIedLpD3hAC1ytDthCbK_9FoC1o",
  authDomain: "twitter-app-ec543.firebaseapp.com",
  databaseURL: "https://twitter-app-ec543.firebaseio.com",
  projectId: "twitter-app-ec543",
  storageBucket: "twitter-app-ec543.appspot.com",
  messagingSenderId: "564289983856",
  appId: "1:564289983856:web:5f3eb2172f025cc654ebb5",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const provider = new firebase.auth.GoogleAuthProvider();
