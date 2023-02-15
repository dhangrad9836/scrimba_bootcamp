let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

//localStorage.setItem("myLeads", "www.exampleLead.com");
//console.log(localStorage.getItem("myLeads"));

//localStorge example
//localStorage.setItem("myExample", "www.example.com");
// console.log(localStorage.getItem("myExample"));
// localStorage.clear();

////////////////////////////////////////////////////////////////////////////////
// Get the leads from the localStorage - PS: JSON.parse()
// Store it in a variable, leadsFromLocalStorage
// Log out the variable
localStorage.clear();

//remember the "myLeads" in the getItem is the key name for the key/value pair inside the localStorage
let storedLeads = JSON.parse(localStorage.getItem("myLeads"));
//storedLeads = JSON.parse(storedLeads);
console.log(`These are the leads ${storedLeads}`);

inputBtn.addEventListener("click", function () {
  //once the click event is triggered this function pushes the string value from intpuEl to the myLeads array..then after the renderLeads() function is called
  myLeads.push(inputEl.value);
  //////////////////////////////////////////////////////////////////////////////////
  // Save the myLeads array to localStorage
  // PS: remember JSON.stringify()
  //solution = the localStorage is setting the item of the key myLeads and the array myLeads is being strinigfied with the JSON object
  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  //rember how functions work...after the function is executed the code will return back to this line and see if there is any other execution below...which we have our inputEl.value = "" ...which will clear the input field
  inputEl.value = "";

  // 2. Call the renderLeads() function
  renderLeads();

  // To verify that it works:
  console.log(localStorage.getItem("myLeads"));
});

// 1. Wrap the code below in a renderLeads() function
function renderLeads() {
  let listItems = "";

  for (let i = 0; i < myLeads.length; i++) {
    //this adds the items entered into the listItems string and then it's rendered into the dom below
    listItems += `
      <li><a target='_blank' href ="${myLeads[i]}">${myLeads[i]}</a></li>`;
  }
  ulEl.innerHTML = listItems;
}
