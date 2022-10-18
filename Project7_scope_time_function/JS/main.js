//EXAMPLE OF GLOBAL VARIABLE

var X = 10;
function Add_numbers_1 () {
  document.write(20 + X + "<br>");
}

function Add_Numbers_2() {
  document.write(X + 100);
}

Add_numbers_1();
Add_Numbers_2();

//result will be “30” and “110.”



function Add_numbers_1 () {
  var X = 10;
  document.write(20 + X + "<br>");
}

function Add_Numbers_2() {
  document.write(X + 100);
}

Add_numbers_1();
Add_Numbers_2();

//This time, the code would only return “30” because the variable was local.