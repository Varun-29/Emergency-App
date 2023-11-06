import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth, } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "coh-auth.firebaseapp.com",
    databaseURL: "https://coh-auth-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "coh-auth",
    storageBucket: "coh-auth.appspot.com",
    messagingSenderId: "94607897320",
    appId: "YOUR_API_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

document.getElementById('confirmButton').addEventListener('click',(e)=>{
    e.preventDefault()
    auth.onAuthStateChanged((user) => {
        if (user) {
            var emergency_phone = user.emer_phone
            console.log(emergency_phone)
        } else {
            console.log('User not logged')
        }
    });
})
