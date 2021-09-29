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
// const alertMessage = (message) =>{
// alert(message);
//}
document.getElementById("buttonNumber").onclick = function() {
    
    let number = askInput();


    document.getElementById("container__averageNumbers").innerHTML = "The average is " +number;
    showConsole("The average is " +number);
    alertMessage("The average is " +number);
    
    

};

const CAR_ONE ={
    type: "Ferrari",
    color: "Blue",
    model: "Enzo",

    startEngine(){
        alert("Engine is on!");
    },
    stopEngine(){
        alert("Engine is off!");
    }
};

function car(type, color, model){
    this.type = type;
    this.color = color;
    this.model = model;

}
const CAR_TWO = new car("Renault","Red", "Clio");
const CAR_THREE = new car("Chevrolet","Black", "Onyx");

// let propertyCar = prompt("Enter property you would like to know;");
// alert(CAR_ONE[propertyCar]);

// let askCar_Color= prompt("color"); let askCar_type= prompt("type"); let askCar_model= prompt("type");

// for (const propiedad in CAR_ONE){
// console.log(CAR_ONE[propiedad])   
// }
document.getElementById("buttonStartEngine1").onclick = function() {
    CAR_ONE.startEngine();
    
};

document.getElementById("buttonStopEngine1").onclick = function() {
    CAR_ONE.stopEngine();
    
};
document.getElementById("buttonCarColor").onclick = function() {
    alert(CAR_ONE.color);
    
};
document.getElementById("buttonCarType").onclick = function() {
    alert(CAR_ONE.type);
    
};
document.getElementById("buttonCarModel").onclick = function() {
    alert(CAR_ONE.model);
    
};

