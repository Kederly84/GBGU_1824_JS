// Написать функцию, преобразующую число в объект.
// Передавая на вход число от 0 до 999, надо получить на выходе объект,
// в котором в соответствующих свойствах описаны единицы, десятки и сотни.
// Например, для числа 245 надо получить следующий объект:
// {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

// Инициализация конструктора класса
function Number(hundreds, dozens, units) {
    this.hundreds = hundreds;
    this.dozens = dozens;
    this.units = units;
}

let quest = 1000;

function converter (num) {
    let ans;
    if (num > 999 || num < 0) {
        ans = new Number()
        return ans
    } else {
        let hund = Math.floor(num / 100)
        let doz = Math.floor(num / 10) - hund * 10
        let uni = num % 10
        ans = new Number(hund, doz, uni)
        return ans
    }
}

console.log(converter(quest))