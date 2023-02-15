let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");

//remember the "myLeads" in the getItem is the key name for the key/value pair inside the localStorage
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

// 2. Listen for double clicks on the delete button (google it!)
deleteBtn.addEventListener("dblclick", function () {
  //console.log("you dbl clicked the button");
  localStorage.clear();
  myLeads = [];
  // 3. When clicked, clear localStorage, myLeads, and the DOM
  //the trick to clear the DOM is to just run again the renderLeads() function b/c from the above two localStorage.clear() and myLeads = [] ...which clears all the variables..by running the renderLeads() function it will re-run the an empty variables so nothing will display hence empty DOM
  renderLeads();
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
}
