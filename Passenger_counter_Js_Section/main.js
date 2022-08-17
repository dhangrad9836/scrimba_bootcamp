let count = 0;
//store count-el from html to a variable
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
//console.log(countEl);
//1. Grab the save-el paragraph and store it in variable saveEl
//let saveEl = document.getElementById("save-el");
//console.log(saveEl);

//document.getElementById('count').innerText = 5

//remember that the function is attached to the button as a click eventlistener in the html
function increment() {
  count += 1;
  //this will increment the innertext for the count
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  //2 Create a variable that contains both count and the dash seperator, i.e. "12 - "
  //3 Render the variable in the saveEl using innerText
  //note if you set saveEl.innerText = countStr...everytime it will delete the existing content..you need to += countStr
  //saveEl.innerText = countStr;
  //    this will save the count and display in previous entries
  saveEl.textContent += countStr;
  //this will reset the textContent of the counter to 0
  countEl.textContent = 0;
  //we also need to reset the count back to zero or it will just start where you left off from above
  count = 0;

  //NB: make sure to not to delete the existing content of the paragraph
  //count;
}
