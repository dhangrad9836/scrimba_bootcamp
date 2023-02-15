document.addEventListener("click", function (e) {
  console.log(e.target.id);
  //   document.getElementById(e.target.id).parentElement;
  document.getElementById(e.target.id).parentElement.classList.add("read");
  document.getElementById(e.target.id).parentElement.classList.remove("unread");
});

//note that we are targeting the event which we will access the target to the id. Next we will use the parentElement to target the classList and we now can add or remove class names which we can manipulate the css...here we are add to the class list a class of "read"...and inside the css file we have a class of .read with css rules to change the background
//we also removed the "unread" class as we don't want another class that was once used for something to possibly do unexpected behavior
//...note that if you don't use the .parentElement you only will change part of the row ie: if you click on the name Stevie Wonder only that will change to background of white...not the entire row...so you need to add in the .parenteElement in order to target the entire list of child elements in that row....so the parent will actually be targeted not the child...meaning the whole row will be affected.  So note that the classList propery is being used here...below is part of the html..note the list of classe inside the div with "message" and "unread" that is the parent now the classes: "from" "message-text" and "date" are the children...we don't want to only target them individually..that is why we added .parentElement which targets "message unread" in the parent div which when you click any part of the row the whole row gets changed not only the name or the message-text by itself

// 	<div class="message unread">
//     <div class="from" id="message-from-1">
//       Stevie Wonder
//     </div>
//     <div class="message-text" id="message-text-1">
//       I just wrote to say I love you❤️
//     </div>
//     <div class="date" id="message-date-1">
//       28 Aug
//     </div>
//   </div>;
