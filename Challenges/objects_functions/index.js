// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format:
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

let person = {
  name: "Darren",
  age: 43,
  country: "USA",
};

function logData() {
  return `${person.name} is ${person.age} years old and lives in ${person.country}`;
}

console.log(logData());

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let age = 15;

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

if (age < 6) {
  console.log("You get in for free");
} else if (age >= 6 && age <= 17) {
  console.log("You get a child discount");
} else if (age >= 18 && age <= 26) {
  console.log("You get a student discount");
} else if (age >= 27 && age <= 66) {
  console.log("You pay full price");
} else {
  console.log("You get a senior citizen discount");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/
for (let i = 0; i < largeCountries.length; i++) {
  console.log("- " + largeCountries[i] + " ");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let largeCountriesFix = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

// You need to help me fixup the largeCountries array so that
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()
largeCountriesFix.shift();
largeCountriesFix.unshift("China");
largeCountriesFix.push("Pakistan");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let dayOfMonth = 13;
let weekday = "Friday";

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&

if (dayOfMonth === 13 && weekday === "Friday") {
  console.log("😱");
} else {
  console.log("Not friday 13");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let hands = ["rock", "paper", "scissor"];

// Create a function that returns a random item from the array

function randomHand() {
  //1 This is taking the hands.length which is 3
  //2. We then now can do math.floor and math.random which will take an number from 1 - 3
  //3 then with the random number, this is our index which we will use to select from the hands array
  return hands[Math.floor(Math.random() * hands.length)];
}

randomHand();
