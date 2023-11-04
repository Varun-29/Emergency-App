import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { getDatabase,ref,onValue } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB4IFyLYNlmu6eV2TJX8ES6xACydl2bzzU",
  authDomain: "coh-auth.firebaseapp.com",
  databaseURL: "https://coh-auth-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "coh-auth",
  storageBucket: "coh-auth.appspot.com",
  messagingSenderId: "94607897320",
  appId: "1:94607897320:web:f7bc26674e162b9f5d4f5d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase(app);

auth.onAuthStateChanged((user) => {
  if (user) {
    var emailValue = user.email
    const emailInfo = document.getElementById("email");
    emailInfo.value = emailValue
  } else {
    console.log('User not logged')
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const locationInfo = document.getElementById("location");
  if ("geolocation" in navigator) { 
      navigator.geolocation.getCurrentPosition(function(position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // Replace 'YOUR_NOMINATIM_API_URL' with the Nominatim API endpoint URL
          const nominatimUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

          fetch(nominatimUrl)
              .then(response => response.json())
              .then(data => {
                  if (data.address) {
                      const address = `${data.address.road}, ${data.address.city}, ${data.address.state}, ${data.address.country}`;
                      locationInfo.value = `${address}`;
                  } else {
                      locationInfo.value = "Nominatim API request failed";
                  }
              })
              .catch(error => {
                  locationInfo.value = `Error: ${error.message}`;
              });
      }, function(error) {
          locationInfo.value = `Error: ${error.message}`;
      });
  } else {
      locationInfo.value = "Geolocation is not available in this browser.";
  }
});
