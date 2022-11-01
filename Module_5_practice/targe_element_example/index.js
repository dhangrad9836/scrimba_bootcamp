const revealBtn = document.getElementById("reveal-btn");
const answer = document.getElementById("answer");
const question = document.getElementById("question");

revealBtn.addEventListener("click", function () {
  answer.style.display = "block";
  question.style.backgroundColor = "#68e1fd";
  question.style.color = "#1434A4";
  revealBtn.style.display = "none";
});

/*
Challenge
1. When the button is clicked and the answer revealed, 
   change the background color to #68e1fd and text color
   to #1434A4 just in the "question" div.
   ⚠️ You will run into a problem with the background 
   color. See if you can find the solution by googling.
2. When the answer is revealed, make the button disappear.
*/
