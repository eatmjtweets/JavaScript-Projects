     
      var alertbox = "Gordon Ramsay wants to: Know Your location.";

      var Headchef = "Gordon",
             Chef1 = "Trae,",
             Chef2 = "Lebron,",
             Chef3 = "Giannis,",
             Chef4 = "Harden,";

      //Quotations with concatenate:
      var A = "*One chef responded:*\"Here\'s the sauce chef\","
      var B = "*Gordon Ramsay throws the pan in the chef\'s face*,"
                  +"*The chef cried*";      
      //END OF Quotations with concatenate:

      var Chef1 = Chef1.fontcolor("Orange");
      var Chef2 = Chef2.fontcolor("Violet");
      var Chef3 = Chef3.fontcolor("Green");
      var Chef4 = Chef4.fontcolor("Red");

      window.alert (alertbox);
      document.write ("GORDON: Where's the lamb sauce?")
      document.write (A)
      document.write (B)
      document.write (Chef1)
      document.write (Chef2)
      document.write (Chef3)
      document.write (Chef4)
      document.write (3 + 3);

      //ONCLICK BUTTON
      function My_First_Function () {
            var str = "This text is green!";
            var result = str.fontcolor("green");
            document.getElementById("Green_Text").innerHTML = result;   
      }
      //END OF ONCLICK BUTTON