function addition_Function() {
  var number =  2 + 2;
  document.getElementById("Math1").innerHTML = "Sum of 2 + 2 is: " + number;
}


function subtraction_Function() {
  var number = 5 - 2;
  document.getElementById("Math2").innerHTML = "Difference of 5 - 2 is: " + number;
}


function multiplication() {
  var number = 6 * 8;
  document.getElementById("Math3").innerHTML = "6 x 8 = " + number;
}

function division() {
  var number = 48/6;
  document.getElementById("Math4").innerHTML = "48 / 6 = " + number;
}

function more_Math() {
  var number = (1 + 2) * 10 / 2 -5;
  document.getElementById("Math5").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + number;
}

function modulus_Operator() {
  var number = 25 % 6;
  document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + number;
}

function negation_Operator() {
  var number = 10;
  document.getElementById("Math7").innerHTML = -number;
}



//Increment and Decrement Operators

var X = 5;
X++;
document.write(X + " ");



var Y = 5.25;
Y--;
document.write(Y);

//Random number

window.alert(Math.random());