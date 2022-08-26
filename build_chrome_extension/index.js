// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
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
for (i = 0; i < myLeads.length; i++) {
  //console.log(myLeads[i]);
  //ulEl.textContent += myLeads[i] + ", ";
  ulEl.innerHTML += "<li>" + myLeads[i] + ", " + "</li>";
}
