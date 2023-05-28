import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC4XjONUhv_otRv78y6jUFjMNUIO5BoC3g",
  authDomain: "smart-f3887.firebaseapp.com",
  databaseURL: "https://smart-f3887-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "smart-f3887",
  storageBucket: "smart-f3887.appspot.com",
  messagingSenderId: "90310114523",
  appId: "1:90310114523:web:4cc16d94d1b4d5a626e0fe"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const putCalculation = (data) => {

  set(ref(database, 'calculation/' + data.calcId), {
    name: data.name,
    phone: data.phone,
    placement: data.placement,
    stageReadyPlacement: data.stageReadyPlacement,
    additional: data.additional
  })
}

export const putCall = (data) => {

  set(ref(database, 'call/' + data.callId), {
    name: data.name,
    phone: data.phone,
    comment: data.comment
  })
}