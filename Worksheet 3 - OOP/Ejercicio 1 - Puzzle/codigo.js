class Puzzle {
    constructor (l = [[0,0,0],[0,0,0],[0,0,0]]) {
        this.l = l;
    }
    
    crearPuzzle () {
        var i;
        var ii;
        
        document.write("<button onclick='location.reload()'>REINICIAR JUEGO</button>");
        
        document.write("<br/><div id = 'div'><table border='1' align='center' cellspacing='1' cellpadding='20'>");
        
        for (i=0;i<3;i++) {
            document.write("<tr>");
            for (ii=0;ii<3;ii++) {
                document.write("<td id='" + i + ii + "' onclick='juego.marcar(this.id)'></td>");
            }
            document.write("</tr>");
        }
        document.write("</table></div>");
        
        document.write("<br/><h1 id='victoria' align='center'></h1>");
    }
    
    marcar (clickid) {
        
        
        juego.desordenarPuzzle (clickid);
    }
    
    desordenarPuzzle (clickid) {
        var pieza = [];
        var i;
        var ii;
        var iii;
        var cond = true;
        
        for (i=0;i<80;i++) {
            var random = parseInt(Math.random() * 9 + 1);
            for (ii=0;ii<9;ii++) {
                if (pieza[ii] == random) {
                    cond = false;
                }
            }
            if (cond) {
                pieza.push(random);
                document.getElementById ("victoria").innerHTML = pieza;
            }
            
            else {
                cond = true;
            }
        }
        
        for (i=0;i<3;i++) {
            for (ii=0;ii<3;ii++) {
                for (iii=0;iii<9;iii++) {
                    document.getElementById(i.toString()+ii.toString).innerHTML == pieza[i];
                }
            }
        }
        
        
        //document.getElementById ("victoria").innerHTML = random;
    }
    
}

juego = new Puzzle ();
juego.crearPuzzle ();
juego.desordenarPuzzle ();





