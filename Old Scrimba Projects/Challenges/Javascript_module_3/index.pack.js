// SETTING THE STAGE
const player = "Per";
const opponent = "Nick";
const game = "AmazingFighter";
let points = 0;
let hasWon = false;

// PLAYING THE GAME
points += 100;
hasWon = true;

// ANNOUNCING THE WINNER
if (hasWon) {
  console.log(`${player} got ${points} points and won the ${game}  game!`);
} else {
  console.log(`The winner is ${opponent}! " ${player}lost the game`);
}

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes

//////////////////////////////////////////////////////////////////////////////////////////////
let myCourses = [
  "Learn CSS Animations",
  "UI Design Fundamentals",
  "Intro to Clean Code",
];

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

function courses(arr) {
  for (i = 0; i < arr.lenght; i++) {
    return arr[i];
  }
}

console.log(myCourses);

//////////////////////////////////////////////////////////////////////////////////
// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out
//localStorage.setItem("name", name_person);
//localStorage.setItem("first_key", "10");

let myCredits = localStorage.getItem("first_key");
console.log(myCredits);

//////////////////////////////////////////////////////////////////////////////////
let data = [
  {
    player: "Jane",
    score: 52,
  },
  {
    player: "Mark",
    score: 41,
  },
];

// Fetch the button from the DOM, store it in a variable
const janeBtn = document.getElementById("jane_btn");

// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)
janeBtn.addEventListener("click", function () {
  console.log(data[0].score);
});

/////////////////////////////////////////////////////////////////////////////////
// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
function generateSentence(desc, arr) {
  for (i = 0; i < arr.length; i++) {
    arr[i];
  }
  console.log(`The ${i} ${desc} are ${arr}`);
}

generateSentence("largest countries", ["China", "India", "USA"]);

/////////////////////////////////////////////////////////////////////////////////////////
function generateSentence(desc, arr) {
  let baseString = `The ${arr.length} ${desc} are `;
  const lastIndex = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (i === lastIndex) {
      baseString += arr[i];
    } else {
      baseString += arr[i] + ", ";
    }
  }
  return baseString;
}

const sentence = generateSentence("highest mountains", ["Mount Everest", "K2"]);
console.log(sentence);
