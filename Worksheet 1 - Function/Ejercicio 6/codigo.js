function potencia (n, pot) {
    if (pot == 1) {
        return n;
    }
    
    else {
        return n * potencia (n, (pot - 1));
    }
}

var res;
var x = potencia (2, 4);

document.write (x);