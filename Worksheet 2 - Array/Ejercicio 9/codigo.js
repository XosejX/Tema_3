function arrayCero (n) {
    var i;
    var l = new Array (n);
    
    for (i=0; i<n; i++) {
        l [i] = 0;
    }
    
    for (i=0; i<7; i++) {
        l[i] = new Array (7);
    }
    
    var ii;
    for (i=0; i<7; i++) {
        for (ii=0; ii<7; ii++) {
        l[i][ii] = 0;
        }
    }
    
    return l;
}

function dobleDado (lista) {

    for (i=0; i<36000; i++) {
        
        var d1 = parseInt(Math.random() * 6 + 1);
        var d2 = parseInt(Math.random() * 6 + 1);
        
        lista[d1][d2]++;
        }

    return lista;
}



l = arrayCero (7);
listaCompleta = dobleDado (l);

var n;
var n2;
for (n=1; n<7; n++) {
    for (n2=1; n2<7; n2++) {
        document.write ("Veces que salio " + n + " y " + n2 + " ---> " + listaCompleta[n][n2] + "<br/>");
    }
}



