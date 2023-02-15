import { tweetsData } from "/data.js";

const tweetBtn = document.getElementById("tweet-btn");
const tweetInput = document.getElementById("tweet-input");

//addEventListeners

tweetBtn.addEventListener("click", function () {
  console.log(tweetInput.value);
}); //end tweetBtn eventListener

document.addEventListener("click", function (e) {
  //target the like button
  if (e.target.dataset.like) {
    //pass in the uuid info with the same e.target.dataset.like
    //remember that is actually the uuid
    handleLikeClick(e.target.dataset.like);
  }

  /*
Challenge:
1. When a like icon is clicked, this function 
   should log out the contents of the 'data-like' 
   data-attribute.

⚠️ Clicking on the page but not on the like icon
   will log out 'undefined'. That is absolutely fine.
*/

  /*
Challenge:
1. If a like icon has been clicked, call handleLikeClick
   passing in the uuid that is stored in the like icon's 
   data attribute. 
*/
}); //end eventListener

//create function to handle the like clicks and increment the count
//takes in tweetId or the uuid as a parameter
function handleLikeClick(tweetId) {
  /*
Challenge:
1. Iterate over tweetsData and use the uuid 
   saved in tweetId to identify the liked
   tweet's object. Save that object to a 
   new const called 'targetTweetObj'.
⚠️ targetTweetObj should hold an object, NOT
   an array.
2. Increment targetTweetObj's 'likes' count 
   by 1.
3. Log out targetTweetObj.
*/
  /*
Challenge:
2. handleLikeClick should take in a parameter. 
   You can call this parameter 'tweetId'. For 
   now just log out tweetId.
*/
} //end handleLikeClick function

function getFeedHtml() {
  //Job of fuction to iterate through data.js and create HTML from each tweet with the boilerplate code which we will replace using template literals

  /*
Challenge:
1. Inside each span that has a class of "tweet-detail",
   add an <i> tag.
2. Give each <i> tag the classes it needs to render the
   correct icons next to the numbers.
   The classes you will need are:
    fa-regular, 
    fa-solid, 
    fa-comment-dots, 
    fa-heart, 
    fa-retweet
*/

  /*
Challenge:
1. Add data attributes to each of the  <i> tags. You can call
   them 'reply', 'like', and 'retweet’.
2. Each data attribute should hold the tweet's uuid.
*/

  let feedHtml = ``;
  tweetsData.forEach(function (feed) {
    feedHtml += `
<div class="tweet">
    <div class="tweet-inner">
        <img src="${feed.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${feed.handle}</p>
            <p class="tweet-text">${feed.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                <i class="fa-regular fa-comment-dots" data-reply="${feed.uuid}"></i>
                    ${feed.replies.length}
                </span>
                <span class="tweet-detail">
                <i class="fa-solid fa-heart" data-like="${feed.uuid}"></i>
                    ${feed.likes}
                </span>
                <span class="tweet-detail">
                <i class="fa-solid fa-retweet" data-retweet="${feed.uuid}"></i>
                    ${feed.retweets}
                </span>
            </div>   
        </div>            
    </div>
</div>
`;
  });
  /*
Challenge:
1. Use a "for of" to iterate over the data and 
   create HTML string for each tweet using the 
   boilerplate below. Replace UPPERCASE text
   with data from the tweets. 
2. Store this HTML in a let called "feedHtml".
3. Log out feedHtml.
4. Call getFeedHtml to check it's working.
*/

  //END for of function

  //   console.log(feedHtml); we did a test with console now we will just return
  return feedHtml;
} //end getFeedHtml function

//STEP 1 pass tweetsData inside getFeedHtml function
// console.log(getFeedHtml());

//Now we need to add some separation of concerns. We are going to create some functions to render out our tweets
function render() {
  document.getElementById("feed").innerHTML = getFeedHtml();

  /*
Challenge:
1. Take control of the ‘feed’ div.
2. Render the HTML returned by the getFeedHtml 
   function to the 'feed' div. 
   See if you can do this with just one line of code!
*/
}
render();
