
/*var jsonStringCars = JSON.stringify(cars);
// console.log(jsonStringCars);

var jsonParseCars = JSON.parse(jsonStringCars);*/

// console.log(jsonParseCars);

jQuery(function(){console.log("DOM ready")

const URL_API = "https://api.mercadolibre.com/sites/MLA/search?q=autos#json";

function bringApi(){
    $.get(URL_API, (answer, status)=>{
        console.log(answer.results[1]);
        console.log(status);
        
        if(status === "success"){
            $("#shop").append(` <div class="col-md-3 col-xs-12">
                                <div class="card bg-info m-1">
                                <img src="${answer.results[1].thumbnail}" class="card-img-top" alt="...">
                                <div class="card-body text-center">
                                    <h5 class="card-title mb-3 font-weight-bold">${answer.results[1].title}</h5>
                                    <p class="card-text">COLOR: ${car.color}</p>
                                    <p class="card-text">MODEL: ${car.model}</p>
                                    <p class="precio">PRICE: US$${car.price}</p>
                                    <a href="#" class="btn btn-danger">BUY</a>
                                </div>
                                </div>
                                </div>`);
        }
    });

}
$("#callApi").on("click", bringApi);

const URL = "../json/storage.json";


$("#mainTitle").html("CAR SHOP");

let buttonAddCars = $("#addCar")[0];
const shopContainer = $("#shop")[0]; /*document.getElementById("shop");*/

const addCars = () =>{
$.get(URL, (answer, status) =>{
    console.log(answer);
    console.log(status);
    let cars = answer;
    if (status === "success"){
        for (let car of cars){
            
            $("#shop").append(` <div class="col-md-3 col-xs-12">
                                <div class="card bg-info m-1">
                                <img src="${car.src}" class="card-img-top" alt="...">
                                <div class="card-body text-center">
                                    <h5 class="card-title mb-3 font-weight-bold">${car.name}</h5>
                                    <p class="card-text">COLOR: ${car.color}</p>
                                    <p class="card-text">MODEL: ${car.model}</p>
                                    <p class="precio">PRICE: US$${car.price}</p>
                                    <a href="#" class="btn btn-danger">BUY</a>
                                </div>
                                </div>
                                </div>`);}}})}

$("#addCar").on("click", addCars);
/*buttonAddCars.addEventListener("click", addCars);*/
$("#addCar").on("mousedown", function(){buttonAddCars.style.backgroundColor = "blue";} );
$("#addCar").on("mouseup", function(){buttonAddCars.style.backgroundColor = "#0dcaf0";} );
// buttonAddCars.addEventListener("mousedown", function(){buttonAddCars.style.backgroundColor = "blue";})


let buttonRemoveCars = $("#removeCars")[0];


const removeCars = () =>{
    $("#removeCars").on("mousedown", function(){buttonRemoveCars.style.backgroundColor = "blue";} );
$("#removeCars").on("mouseup", function(){buttonRemoveCars.style.backgroundColor = "#0dcaf0";} );
/*shopContainer.removeChild(shopContainer.childNodes);*/
$("#shop").html("");
}
$("#removeCars").click(removeCars);

// buttonRemoveCars.addEventListener("click", removeCars);

// let buttonTermsAndConditions = $("#buttonTerms&Conditions");


const acceptance = () =>{

    const acceptTermsAndConditions = JSON.parse(localStorage.getItem("termsAndConditions"));

if(acceptTermsAndConditions === null || acceptTermsAndConditions === false || acceptTermsAndConditions === true){
    let askIfAcceptance = prompt("Do you accept Terms and Conditions? Answer 'yes' or 'no'");
    if(askIfAcceptance === "yes"){
        localStorage.setItem("termsAndConditions", true);
    }else if (askIfAcceptance === "no"){
        localStorage.setItem("termsAndConditions", false);
    }; 
} 
}
$("#buttonTermsAndConditions").on("click", acceptance);
//buttonTermsAndConditions.addEventListener("click", acceptance);
});