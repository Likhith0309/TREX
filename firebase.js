const firebaseConfig = {
  apiKey: "AIzaSyBFyGJNSgo41QWDQW34ldYv8BBR6Y8UhEI",
  authDomain: "trex-game-fb6a0.firebaseapp.com",
  databaseURL: "https://trex-game-fb6a0-default-rtdb.firebaseio.com",
  projectId: "trex-game-fb6a0",
  storageBucket: "trex-game-fb6a0.appspot.com",
  messagingSenderId: "648195766796",
  appId: "1:648195766796:web:ef02dabfa5136c547c0c29",
  measurementId: "G-8FFGFV0WL4"
};

firebase.initializeApp(firebaseConfig);

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const loginMessage = document.getElementById('login-message');

loginBtn.addEventListener('click', () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      loginMessage.innerText = `Logged in as ${user.email}`;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      loginMessage.innerText = errorMessage;
    });
});




 