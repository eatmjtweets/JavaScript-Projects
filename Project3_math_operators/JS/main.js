function addition_Function() {
  var addition = 2 + 2;
  document.getElementbyID("Math").innerHTML = "2 + 2 = " + addition;
}


function subtraction_Function() {
  var subtraction = 5 - 2;
  document.getElementById("Math").innerHTML = "5 - 2 = " + subtraction;
}

function multiplication() {
  var simple_Math = 6 * 8;
  document.getElementById("Math").innerHTML = "6 x 8 = " + simple_Math;
}

function division() {
  var simple_Math = 48/6;
  document.getElementById("Math").innerHTML = "48 / 6 = " + simple_Math;
}

function more_Math() {
  var simple_Math = (1 + 2) * 10 / 2 -5;
  document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
  var simple_Math = 25 % 6;
  document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
  var x = 10;
  document.getElementById("Math").innerHTML = -x;
}



//Increment and Decrement Operators

var X = 5;
X++;
document.write(X);



var Y = 5.25;
Y--;
document.write(Y);

//Random number

window.alert(Math.random());