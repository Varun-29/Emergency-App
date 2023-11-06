import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { getDatabase,ref,set } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";


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
const database = getDatabase(app);

const profileForm = document.getElementById('profile-form');

profileForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission
    auth.onAuthStateChanged((user) => {
    if (user) {
        const name = profileForm.querySelector('#name').value;
        const phone = profileForm.querySelector('#phone').value;
        const emer_phone = profileForm.querySelector('#emer_phone').value;
        const age = profileForm.querySelector('#age').value;
        const gender = profileForm.querySelector('#gender').value;
        const blood = profileForm.querySelector('#blood').value;
    
        const data = {
            name: name,
            phone: phone,
            emer_phone: emer_phone,
            age: age,
            gender: gender,
            blood: blood,
        };
        
        const uid = user.uid;

        set(ref(database,'users/' + uid),data)
            .then(() => {
                alert('Updated successfully');
                window.open('/')
            })
            .catch((error) => {
                alert(error);
            });
    } 
    else {
        alert('User not logged in')
    }
    });
});
