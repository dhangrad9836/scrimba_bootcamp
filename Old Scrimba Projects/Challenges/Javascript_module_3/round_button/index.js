// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

//total price is a number
// const totalPrice = 420.69235632455
// const btn = document.getElementById("purchase-btn")
// //btn.textContent = `Buy €${ totalPrice }`
// btn.textContent = `Buy €${totalPrice.toFixed(2)}`;

//total price is string ..need to convert to using Number function since we are using toFixed() method
const totalPrice = "420.69235632455";
const btn = document.getElementById("purchase-btn");
//btn.textContent = `Buy €${ totalPrice }`
btn.textContent = `Buy €${Number(totalPrice).toFixed(2)}`;
