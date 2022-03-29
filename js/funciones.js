
function Sueldo(){
    var horas=null;
    var salario=null;
    horas =document.getElementById("idhoras").value;
    salario= document.getElementById("idsalario").value;
    var sueldodia=horas*salario;
    alert("Tu sueldo es de: "+sueldodia+" pesos al dia, Si continuas trabajando asi, podrias ganar "+(sueldodia*6)+" en una semana!");
    }




