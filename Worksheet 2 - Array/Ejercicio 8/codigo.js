function arrayCero (n) {
    var i;
    var l = new Array (n);
    
    for (i=-1; i<n; i++) {
        l [i] = 0;
    }
    return l;
} //Crea un array de n posiciones

function dobleDado (lista) {
    for (i=0; i<36000; i++) {
        
        var d1 = parseInt(Math.random() * 6 + 1);
        var d2 = parseInt(Math.random() * 6 + 1);
        lista [d1+d2]++;
    }
    return lista;
}



l = arrayCero (13);
listaCompleta = dobleDado (l);

var n;
for (n=2; n<13; n++) {
    document.write ("Veces que salió " + n + "---> " + listaCompleta[n] + "<br/>");
}

