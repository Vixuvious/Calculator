"use strict";

let numberHold = 1

//Add Number on Hold
let buttonAdd = document.getElementById('buttonAdd');
buttonAdd.addEventListener('click', clickerAdd);

function clickerAdd(e) {
  console.log('buttonAdd was clicked');
  let numberA = document.getElementById("number1");
  numberA.innerText = Number(numberA.innerText) + numberHold;
}

//Multiply number on hold
let buttonB = document.getElementById('buttonMult');
buttonB.addEventListener('click', clickerMult);

function clickerMult(e) {
  console.log('button Mult was clicked');
  let numberA = document.getElementById("number1");
  numberA.innerText = Number(numberA.innerText) * numberHold;
}

//Set the number to 0
let buttonClear = document.getElementById('buttonClear');
buttonClear.addEventListener('click', clickerClear);

function clickerClear(e) {
  console.log('button Clear was clicked');
  let numberA = document.getElementById("number1");
  numberA.innerText = Number(numberA.innerText) * 0;
}

//Button 1
let button1 = document.getElementById('buttonOne');
buttonOne.addEventListener('click', clickerNum1);

function clickerNum1(e) {
  console.log('button 1 was clicked');
  numberHold = 1
}

//Button 2
let button2 = document.getElementById('buttonTwo');
buttonTwo.addEventListener('click', clickerNum2);

function clickerNum2(e) {
  console.log('button 2 was clicked');
  numberHold = 2
}

//Button 3
let button3 = document.getElementById('buttonThree');
button3.addEventListener('click', clickerNum3);

function clickerNum3(e) {
  console.log('button 3 was clicked');
  numberHold = 3
}

//Button 4
let button4 = document.getElementById('buttonFour');
button4.addEventListener('click', clickerNum4);

function clickerNum4(e) {
  console.log('button 4 was clicked');
  numberHold = 4
}
