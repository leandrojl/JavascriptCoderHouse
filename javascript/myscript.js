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
    
    let number = askInput();


    document.getElementById("container__averageNumbers").innerHTML = "The average is " +number;
    showConsole("The average is " +number);
    alertMessage("The average is " +number);
    
    

};