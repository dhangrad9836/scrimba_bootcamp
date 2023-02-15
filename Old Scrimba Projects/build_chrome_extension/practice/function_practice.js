const welcomeEl = document.getElementById("welcome-el");

// Add the ability to choose the emoji as well!

function greetUser(greet, name, wave) {
  welcomeEl.textContent = `${greet},  ${name}  ${wave}`;
}

greetUser("Welcome back", "James", "👋");

// Create a function, add(), that adds two numbers together and returns the sum

function add(x, y) {
  return x + y;
}

console.log(add(3, 4)); // should log 7
console.log(add(9, 102)); // should log 111

/////////////////////////////////////////////////////////////////
let names = ["Darren", "Elvira", "Mark", "Nelson"];
// Create a function, getFirst(arr), that returns the first item in the array
function getFirst(arr) {
  console.log(arr);
}

// Call it with an array as an argument to verify that it works
getFirst(names[0]);

////////////////////////////////////////////////////////////
//using return
function getFirsts(arr1) {
  return arr1[0];
}

console.log(getFirsts(["Elvira", "Mark", "Nelson"]));
