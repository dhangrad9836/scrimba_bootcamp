// Use .innerHTML to render a Buy! button inside the div container

const buyButton = document.getElementById("container");

buyButton.innerHTML += "<button onclick='buy()'>Buy!</button>";

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"

//buyButton.innerHTML += "<p>Thank you for buying</p>";
function buy() {
  buyButton.innerHTML += "<p>Thank you for buying</p>";
}
