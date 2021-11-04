// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";
import { getFirestore, addDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";
  

   
  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration

  const firebaseConfig = {

    apiKey: "AIzaSyAHVdCmEbPbdNLEBefpH8icIW7g-Y0bRdM",

    authDomain: "dogs-6d5ca.firebaseapp.com",

    projectId: "dogs-6d5ca",

    storageBucket: "dogs-6d5ca.appspot.com",

    messagingSenderId: "469646678406",

    appId: "1:469646678406:web:fbb0b39abc8779d846f407"

  };


  // Initialize Firebase

 const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);


 window.isLoggedIn = function(){
    return auth.currentUser !== null;
}

window.login = function(email,password){
    return signInWithEmailAndPassword(auth, email, password);
}

window.signup = function(email,password){
    return createUserWithEmailAndPassword(auth, email, password);
}

window.logout = function(){
    auth.signOut();
}

window.onLogin = function( f ){
    onAuthStateChanged(auth, user => {
        f( user );
    });
}


//////////////////////////////////////////////
// exposed functionality for db
window.addComment = function(comment){
    return addDoc( collection(db, "comments"), {comment} );
}

window.forEachComment = async function( f ){
    var docs = await getDocs( collection(db, "comments") );
    console.log(docs);
    docs.forEach( doc => f(doc.data()) );
}