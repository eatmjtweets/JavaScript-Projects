document.write(typeof 3);
//writes the word "Number"

document.write(2E310);
//writes the word"Infinity"

document.write(-3E310);
//writes the word "-Infinity"

console.log(2 + 2);
//math operation in console

document.write("10" + 5);
//Type Coersion, This would return 105 in the browser (it would tack “5” onto the string “10”).

console.log(10>20);
//displays "false" in console





//DOUBLE EQUAL SIGNS (an instruction to check whether the data on the left side of the symbol is equal to the data on the right side.)

document.write(10==10);
//output would be "true".

document.write(3==11);
//output would be "false".






//TRIPLE EQUAL SIGNS (an instruction to check whether the data on the left side of the symbol is equal to the data on the right side and that it is the same type of data as that on the right.)

X = 10;
Y = 10;
document.write(X === Y);
//This returns “true”.

X = 82;
Y = "82";
document.write(X === Y);
//This returns “false”. Because the data types (number and string respectively) were not the same.

A = "Magnus";
B = "Magnus";
document.write(A === B);
//This would return “true”. This works for all data types, including strings






//Logical Operators(&&, ||, !)

//The && (and) operator determines the logic between values or variables, such as verifying that ___ and ___ are true (both must be true to return “true.” 
//If one or both is false, the code will return “false”). In JavaScript, we write this as follows:

document.write(5>2 && 10>4);


//We can make our code return “false” by changing one or both of the comparisons, such as:

document.write(5>10 && 10>4);

//The || (or) operator works this way:

document.write(5>10 || 10>4);

//This would return “true” because, while 5 is not greater than 10, 10 is greater than 4. 
//We can make it return “false” with the following code since neither is true:

document.write(5>10 || 10>20);


//The ! (not) operator checks whether or not something is true. If ___ is false, “true” will be returned.

function not_Function() {
  document.getElementById("Not").innerHTML = !(20>10);
}

//This would return "false".
//If you wanted a “double negative,” you would write the following in your JavaScript code:

function not_Function() {
  document.getElementById("Not").innerHTML = !(5>10);
}

//This would return “True”.



