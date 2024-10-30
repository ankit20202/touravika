importScripts('https://www.gstatic.com/firebasejs/8.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.5.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyAv4cWdDJS241httoVdmq0owEE8hPovgjc",
  authDomain: "toraveka-fcb14.firebaseapp.com",
  databaseURL: "https://toraveka-fcb14-default-rtdb.firebaseio.com",
  projectId: "toraveka-fcb14",
  storageBucket: "toraveka-fcb14.appspot.com",
  messagingSenderId: "277968356430",
  appId: "1:277968356430:web:3ff1eb2293612536842f1f",
  measurementId: "G-F11SY36S5H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
