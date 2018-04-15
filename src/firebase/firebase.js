import * as firebase from 'firebase';

const prodConfig = {
    apiKey: "AIzaSyBIv2Aat3nbWV53uspHkm-49cQUh4bFv2g",
    authDomain: "react-todo-han.firebaseapp.com",
    databaseURL: "https://react-todo-han.firebaseio.com",
    projectId: "react-todo-han",
    storageBucket: "react-todo-han.appspot.com",
    messagingSenderId: "939035399573",
};

const devConfig = {
    apiKey: "AIzaSyBIv2Aat3nbWV53uspHkm-49cQUh4bFv2g",
    authDomain: "react-todo-han.firebaseapp.com",
    databaseURL: "https://react-todo-han.firebaseio.com",
    projectId: "react-todo-han",
    storageBucket: "react-todo-han.appspot.com",
    messagingSenderId: "939035399573"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
//const auth = firebase.auth();

export {
  db,
  //auth,
};