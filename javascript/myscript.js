jQuery(function(){
    
console.log("DOM ready");

//MAIN TITLE
$("#mainTitle").html("CAR SHOP");

//JSON CARS STORAGE
const URL = "../json/storage.json";

$.get(URL, (answer, status) =>{
    console.log(answer);
    console.log(status);
    let cars = answer;
    if (status === "success"){
        for (let car of cars){
            $("#shop").append(` <div class="col-md-3 col-xs-12 mb-3">
                                <div class="card bg-white m-1">
                                <img src="${car.src}" class="card-img-top" alt="...">
                                <div class="card-body text-center">
                                    <h5 class="card-title mb-3 font-weight-bold">${car.name}</h5>
                                    <p class="card-text">COLOR: ${car.color}</p>
                                    <p class="card-text">MODEL: ${car.model}</p>
                                    <p class="precio">PRICE: US$ ${car.price}</p>
                                    <a href="#" class="btn btn-dark">BUY</a>
                                </div>
                                </div>
                                </div>`)}}})

//TERMS AND CONDIIONS 
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