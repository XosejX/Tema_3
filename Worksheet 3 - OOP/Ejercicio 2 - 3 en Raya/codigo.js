class tresRaya {
    constructor (l = [["a","b","c"],["d","e","f"],["g","h","i"]], jugador="O", cont=0) {
        this.l = l;
        this.jugador = jugador;
        this.cont = cont;
    }
    
    comprobarGanador () {
        if (this.l[0][0] == this.l[0][1] && this.l[0][1] == this.l[0][2] || this.l[0][0] == this.l[1][0] && this.l[1][0] == this.l[2][0] || this.l[0][0] == this.l[1][1] && this.l[1][1] == this.l[2][2] || this.l[0][1] == this.l[1][1] && this.l[1][1] == this.l[1][2] || this.l[0][2] == this.l[1][2] && this.l[1][2] == this.l[2][2] || this.l[2][0] == this.l[2][1] && this.l[2][1] == this.l[2][2] || this.l[0][1] == this.l[1][1] && this.l[1][1] == this.l[2][1] || this.l[0][2] == this.l[1][1] && this.l[1][1] == this.l[2][0]) {
            document.getElementById("victoria").innerHTML = "Victoria para el jugador " + this.jugador;
        }
    }
    
    crearTablero () {
        var i;
        var ii;
        
        document.write("<button onclick='location.reload()'>REINICIAR JUEGO</button>");
        
        document.write("<br/><div id = 'div'><table border='1' align='center' cellspacing='1' cellpadding='20'>");
        
        for (i=0;i<3;i++) {
            document.write("<tr>");
            for (ii=0;ii<3;ii++) {
                document.write("<td id='" + i + ii + "' onclick='juego.marcar(this.id)'>º</td>");
            }
            document.write("</tr>");
        }
        document.write("</table></div>");
        
        document.write("<p>Turno del jugador: <span id='par'>X</span></p><br/><h1 id='victoria' align='center'></h1>");
        
    }
    
    marcar (clickid) {
        var v = document.getElementById(clickid).innerHTML;
        
        if (v == "O" || v == "X") {
            return;
        }
        
        else {
            document.getElementById("par").innerHTML = this.jugador;
            var pos = clickid.split("");

            if (this.jugador == "X") {
                this.jugador = "O";
                this.l [pos[0]][pos[1]] = 1;
            }
            else if (this.jugador == "O") {
                this.jugador = "X";
                this.l [pos[0]][pos[1]] = 2;
            }
        }
        document.getElementById(clickid).innerHTML = this.jugador;
        this.cont++;
        
        juego.comprobarGanador ();
    }
}

juego = new tresRaya ();
juego.crearTablero();