// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
let i = 2

while (i <= 100) {
    let flag = 1;
    for (let j = 2; (j <= i/2) && (flag === 1); j++) {
        if (i % j === 0) {
            flag = 0;
        }
    }
    if (flag === 1) {
        console.log(i);
    }
    i++
}

