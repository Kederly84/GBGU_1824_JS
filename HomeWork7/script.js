function init() {

    let basket = {
        product1: {
            price: 10,
            amount: 0,
        },
        product2: {
            price: 15,
            amount: 0,
        },
        product3: {
            price: 20,
            amount: 0,
        },
        product4: 0,
        price: 0,
    }

    // Молоко
    let addMilkButton = document.getElementById("addMilk")
    function addMilkToBasket() {
        basket.product4++
        basket.product1.amount++
        basket.price += basket.product1.price
        basketDiv.innerHTML = "В корзине: <br>" + "Товар1: " + basket.product1.amount + "<br> Товар2: " + basket.product2.amount + "<br> Товар3: " + basket.product3.amount + "<br> Общая стоимость: " + basket.price + " рублей."
    }
    addMilkButton.addEventListener('click', addMilkToBasket)


    let addBreadButton = document.getElementById("addBread")
    function addBreadToBasket() {
        basket.product4++
        basket.product2.amount++
        basket.price += basket.product2.price
        basketDiv.innerHTML = "В корзине: <br>" + "Товар1: " + basket.product1.amount + "<br> Товар2: " + basket.product2.amount + "<br> Товар3: " + basket.product3.amount + "<br> Общая стоимость: " + basket.price + " рублей."
    }
    addBreadButton.addEventListener('click', addBreadToBasket)

    let addAppleButton = document.getElementById("addApple")
    function addAppleToBasket() {
        basket.product4++
        basket.product3.amount++
        basket.price += basket.product3.price
        basketDiv.innerHTML = "В корзине: <br>" + "Товар1: " + basket.product1.amount + "<br> Товар2: " + basket.product2.amount + "<br> Товар3: " + basket.product3.amount + "<br> Общая стоимость: " + basket.price + " рублей."
    }
    addAppleButton.addEventListener('click', addAppleToBasket)


    let basketDiv = document.getElementById("basketDiv")
    let showBasketButton = document.getElementById("showButton")
    function showBasket() {
        if (basketDiv.style.display === "none") {
            basketDiv.style.display = "block"
            showBasketButton.innerHTML = "Скрыть козрину"
        } else {
            basketDiv.style.display = "none"
            showBasketButton.innerHTML = "Показать корзину"
        }
    }
    showBasketButton.addEventListener('click', showBasket)

    let resetButton = document.getElementById("resetButton")
    function resetBasket() {
        basket.product4 = 0;
        basket.product1.amount = 0;
        basket.product2.amount = 0;
        basket.product3.amount = 0;
        basket.price = 0;
        basketDiv.innerHTML = "Корзина пуста."
    }
    resetButton.addEventListener('click', resetBasket)

    let basketWrapper = document.getElementById("basketWrapper")
    let nextButton = document.getElementById("nextButton")
    function next() {
        basketWrapper.style.display = "none"
        bottomWrapper.style.display = "block"
    }
    nextButton.addEventListener('click', next)

    let addressArea = document.getElementById("address")
    let commsArea = document.getElementById("comms")

    let sendButton = document.getElementById("sendButton")
    function send() {
        addressArea.innerHTML = ""
        commsArea.innerHTML = ""
    }
    sendButton.addEventListener('click', send)

    let cancelButton = document.getElementById("cancelButton")
    function cancel() {
        basketWrapper.style.display = "block"
        bottomWrapper.style.display = "none"
    }
    cancelButton.addEventListener('click', cancel)

}

window.onload = init;