import { catsData } from "/data.js";

const emotionsRadios = document.getElementById("emotion-radios");
const getImageBtn = document.getElementById("get-image-btn");
const gifChecked = document.getElementById("gifs-only-option");
const memeModal = document.getElementById("meme-modal");
const memeModalInner = document.getElementById("meme-modal-inner");
const memeModalCloseBtn = document.getElementById("meme-modal-close-btn");

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

/*
Challenge:
1. Set up an eventlistener which calls a new
   function called "getMatchingCatsArray" when
   the "Get Image" button is clicked.
2. getMatchingCatsArray should save the value
   of the checked radio input to a const and 
   log out that const.
*/

//Wire up the modal close button and set modal display to none
//Note that we didn't use the other addEventListener with function inside because that sets an anonyomous function w/o a name...this way we set our event listener with a name called closeModal but w/o the () parentheses and set a function below with the logic and when the close button is clicked the eventListener fires and the function runs
memeModalCloseBtn.addEventListener("click", closeModal);

function closeModal() {
  memeModal.style.display = "none";
}

//PROGRAM STARTS HERE

//getImageBtn.addEventListener("click", getMatchingCatsArray);
getImageBtn.addEventListener("click", renderCat);

//purpose to store in checkedRadio variable if user has checked a radio button
//and in ifGif variable if user has selected the Animated GIFs only checkbox
//we will use both variables to filter out our catsData array
function getMatchingCatsArray() {
  /*
Challenge:
1. Add code to getMatchingCatsArray so 
   that the two existing lines of code 
   only run if an emotion has been selected.
note: that the line: document.querySelector("input[type='radio']:checked" will tell us if a radio button has been checked
*/
  if (document.querySelector("input[type='radio']:checked")) {
    const checkedRadio = document.querySelector(
      "input[type='radio']:checked"
    ).value;
    //console.log(checkedRadio);

    /*
Challenge:
1. Take control of the gifs only option checkbox.
2. Set up a const in getMatchingCatsArray to store 
   a boolean which will be set to true if the 
   "gifs only" option is checked and false if it's
   not. (Think what a good name for this const would 
   be.)
3. Log it out to check it's working.
*/
    const isGif = gifChecked.checked;
    //console.log(isGif);

    /*
Challenge:
1. Use the .filter() and .includes() methods to get 
   an array of cats which have the selected emotion
   in their emotionTags array. 
2. Store this array in a const and log it out to check
   it's working. Think: what would be a good name for the
   const?
*/

    //  const catsMatchingData = catsData.filter(function (emotion) {
    //    return emotion.emotionTags.includes(checkedRadio);
    //  });
    //  console.log(catsMatchingData);

    /*
Challenge:
1. Change the .filter() method's function so it returns an 
   array that only has GIFs if the 'GIFs only' option is 
   checked. If the 'GIFs only' option is not checked, it
   should return an array of all matches as it does now.
   Also note that when using the filter method we have to return the data back…here we are returning the catsMatchingData variable;
*/

    const catsMatchingData = catsData.filter(function (emotion) {
      if (isGif) {
        return emotion.emotionTags.includes(checkedRadio) && emotion.isGif;
      } else {
        return emotion.emotionTags.includes(checkedRadio);
      }
    });
    return catsMatchingData;
  } // end if statement
} //end getMatchingCatsArray

/*
Challenge:
1. Add an eventListener to emotionRadios that will listen 
   out for any *change* in our radio buttons. When it detects
   a change, it should log out the id of the element that 
   was selected.
⚠️️ ️T️h️is won't work if the eventListener is listening out for a 
   'click'. Google what event to listen for - I've already 
   given you a clue!
*/

//emotionsRadio eventListener for any change
//we have the highlightCheckedOption function inside that will trigger when any change is made from the eventListener of emotionsRadios...note we don't have any parenthses after the function name because we don't want to invoke the function and run automatically..only when there is a "change" ie: when we change to a different radio button
emotionsRadios.addEventListener("change", highlightCheckedOption);

//we will create a function to be triggered when anychanges are made inside the eventListener from above
function highlightCheckedOption(e) {
  /*
Challenge:
1. Create an array of all items that have 
   the "radio" class.
2. Iterate over the array and remove the 
   "highlight" class from each one.
*/
  const radioArray = document.getElementsByClassName("radio");
  for (let radio of radioArray) {
    radio.classList.remove("highlight");
  }

  //note the code below will add back the class of 'highligh' to whichever radio button has been selected and will have the css applied over again

  /*
Challenge:
1. highlightCheckedOption should take control 
   of the selected radio input and add the CSS
   class of "highlight" to its classlist.
*/
  document.getElementById(e.target.id).parentElement.classList.add("highlight");
} //end highlightCheckedOptions function

function getSingleCatObject() {
  const catsArray = getMatchingCatsArray();

  if (catsArray.length === 1) {
    return catsArray[0];
  } else {
    //  console.log(catsArray[Math.floor(Math.random()) * catsArray.length]);
    const randomNumber = Math.floor(Math.random() * catsArray.length);
    return catsArray[randomNumber];
  }

  /*
Challenge 1:
1. Inside this function, call getMatchingCatsArray 
   and save whatever it returns to a const called 
   “catsArray”. 
*/

  /*
Challenge 2:
1. Set up an if to check if there is only one
   cat object in the array. If there is, log
   out that cat object (but not the whole array!)
   {}...do this by selecting the catsArray [0]
   Test: "happy", animated GIFS only checked.
*/
  /*
Challenge 3:
1. If catsArray has more than one object, 
   select an object at random and log it out.
   in the else statement
*/
} //end getSingleCatObject function

function renderCat() {
  const catObject = getSingleCatObject();
  memeModalInner.innerHTML = `<img 
        class="cat-img" 
        src="./images/${catObject.image}"
        alt=${catObject.image}
        >`;
  memeModal.style.display = "flex";

  /*
Challenge:
1. Take the object that is returned by 
   getSingleCatObject and save it to a const 
   called "catObject".
2. Set memeModalInner’s innerHTML to the HTML 
   string below, remembering to insert the relevant 
   data from catObject to replace the UPPERCASE text.
3. Set memeModal’s display property to "flex". 
 
       `<img 
        class="cat-img" 
        src="./images/CAT IMAGE"
        alt="CAT ALT TEXT"
        >`
*/
} //end renderCat function

function getEmotionsArray(cats) {
  //empty array to hold the cats emotions
  const catEmotionsArray = [];
  for (let cat of cats) {
    //console.log(cat.alt);
    for (let emotion of cat.emotionTags) {
      /*
Challenge:
1. Refactor this nested for of so that an 
   emotion is only pushed to emotionsArray
   if it is not already in emotionsArray.
   Extra kudos if you use the "logical not"
   operator - feel free to google it!
*/
      // if(catEmotionsArray.includes(emotion)){
      //    //no need to do anything here
      //    //note this is not actually favored
      //    //lets try using the logical ! operator
      // } else{
      // //push each cat emotion to the catEmotions array
      // catEmotionsArray.push(emotion);
      // }

      //this is cleaner
      //this is saying if the emotion value is NOT included inside the catEmotionsArray then push the emotion to the catEmotionsArray (second line)
      if (!catEmotionsArray.includes(emotion)) {
        catEmotionsArray.push(emotion);
      }
    }
  }

  return catEmotionsArray;
} //end getEmotionsArray function

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

/*
Challenge:
1. Swap out `<p>${emotion}</p>` for HTML
   that will render a radio input for each
   emotion. Remember to use "type", "id", 
   "value", and "name" properties on each radio.
   ("id" and "value" can both be set to the
   "emotion").
2. Remember to give each radio a label.
   (What property does a label need?)
3. Enclose each individual radio input in this div:
   <div class="radio">
      **RADIO HERE**
   </div>
*/

function renderEmotionsRadios(cats) {
  const emotions = getEmotionsArray(cats);
  let catEmotions = "";
  for (let i of emotions) {
    // catEmotions += `<p>${i}</p>`;
    catEmotions += `
                    <div class="radio">
                    <label for="${i}">${i}</label>

                    <input 
                    type="radio"
                    id="${i}"
                    value="${i}"
                    name="emotions"                   
                    >
                    </div>                    
                    `;
  }
  //emotionsRadios is from the top...where we got the id from the html ('emotions-radio')
  //and we render out the cat emotions back to the html document
  emotionsRadios.innerHTML = catEmotions;
}

//STEP 1  automatically pass the catsData array to the renderEmotionsRadios
renderEmotionsRadios(catsData);
