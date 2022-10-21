function count_To_Ten() {
  var Digit = "";
  var X = 1;
  while (X < 11) {
    Digit += "<br>" + X;
    X++;
  }
  document.getElementById("Counting_to_Ten").innerHTML = Digit;
}


//FOR LOOPS
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loops() {
  for (Y = 0; Y < Instruments.length; Y++) {
  Content += Instruments[Y] + "<br>";
  }
  document.getElementById("List_of_Instruments").innerHTML = Content;
}



//ARRAY
function cat_pics () {
  var Cat_Pictures = [];
  Cat_Pictures[0] = "sleeping";
  Cat_Pictures[1] = "playing";
  Cat_Pictures[2] = "eating";
  Cat_Pictures[3] = "purring";
  document.getElementById("Cat").innerHTML = "In this picture. the cat is " +
      Cat_Pictures[2] + ".";
}



//CONST KEYWORD

function constant_function() {
  const Musical_Instrument = {type:"guitar ", brand:"Fender ", color:"black "};
  Musical_Instrument.color = "blue";
  Musical_Instrument.price = "$900";
  document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + "was " + Musical_Instrument.price;
}


//OBJECTS

let car = {
  make: "Dodge",
  model: "Viper",
  year: "2021",
  color: "red",
  description : function() {
    return "The car is a " + this.year + this.color + this.make + this.model;
  }
};
document.getElementById("Car_Object").innerHTML = car.description ();