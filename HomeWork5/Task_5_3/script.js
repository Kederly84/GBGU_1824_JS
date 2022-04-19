
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

function bas (arg) {
    let bass = document.querySelector("#basket");
    if (arg.length > 0) {
        for(let i = 0; i < arg.length; i++){
            let item = document.createElement("div");
            item.textContent = arg[i].name + " " + arg[i].count + " " + arg[i].price;
            item.className = "text";
            bass.appendChild(item);
        }
    } else {
        let item = document.createElement("div");
        item.textContent = "Basket is empty";
        item.className = "text";
        bass.appendChild(item);
    }
}

bas(basket)

