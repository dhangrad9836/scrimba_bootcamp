/*
Challenge:
1. Log out the phrase "Modal Opened!" 
   after a 1.5 second delay.
*/

const modal = document.getElementById("modal");
const closeBtn = document.getElementById("modal-close-btn");

//timeout function to display modal after 1.5sec
setTimeout(function () {
  //   console.log("Modoal Opened!");
  modal.style.display = "inline";
}, 1500);

//close button to close modal
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// deleteBtn.addEventListener("dblclick", function () {
//   localStorage.clear();
//   myLeads = [];
//   render(myLeads);
// });

// setTimeout(function () {
//   console.log("Lima!");
// }, 3000);

/*
Challenge:
1. Take control of the 'modal' div with JavaScript.
2. Swap out our console.log for a line of code
   which will change the CSS 'display' property
   of our modal to 'inline'.
*/
