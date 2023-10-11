// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPcVwzNcXpwP89M3EsVFVgEDKRDEMQFKo",
  authDomain: "arboretum-y-palmetum-unmed.firebaseapp.com",
  projectId: "arboretum-y-palmetum-unmed",
  storageBucket: "arboretum-y-palmetum-unmed.appspot.com",
  messagingSenderId: "959289453092",
  appId: "1:959289453092:web:2fe72546cc4161beb506b1",
};

// Initialize Firebase
// const app =
initializeApp(firebaseConfig);
const db = getFirestore();

//collection ref
export const colRefVolador = collection(db, "CAMPUS-VOLADOR");
export const colRefTodas = collection(db, "TODAS-ESPECIES");
export const getDocRef = (collection, id) => doc(db, `${collection}`, `${id}`);
//get collection data
// getDocs(colRefVolador)
//   .then((snapshot) => {
//     console.log("snapshots", snapshot.docs);
//     let books = [];
//     snapshot.docs.forEach((doc) => {
//       books.push({ ...doc.data(), id: doc.id });
//     });
//     console.log("books", books);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });
