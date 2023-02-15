// Render the emojis as <span> tags in the emojisContainer <div>

// Hints: Use either createElement(), textContent, and append()
// or innerHTML and a template string

// 1. Loop through the myEmojis array and log each of them out to the console
// Render the emojis as <span> tags in the emojisContainer <div>

// Hints: Use either createElement(), textContent, and append()
// or innerHTML and a template string

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

///////////////////////////////////////////////////////////////////////////
// Hook an event listener up with the button, and log out the input field's value when it's clicked

const myEmojis = ["👨‍💻", "⛷", "🍲"];
const emojiContainer = document.getElementById("emojiContainer");
const emojiInput = document.getElementById("emoji-input");
const pushBtn = document.getElementById("push-btn");
const unshiftBtn = document.getElementById("unshift-btn");
const popBtn = document.getElementById("pop-btn");
const shiftBtn = document.getElementById("shift-btn");

/////////////////////////////////////////////////////////
// Push the emoji into the myEmoji's array, and clear the input field
// However, if the input value is empty, don't do anything

////////////////////////////////////////////////////////////
// Render the updated myEmojis array in the mini-browser.
// One solution: wrap the code for rendering the emojis in a function and make sure it
// clears away old version of the array before it renders the updated one
pushBtn.addEventListener("click", function () {
  if (emojiInput.value) {
    myEmojis.push(emojiInput.value);
    emojiInput.value = "";
    //clear old version of array b/f render which is the emojiContainer from the div
    //emojiContainer.innerHTML = "";
    render();
  }
});

//this will add the emoji input to the beginning of the array with unshift method
unshiftBtn.addEventListener("click", function () {
  myEmojis.unshift(emojiInput.value);
  emojiInput.value = "";
  //clear old version of array b/f render which is the emojiContainer from the div
  //emojiContainer.innerHTML = "";
  render();
});

//remove emojis from the end
popBtn.addEventListener("click", function () {
  myEmojis.pop();
  //   emojiInput.value = "";
  //clear old version of array b/f render which is the emojiContainer from the div
  //emojiContainer.innerHTML = "";
  render();
});

//remove emojis from the beginning
shiftBtn.addEventListener("click", function () {
  myEmojis.shift();
  //emojiInput.value = "";
  render();
});

//loop through myEmojis array
//create element span...
//add emoji to span with .textContent
//append to DOM
// for (let i = 0; i < myEmojis.length; i++) {
//   // write your code here
//   const emoji = document.createElement("span");
//   emoji.textContent = myEmojis[i];
//   emojiContainer.append(emoji);
// }

function render() {
  //clear old version of array b/f render which is the emojiContainer from the div
  emojiContainer.innerHTML = "";
  for (let i = 0; i < myEmojis.length; i++) {
    // write your code here
    const emoji = document.createElement("span");
    //adding emoji from array to DOM
    emoji.textContent = myEmojis[i];
    emojiContainer.append(emoji);
  }
}

//run the render function()
render();
