
/*var jsonStringCars = JSON.stringify(cars);
// console.log(jsonStringCars);

var jsonParseCars = JSON.parse(jsonStringCars);*/

// console.log(jsonParseCars);

jQuery(function(){console.log("DOM ready")

const URL_API = "https://api.mercadolibre.com/sites/MLA/search?q=autos#json";

function bringApi(){
    $.get(URL_API, (answer, status)=>{
        console.log(answer);
        
        console.log(status);
        for(let i= 0; i < 50; i++){
        if(status === "success"){
            $("#shop").append(` <div class="col-md-3 col-xs-12">
                                <div class="card bg-info m-1">
                                <img src="${answer.results[i].thumbnail}" class="img-fluid" alt="...">
                                <div class="card-body text-center">
                                    <h5 class="card-title mb-3 font-weight-bold">${answer.results[i].title}</h5>
                                    <p class="card-text">PRICE: $ ${answer.results[i].price}</p>
                                    
                                    <p class="precio">SELLER: <a href="${answer.results[i].seller.permalink}">${answer.results[i].seller.permalink}</a></p>
                                    <a href="#" class="btn btn-danger">BUY</a>
                                </div>
                                </div>
                                </div>`);
        }}
    });
}

const URL = "../json/storage.json";

$("#mainTitle").html("CAR SHOP");
$("#callApi").on("click", bringApi);

let buttonAddCars = $("#addCar")[0];

const shopContainer = $("#shop")[0]; 

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

$("#addCar").on("mousedown", function(){buttonAddCars.style.backgroundColor = "blue";} );
$("#addCar").on("mouseup", function(){buttonAddCars.style.backgroundColor = "#0dcaf0";} );

let buttonRemoveCars = $("#removeCars")[0];

const removeCars = () =>{
    $("#removeCars").on("mousedown", function(){buttonRemoveCars.style.backgroundColor = "blue";} );
$("#removeCars").on("mouseup", function(){buttonRemoveCars.style.backgroundColor = "#0dcaf0";} );

$("#shop").html("");
}
$("#removeCars").click(removeCars);

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

});