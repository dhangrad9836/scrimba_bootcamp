let homePoint = document.getElementById("home_point");
let guestPoint = document.getElementById("guest_point");

let homePointTotal = 0;
let guestPointTotal = 0;

//console.log(guestPoint);

function homePlusOne() {
  homePointTotal += 1;
  homePoint.textContent = homePointTotal;
}

function homePlusTwo() {
  homePointTotal += 2;
  homePoint.textContent = homePointTotal;
}

function homePlusThree() {
  homePointTotal += 3;
  homePoint.textContent = homePointTotal;
}

function guestPlusOne() {
  guestPointTotal += 1;
  guestPoint.textContent = guestPointTotal;
}

function guestPlusTwo() {
  guestPointTotal += 2;
  guestPoint.textContent = guestPointTotal;
}

function guestPlusThree() {
  guestPointTotal += 3;
  guestPoint.textContent = guestPointTotal;
}
