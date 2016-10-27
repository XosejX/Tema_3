function factorial (n) {
    if (n == 1) {
        return n;
    }
    else {
        return n * factorial (n - 1);
    }
}


var num = 1;
document.write ('<table border="1" cellspacing="2" >');

for (num; num < 11; num++) {
    var f = factorial (num);

        document.write ("<tr>");
            document.write ("<td>"+num+"</td>");
            document.write ("<td>"+f+"</td>");
        document.write ("</tr>");
}

document.write ('</table>');