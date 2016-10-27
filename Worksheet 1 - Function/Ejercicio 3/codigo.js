function lanzamiento () {
    rand = parseInt(Math.random() * 6 + 1);
    return rand;
}

var i;
var uno = 0;
var dos = 0;
var tres = 0;
var cuatro = 0;
var cinco = 0;
var seis = 0;

for (i=0; i<6001; i++){
    x = lanzamiento ();
    
    if (x == 1) {
        uno++;
    }
    else if (x == 2) {
        dos++;
    }
    else if (x == 3) {
        tres++;
    }
    else if (x == 4) {
        cuatro++;
    }
    else if (x == 5) {
        cinco++;
    }
    else if (x == 6) {
        seis++;
    }
}

document.write ("Veces que salio 1 --> " + uno + "<br/>");
document.write ("Veces que salio 2 --> " + dos + "<br/>");
document.write ("Veces que salio 3 --> " + tres + "<br/>");
document.write ("Veces que salio 4 --> " + cuatro + "<br/>");
document.write ("Veces que salio 5 --> " + cinco + "<br/>");
document.write ("Veces que salio 6 --> " + seis);