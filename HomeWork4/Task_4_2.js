// Файл ко второму и третьему заданию!!!

// С этого урока начинаем работать с функционалом интернет-магазина.Предположим, есть сущность корзины.
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// Товары в корзине хранятся в массиве. Задачи:
// a. Организовать такой массив для хранения товаров в корзине;
// b. Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

//Я решил реализовть товары через конструктор объектов, т.к. мне показалось это наиболее логичным.

// Инициализация конструктора класса
function Product(name, count, price) {
    this.name = name;
    this.count = count;
    this.price = price;
}

// Инициализация экземпляров класса товаров
let printer = new Product("Epson", 1, 10000);
let notebook = new Product("Huawei", 2, 50000);
let mouse = new Product("Logitech", 3, 5000);
let keyboard = new Product("Apple", 5, 6000);

//Создание пустого массива для корзины
let basket = [];

//Упаковка товаров в корзину
basket.push(printer, notebook, mouse, keyboard);

//Функция для расчета стоимости корзины
function countBasketPrice (arr) {
    let basket_price = 0;

    for (let prod of arr) {
        basket_price += prod.count * prod.price;
    }

    console.log(basket_price);
}

// Вызов функции
countBasketPrice(basket);
