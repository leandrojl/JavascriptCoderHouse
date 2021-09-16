//var person = prompt("Please enter your name");//

document.getElementById("button1").onclick = function() {
   var person = prompt("Please enter your name");

    if (person != null) {
        document.getElementById("container__name").innerHTML =
        "Hello " + person + "! How are you today?";
      }
      console.log("Hello " + person + "! How are you today?");

};

document.getElementById("button2").onclick = function() {
    var number = prompt("Please enter your number");
    var parsedNumber = parseInt(number);

    if (parsedNumber != null && parsedNumber >1000) {
        document.getElementById("container__number").innerHTML =
        "Your number its greater than 1000!";
        alert("Yay, its greater than 1000");
       } else {
        document.getElementById("container__number").innerHTML =
        "Your number its not greater than 1000!";
       }
       
 
 };

 document.getElementById("button3").onclick = function() {
    var stringComparison = prompt("Please enter your string");
    
 
     if (stringComparison != null && isNaN(stringComparison) && stringComparison === "Hola") {
        document.getElementById("container__equalString").innerHTML =
        "Your string its equal to 'Hola'";
        console.log(stringComparison);
       } else {
        document.getElementById("container__equalString").innerHTML =
        "Your string its not equal to Hola";
       }
       
 
 };

 document.getElementById("button4").onclick = function() {
    var number = prompt("Please enter your number");
    var parsedNumber = parseInt(number);
    
 
     if (number != null && number >= 10 && number <= 50 ) {
        document.getElementById("container__betweenNumber").innerHTML =
        "Your number its between 10 and 50";
        alert("Yay, its between 10 and 50!");
       } else {
        document.getElementById("container__betweenNumber").innerHTML =
        "Your number its not between 10 and 50";
       }
       
 
 };
