const mainEl = document.querySelector('main');

const products = [];

let lastId = 1;

function Product(name, price, img) {
    this.id = lastId++
    this.name = name;
    this.price = price;
    this.img = img;
}


function loadProducts() {
    const entity = ['Shirt', 'Shoes', 'Hat', 'Pants', 'Skirt', 'Jacket'];
    const colors = ['red', 'white', 'black', 'green', 'yellow', 'grey'];
    for(let i = 1; i < 6; i++) {
        const name = entity[getRandomInt(entity.length - 1)] + ' ' + colors[getRandomInt(colors.length - 1)]
        products.push( new Product(name, getRandomInt(1000), `img/${i}.png`) )
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function drawCard(product) {
    const cardEl = document.createElement('DIV');
    const imgEl = document.createElement('IMG');
    const titleEl = document.createElement('P');
    const priceEl = document.createElement('P');
    const buttonEl= document.createElement('BUTTON');

    cardEl.classList.add('product-card');
    imgEl.classList.add('product-card');
    titleEl.classList.add('product-card_title');
    priceEl.classList.add('product-card_price');
    buttonEl.classList.add('product-card_button');

    imgEl.setAttribute('src', product.img);
    titleEl.textContent = product.name;
    priceEl.textContent = product.price;
    buttonEl.textContent = 'В корзину';

    cardEl.append(imgEl);
    cardEl.append(titleEl);
    cardEl.append(priceEl);
    cardEl.append(buttonEl);

    mainEl.append(cardEl);
}

function drawProd() {
    for(let product of products) {
        drawCard(product);
    }
}

loadProducts();
drawProd();

const cartContent = [];

function getButtons (){
    let buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++){
        buttons[i].onclick = act;
    }
}

function getCart(){
    let cart = document.getElementById("cart");
    let list = document.createElement("div");
    let nameOfChosen = document.createElement("p");
    let ammount = document.createElement("p");
    let count = document.createElement("p");
    let totalCart = 0;
    let outputResult = document.createElement("p");


    cart.innerHTML = "";

    for(let i = 0; i < cartContent.length; i+=4){
        if (cartContent[i+2] === 0){
            cartContent.splice(i, 4)
            i -= 4;
            continue;
        }
        else {
            list.innerHTML = "";
            nameOfChosen.innerHTML = cartContent[i+1];
            ammount.innerHTML = "Количество: ";
            count.innerHTML = cartContent[i+2];
            totalCart += (cartContent[i+2]*cartContent[i+3]);


            list.appendChild(nameOfChosen);
            list.appendChild(ammount);
            list.appendChild(count);

            cart.innerHTML += list.outerHTML;
        }
    }
    if (cart.innerHTML === ""){
        outputResult.innerHTML = "Ваша корзина пуста! <br> С каталогом товаров вы можете ознакомиться ниже"
    }
    else{
        outputResult.innerHTML = "Общая стоимость вашего заказа: "+totalCart+" рублей."
    }
    cart.appendChild(outputResult);
    getButtons();
}

function act(event){
    if(cartContent.indexOf(event.target.parentElement.children[1].innerHTML)===-1){
        cartContent.push(event.target.parentElement.children[0].src);
        cartContent.push(event.target.parentElement.children[1].innerHTML);
        cartContent.push(1);
        cartContent.push(+(event.target.parentElement.children[2].innerHTML.substr(0, (event.target.parentElement.children[2].innerHTML.length))));
    }
    else {
        cartContent[cartContent.indexOf(event.target.parentElement.children[1].innerHTML)+1] += 1;
    }
    getCart();
}

window.onload = getCart;