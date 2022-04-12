
function Product(name, count, price) {
    this.name = name;
    this.count = count;
    this.price = price;
}


let printer = new Product("Epson", 1, 10000);
let notebook = new Product("Huawei", 2, 50000);
let mouse = new Product("Logitech", 3, 5000);
let keyboard = new Product("Apple", 5, 6000);


let basket = [];


basket.push(printer, notebook, mouse, keyboard);


function countBasketPrice (arr) {
    let basket_price = 0;

    for (let prod of arr) {
        basket_price += prod.count * prod.price;
    }

    return basket_price;
}

let price = countBasketPrice(basket);

function bas (arg) {
    let res;
    if (arg === 0) {
        res = "Basket is empty";
    } else {
        res = arg
    }
    let bass = document.querySelector("#basket");
    let pr = document.createElement("div");
    pr.textContent = res;
    pr.className = "text"
    bass.appendChild(pr);
}

bas(price)

