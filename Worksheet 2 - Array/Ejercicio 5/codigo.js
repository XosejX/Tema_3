function paresImpares () {
    var i;
    l = new Array ();
    lOrdenada = new Array ();
    
    for (i=0; i<100; i++){
        num = parseInt(Math.random() * 1000 + 1);
        l.push (num);
    }
    
    l.forEach(function (item, index){
        if (item%2 == 0){
            lOrdenada.unshift(item);
        }
        else {
                lOrdenada.push (item);
        }
    })
    
    return final = "Lista de random --> " + l + "<br/> Lista ordenada --> " + lOrdenada;
}

document.write(paresImpares ());
