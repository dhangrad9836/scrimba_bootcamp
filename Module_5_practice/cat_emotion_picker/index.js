import { catsData } from "/data.js";

// function getEmotionsArray(cats){
//     const emotionsArray = []
//     for (let i = 0; i < cats.length; i++){
//         for (let j=0; j < cats[i].emotionTags.length; j++){
//                 emotionsArray.push(cats[i].emotionTags[j])
//         }
//     }

/*
Challenge:
1. Set up a "for of" in getEmotionsArray to iterate 
   over the data.
2. For now, just log out each cat object individually.
*/

/*
Challenge:
1. Add a nested "for of" to log out just 
   the emotions from the emotionTags array 
   in each object.
*/

//empty array to hold the cats emotions
const catEmotionsArray = [];

function getEmotionsArray(cats) {
  for (let cat of cats) {
    //console.log(cat.alt);
    for (let emotion of cat.emotionTags) {
      //push each cat emotion to the catEmotions array
      catEmotionsArray.push(emotion);
    }
  }

  return catEmotionsArray;
} //end getEmotionsArray function

//ex console.log to show function with array as arguement
//console.log(getEmotionsArray(catsData));

/*
Challenge:
1. Have the new function "renderEmotionsRadios" 
   take in a single parameter. Name that parameter
   "cats". 
2. Inside renderEmotionsRadios, set up a const called 
   "emotions" and set it equals to whatever is returned 
   by calling getEmotionsArray, passing in "cats" as an 
   argument.
3. For now, renderEmotionsRadios should just log out 
   "emotions".
4. Call renderEmotionsRadios passing in catsData.
*/

/*
Challenge:
1. Take control of the 'emotion-radios' div.
2. In renderEmotionsRadios, set up a let 
   to hold our string of HTML. You can initialise
   it with an empty string.
3. Iterate over "emotions" and put each emotion 
   in a <p> tag and then add them to the let you 
   created in step 2. 
4. Render the string to the 'emotion-radios' div.
*/

const emotionsRadios = document.getElementById("emotion-radios");

function renderEmotionsRadios(cats) {
  const emotions = getEmotionsArray(cats);
  let catEmotions = "";
  for (let i of emotions) {
    catEmotions += `<p>${i}</p>`;
  }
  emotionsRadios.innerHTML = catEmotions;
}

//pass the catsData array to the renderEmotionsRadios
renderEmotionsRadios(catsData);

// document.getElementById(
//   "modal-inner"
// ).innerHTML = `<h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
//         <p>We just sold the rights to your eternal soul.</p>
//         <div class="idiot-gif">
//             <img src="images/pirate.gif">
//         </div>`;
