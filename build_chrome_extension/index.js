// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el");

//add event listener for save input button
//first grab input button id
const inputBtn = document.getElementById("input-btn");

//second create event listener with click event and function
//make sure to get value from inputEl and push it to the myLeads array
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

for (i = 0; i < myLeads.length; i++) {
  console.log(myLeads[i]);
}
