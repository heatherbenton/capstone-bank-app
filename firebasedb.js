import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Set the configuration for your app
// TODO: Replace with your project's config object
const firebaseConfig = {
  apiKey: "AIzaSyAnquO2xi3HzlszxDLkhNBmPXw87IRGW0o",
  authDomain: "capstone-ba198.firebaseapp.com",
  databaseURL: "https://capstone-ba198-default-rtdb.firebaseio.com",
  projectId: "capstone-ba198",
  storageBucket: "capstone-ba198.appspot.com",
  messagingSenderId: "186541780806",
  appId: "1:186541780806:web:d677327ec3009b8f0f7f47",
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);
