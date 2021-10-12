let precioElementos = document.getElementsByClassName("precio");

for (precio of precioElementos){
    let prefijo = document.createElement("span");

    prefijo.innerHTML = "US$";

    precio.prepend(prefijo);

}


let cars =[

    {
        name: "AUDI",
        color: "blue",
        src: "/images/audi-blue.jpeg", 
        model: "a8",
        price: 15000,
        id: 1
    },
    {
        name: "MERCEDES BENZ",
        color: "Blue",
        src: "/images/mercedes-blue.jpeg",
        model: "a100",
        price: 17000,
        id: 2
    },
    {
        name: "FORD",
        color: "Black",
        src: "/images/ford-gray.jpeg",
        model: "Fiesta",
        price: 5000,
        id: 3
    },
    {
        name: "RANGE ROVER",
        color: "White",
        src: "/images/rover-white.jpeg",
        model: "4x4",
        price: 25000,
        id: 4
    },
]

let buttonAddCars = document.getElementById("addCar");
const shopContainer = document.getElementById("shop");

const addCars = () =>{

buttonAddCars.style.backgroundColor = "red";

for (let car of cars){
    let container = document.createElement("div");
    container.className= "col-md-3 col-xs-12 mt-3";
    container.innerHTML = 
    `<div class="card" style="width: 18rem;">
        <img src="${car.src}" class="card-img-top" alt="...">
      <div class="card-body text-center">
            <h5 class="card-title mb-3 font-weight-bold">${car.name}</h5>
            <p class="card-text">COLOR: ${car.color}</p>
            <p class="card-text">MODEL: ${car.model}</p>
            <p class="precio">PRICE: US$${car.price}</p>
            <a href="#" class="btn btn-primary">BUY</a>
      </div>
    </div>`
    shopContainer.appendChild(container);
}}
buttonAddCars.addEventListener("click", addCars);
buttonAddCars.addEventListener("mousedown", function(){buttonAddCars.style.backgroundColor = "blue";})