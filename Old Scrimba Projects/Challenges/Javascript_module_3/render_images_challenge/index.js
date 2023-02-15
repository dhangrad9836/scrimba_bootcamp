// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = ["images/hip1.jpg", "images/hip2.jpg", "images/hip3.jpg"];

const imgContainer = document.getElementById("container");
//const teamImg = document.getElementById("team-img");
//console.log(imgContainer);

//before refactored code we are running the innerHTML which is the dom every time the for loop runs
// function imgRender() {
//   for (i = 0; i < imgs.length; i++) {
//     imgContainer.innerHTML += `<img class="team-img" src="${imgs[i]}">`;
//   }
// }

//refactored code by adding an empty imgsDOM variable string which we can use to add the three images when the for loop is running and it will add an image to the imgsDOM variable then afterwards we can run the imgContainer.innerHTML which access the DOM rather than running the DOM all the time we just access it once
function imgRender() {
  let imgsDOM = "";
  for (i = 0; i < imgs.length; i++) {
    imgsDOM += `<img alt="Employee in the company" class="team-img" src="${imgs[i]}">`;
  }
  imgContainer.innerHTML = imgsDOM;
}

imgRender();

///this is an example below nothing to do with this lesson
//use .innerHTML to use "<li>" to render li items in the html
//1. create a variable, listItems, to hold all the HTML for the list items
//Assign it to an empty string to begin with
let listItems = "";
for (i = 0; i < myLeads.length; i++) {
  listItems += "<li>" + myLeads[i] + ", " + "</li>";
  //ulEl.innerHTML += "<li>" + myLeads[i] + ", " + "</li>";
  //console.log(listItems);
}
