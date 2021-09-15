var person = prompt("Please enter your name");

if (person != null) {
  document.getElementById("container__asking").innerHTML =
  "Hello " + person + "! How are you today?";
}
console.log("Hello " + person + "! How are you today?");

