// Сравнить null и 0. Объяснить результат.

var a = 0;
var b = null;

alert(a == b); // false
alert(a === b); // false
// В случаях выше действует особое правило: значение null ни к чему не приводится, оно равно самому себе и не равно ничему другому.
alert(a>=b); // true При использовании математических операторов и других операторов сравнения Значения null преобразуются к числам: null становится 0.