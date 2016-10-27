//a) find largest number
function ln (lista) {
    return lista.sort(function(x, y) {
        return y-x;
    })
}

//b) find longest string
function ls (lista) {
return lista.sort(function(x, y) {
    return y.length - x.length; 
    })
}

//c) find even numbers
function en (lista) {
    return lista.filter(function(num){
        return num % 2 == 0;
        }
    )
}

//d) find odd numbers
function on (lista) {
    return lista.filter(function(num){
        return num % 2 != 0;
        }
    )
}

//e) find words that contain 'is'
function wis (lista) {
    palabras = lista.filter(function(i){
        return /is/m.test(i)
    })
    
    return palabras
}

//f) assert all numbers are divisible by three
function d3 (lista) {
    return lista.filter(function(num){
        return num % 3 == 0;
        }
    )
}

//g)  zip two arrays together
function zip (lista, lista2) {
    return lconcat = lista.concat(lista2);
}

//h) sort joined array from smallest to largest
function sorta (lista1, lista2) {
    listaOrdenada = [];
    return listaOrdenada.sort(function(lista1, lista2) {
        return lista1 - lista2;
    })
}

//i) remove the first word in the array
function remove (lista) {
    lista.shift();
    return lista;
}

//j) place a new word at the start of the array
function neww (lista) {
    lista.unshift("NewWord");
    return lista;
}

//k) replace some elements
function replace (lista) {
    lista.splice (2, 1, "nueva");
    return lista;
}

//l) Over an array with names, find all entries whose firstname starts with 'J',  create projection combined of only the initials of the name and then sort alphabetically
function firstname (lista) {
    filtro = lista.filter(function(name){
        return name.nombre[0]== "J";
    });
    
    union = filtro.map(function(i){
        return i.nombre[0] + " " + i.apellido[0];
    });
    
    ordenado = union.sort();
    
    for (lista of ordenado) {
        document.write ("l) Nombres con J ---> " + union + "<br/>");
    }
}

var l1 = [1,2,3,100,50];
var l2 = ["a", "b", "c", "d", "e", "f"];
var l3 = ["sol", "luna", "pantano"];
var l4 = [4, 3, 6, 1];
var l5 = [
    {nombre: "Jose", apellido: "Revelles"},
    {nombre: "Pepe", apellido: "Gomez"},
    {nombre: "Josep", apellido: "Martin"},
];
var l6 = ["isla", "sol", "ola", "misi"];

document.write("a) Numeros ordenados ---> " + ln (l1) + "<br/>");
document.write("b) Palabras ordenadas ---> " + ls (l3) + "<br/>");
document.write("c) Pares de la lista ---> " + en (l1) + "<br/>");
document.write("d) Impares de la lista ---> " + on (l1) + "<br/>");
document.write("e) Palabras que contienen IS ---> " + wis (l6) + "<br/>")
document.write("f) Numeros divisibles entre 3 ---> " + d3 (l1) + "<br/>");
document.write("g) Unión de listas ---> " + zip (l1, l2) + "<br/>");
document.write("h) Listas ordenadas ---> " + sorta (l1, l4) + "<br/>");
document.write("i) Elimina la primera palabra ---> " + remove (l2) + "<br/>");
document.write("j) Nueva palabra en lista ---> " + neww (l1) + "<br/>");
document.write("k) Reemplazo de palabras ---> " + replace (l2) + "<br/>");
firstname (l5);
