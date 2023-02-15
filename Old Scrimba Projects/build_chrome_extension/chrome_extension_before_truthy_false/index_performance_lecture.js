// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field
let myLeads = [
  "www.awesomelead.com",
  "www.epiclead.com",
  "www.greatlead.com",
  "helloworld.com",
  "www.scrimba.com",
];
const inputEl = document.getElementById("input-el");

//add event listener for save input button
//first grab input button id
const inputBtn = document.getElementById("input-btn");

// 2. Grab the unordered list and store it in a const variable called ulEl
const ulEl = document.getElementById("ul-el");
//console.log(ulEl);
//second create event listener with click event and function
//make sure to get value from inputEl and push it to the myLeads array
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

//use .innerHTML to use "<li>" to render li items in the html
//1. create a variable, listItems, to hold all the HTML for the list items
//Assign it to an empty string to begin with
let listItems = "";
for (i = 0; i < myLeads.length; i++) {
  listItems += "<li>" + myLeads[i] + ", " + "</li>";
  //ulEl.innerHTML += "<li>" + myLeads[i] + ", " + "</li>";
  //console.log(listItems);
}
//place the ulEl.innerHTML outside the for loop so the DOM is not constantly updating
ulEl.innerHTML += listItems;

//3 Render the listItems inside the unordered list using ulEl.innerHTML

//use createElement, append methods
// for (i = 0; i < myLeads.length; i++) {
//   //console.log(myLeads[i]);
//   //ulEl.textContent += myLeads[i] + ", ";
//   //ulEl.innerHTML += "<li>" + myLeads[i] + ", " + "</li>";
//   // create element
//   const li = document.createElement("li");
//   // set text content
//   li.textContent = myLeads[i];
//   // append to ul
//   ulEl.append(li);
// }
