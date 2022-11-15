"use strict";

let buttonA = document.getElementById('button1');
buttonA.addEventListener('click', clicker);

function clicker(e) {
  console.log('button was clicked');
  let numberA = document.getElementById("number1");
  numberA.innerText = Number(numberA.innerText) + 1;
}
