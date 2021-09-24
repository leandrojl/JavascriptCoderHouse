document.getElementById("button1").addEventListener("click", function() {
    var person = prompt("Please enter your name");

if (person != null) {
         document.getElementById("container__name").innerHTML =
         "Hello " + person + "! How are you today?";
       }
       console.log("Hello " + person + "! How are you today?");
 
 }); 



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

 document.getElementById("button5").onclick = function() {
    let question = prompt("How many times to you want to iterate the for?");
    let questionNumber = parseInt(question);

    for(let i=1; i < questionNumber + 1; i++ ){
        
        alert(i);
        
    }
 };

 document.getElementById("button6").onclick = function() {
    let question = parseInt(prompt("How many times to you want to iterate the for?"));
    
    

    for(let i=1; i < question +1; i++ ){
        
        let numberQuestion = parseInt(prompt("Give me a number and check if it is bigger than 50!"));
        
        if (numberQuestion > 50 && typeof numberQuestion == 'number'){
            alert("Your number it's bigger than 50");
            console.log("Your number it's bigger than 5");
        } else if(numberQuestion < 50 && typeof numberQuestion == 'number') {
            console.log("Your input it's lower than 5");
            alert("Your number it's lower than 50");
        } else {
            alert("That's not a number!");
            
        }
    }
    
    

};

function askInput(){
    let numberOne = parseInt(prompt("Enter first number:"));
    let numberTwo = parseInt(prompt("Enter second number:"));
    var result = (numberOne + numberTwo)/2;

    return result;
}
function showConsole(info){
    console.log(info);
}
function alertMessage(message){
    alert(message);
}

document.getElementById("buttonNumber").onclick = function() {
    console.log("mmm");
    let number = askInput();


    document.getElementById("container__averageNumbers").innerHTML = number;
    showConsole(number);
    alertMessage(number);
    
    

};