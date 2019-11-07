import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

let firebaseConfig = {
  apiKey: "AIzaSyBkeYggIjbtPAbsPhJTBjsS1j4wk2PwZ5A",
  authDomain: "vuecrm-551d1.firebaseapp.com",
  databaseURL: "https://vuecrm-551d1.firebaseio.com",
  projectId: "vuecrm-551d1",
  storageBucket: "vuecrm-551d1.appspot.com",
  messagingSenderId: "496915348373",
  appId: "1:496915348373:web:7d878d3c3f1572634c949c"
};

let app = null;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
}

export const db = firebase;

// /////////////////////////

// Your web app's Firebase configuration

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// let app;

// firebase.auth().onAuthStateChanged(() => {
//   if (!app) {
//     app = new Vue({
//       store,
//       router,
//       render: h => h(App)
//     }).$mount("#app");
//   }
// });
