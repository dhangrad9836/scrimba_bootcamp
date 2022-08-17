let username = "per";
let message = `You have three new notifications`;
let messageToUser = username + ", " + message;

let name = "Darren";
let greeting = "Hi, my name is ";

let myGreeting = `${greeting} ${name}`;

let backMessage = document.getElementById("welcome-el");
let firstName = " Darren";
let greetingWelcome = "Welcome back to Scrimba!";

backMessage.innerText = greetingWelcome + firstName;
//console.log(backMessage.innerText = greetingWelcome + firstName)

//backMessage.innerText = m + "👋"
//takes old message from backMessage.innerText from above and concatenates the emoji
backMessage.innerText += "👋";
