const container = document.getElementById("container");
const clearBtn = document.getElementById("clear-btn");

const products = [
  {
    name: "Ostrich Pillow",
    price: "10",
    image: "ostrichpillow.jpg",
    id: "ostrich-pillow",
  },
  {
    name: "Bacon Bandages",
    price: "8",
    image: "bacon-bandage.jpg",
    id: "bacon-bandages",
  },
  {
    name: "Baby Mop",
    price: "20",
    image: "babymop.jpg",
    id: "baby-mop",
  },
];

let productsHtml = ``;

for (let product of products) {
  productsHtml += `
    <div class="product on-offer">
        <h3>${product.name}</h3>
         <h4> £${product.price}</h4>
        <img src="${product.image}">
        <button id="${product.id}">Buy Now</button>
    </div>
    `;
}
container.innerHTML = productsHtml;

//setup event listener for click events for container whenever it gets clicked....but we actually want to target button in order to get to the id
//note that we have the e or event as our parameter..it comes default with the addEventListener so we don't need to do anything else except use the e event

container.addEventListener("click", function (e) {
  document.getElementById(e.target.id).parentElement.classList.add("purchased");
  document
    .getElementById(e.target.id)
    .parentElement.classList.remove("on-offer");
});

//note that inside the event listener we have a className of("product") this is created above inside the for Of loop

/*
Challenge:
1. Finish setting up this array of 
   elements with the "product" class.
2. Iterate over this array and remove 
   the "purchase" class and add the 
   "on-offer" class.
*/
clearBtn.addEventListener("click", function () {
  const productsArray = document.getElementsByClassName("product");
  for (let product of productsArray) {
    product.classList.remove("purchased");
    product.classList.add("on-offer");
  }
});
