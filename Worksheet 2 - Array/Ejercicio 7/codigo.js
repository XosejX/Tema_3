function arrayCero () {
    var i;
    
    for (i=-1; i<10; i++) {
        l [i] = 0;
    }
    return l + "<br/>";
}

function arrayUno () {
    var i;
    for (i=-1; i<10; i++) {
        l [i] = l[i] + 1;
    }
    return l + "<br/>";
}

function muestraArray () {
    var final = "";
    l.forEach(function (item, index){
        final = final + item + " ";
    })
    return final;
}

var l = new Array (10);
document.write ("Array de 0 ---> " + arrayCero ());
document.write ("Array de suma mas 1 ---> " + arrayUno ());
document.write ("Array con espacios ---> " + muestraArray ());
