import * as firebase from 'firebase';
export const db = firebase
  .initializeApp({
    databaseURL: 'https://my-project-1501683622618.firebaseio.com'
  })
  .database()