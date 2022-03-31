
function sum(a, b) {
    return a+b;
}
function sub(a, b) {
    return a-b;
}

function mult(a, b) {
    return a*b;
}

function div(a, b) {
    return a/b;
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "sum":
            return sum(arg1, arg2);
            break;
        case "sub":
            return sub(arg1, arg2);
            break;
        case "mult":
            return mult(arg1, arg2);
            break;
        case "div":
            return div(arg1, arg2);
            break;
    }

}


alert(mathOperation(5, 6, "mult"));
