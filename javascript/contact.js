const URL_POST = "https://jsonplaceholder.typicode.com/posts";

$("#formNewsLetter").on("submit", (e) =>{
e.preventDefault();
const payload = {email: $("#emailNewsLetter").val()} ;

$.post(URL_POST, payload, (answer, status) => {
console.log(payload.email);
console.log(answer);
console.log(status);
if(status === "success") alert (`Hey! Your Email: ${answer.email} has been succesfully saved`);
$("#formNewsLetter")[0].reset();
}) 
})

$("#formContact").on("submit", (e) =>{
    e.preventDefault();
    const payloadContact = {name: $("#fname").val(),
                            lastName: $("#lname").val(),
                            email: $("#emailContact").val(),
                            comment: $("#comment").val()
                           };
    
    $.post(URL_POST, payloadContact, (answer, status) => {
    
    console.log(answer);
    console.log(status);
    if(status === "success") alert (`Thanks! ${answer.name} ${answer.lastName}!`);
    $("#formContact")[0].reset();
    }); 
    });