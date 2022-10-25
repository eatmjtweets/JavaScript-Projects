function Color_Function() {
  var Color_Output;
  var Colors = document.getElementById("Color_Input").value;
  var Color_String = " is a great color!";
  switch(Colors) {
      case "Red":
        Color_Output = "Red" + Color_String;
      break;
      case "Yellow":
        Color_Output = "Yellow" + Color_String;
      break;
      case "Blue":
        Color_Output = "Blue" + Color_String;
      break;
      case "Pink":
        Color_Output = "Pink" + Color_String;
      break;
      case "Purple":
        Color_Output = "Purple" + Color_String;
      break;
      default:
        Color_Output = "Please enter a color exactly as written on the above list.";
  }
  document.getElementById("Output").innerHTML = Color_Output;
}


function Hello_World_Function () {
  var A = document.getElementByClassName("Click");
  A[0].innerHTML = "The text has been changed!";
}




//Draw circle in canvas

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
