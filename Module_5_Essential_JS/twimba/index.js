import { tweetsData } from "/data.js";

const tweetBtn = document.getElementById("tweet-btn");
const tweetInput = document.getElementById("tweet-input");

//addEventListeners

tweetBtn.addEventListener("click", function () {
  console.log(tweetInput.value);
}); //end tweetBtn eventListener

function getFeedHtml() {
  //Job of fuction to iterate through data.js and create HTML from each tweet with the boilerplate code which we will replace using template literals

  let feedHtml = "";
  for (let feed of tweetsData) {
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
    feedHtml += `
<div class="tweet">
    <div class="tweet-inner">
        <img src="${feed.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${feed.handle}</p>
            <p class="tweet-text">${feed.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                    ${feed.replies.length}
                </span>
                <span class="tweet-detail">
                    ${feed.likes}
                </span>
                <span class="tweet-detail">
                    ${feed.retweets}
                </span>
            </div>   
        </div>            
    </div>
</div>
`;
  } //END for of function
  console.log(feedHtml);
} //end getFeedHtml function

//STEP 1 pass tweetsData inside getFeedHtml function
getFeedHtml();
