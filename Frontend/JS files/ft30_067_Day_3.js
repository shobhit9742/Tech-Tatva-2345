var colors = [
  "white",
  "#feedc9",
  "#ebf7f5",
  "#e2e9f0",
  "#f4f7eb",
  "#e0efd1",
  "#f8d4f5",
];
var index = 0;
var secboxes = document.getElementsByClassName("secbox");
var colorbox = document.getElementsByClassName("colorcard");
setInterval(function () {
  for (var i = 0; i < secboxes.length; i++) {
    secboxes[i].style.backgroundColor = colors[index];
    colorbox[i].style.backgroundColor = colors[index];
  }
  index = (index + 1) % colors.length;
}, 4000);

//////////////////////// Handle Login / SignUp ////////////////////////////

let signInUserName = document.getElementById("signin-username");
let signInPassword = document.getElementById("signin-userPwd");
let signInSubmitBtn = document.getElementById("signin-submitBtn");

signInSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  login();
});

let users = [
  { username: "sagar@1234.com", password: "123456" },
  { username: "shobhit@123mail.com", password: "999999" },
  { username: "jayant@hotmail.com", password: "000000" },
];

// Function to handle login
function login() {
  console.log("clicked");

  let username = signInUserName.value;
  let password = signInPassword.value;

  // Check if user exists and password matches
  for (let user of users) {
    if (user.username === username && user.password === password) {
      window.location.href = "../Pages/land2.html";
      alert("Login successful!");
      return;
    }
    // else {
    //     window.location.href = "./admin.html";
    // }
  }

  alert("Invalid username or password!");
}

// Function to handle SignUp
let signUpEmail = document.getElementById("signUp_email");
let signUpPassword = document.getElementById("signUp_pwd");
let signUpSubmitBtn = document.getElementById("signUp_submit_btn");

function signup() {
  let username = signUpEmail.value;
  let password = signUpPassword.value;

  // Check if username is already taken
  for (let user of users) {
    if (user.username === username) {
      alert("Username already taken!");
      return;
    }
  }

  // Add new user to the database
  users.push({ username, password });
  alert("Signup successful!");
  window.location.href = "../Pages/land2.html";
}

signUpSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  signup();
});
