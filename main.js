document.getElementById("loginForm").addEventListener("submit",(event)=>{
  event.preventDefault()
})

firebase.auth().onAuthStateChange((user)=> {
    if(user){
        location.replace("index.html")
    }
})

function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      alert("SignIn Successful");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}



