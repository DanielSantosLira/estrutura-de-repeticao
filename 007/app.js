/* Faça um Programa que leia três números e mostre o maior e o menor deles. */

function maior() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var num3 = parseFloat(document.getElementById("numero3").value);

    var maior = num1;
    var maior = num2;
    var maior = num3;
    var menor = num1;
    var menor = num2;
    var menor = num3;

    if (num1 > maior) {
        maior = num1;
    }
    
    if (num1 < menor) {
        menor = num1;
    }
    if (num2 > maior) {
        maior = num2;
    }
    if (num2 < menor) {
        menor = num2;
    }
    if (num3 > maior) {
        maior = num3;
        if (num3 < menor) {
            menor = num3;
        }
    } else {
        document.getElementById("resultado").innerHTML = "Maior: " + maior
        document.getElementById("resultado").innerHTML = "Menor: " + menor
    }
    

    document.getElementById("resultado").value = ""

}
/*
function maior() {
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);
    let num3 = parseFloat(document.getElementById("numero3").value);



    var menor = num1;
    var menor = num2;
    var menor = num3;


    if (num1 < menor) {
        menor = num1;
    }
    if (num2 < menor) {
        menor = num2;
    }
    if (num3 < menor) {
        menor = num3;
    }

    else {
        document.getElementById("resultadomenor").innerHTML = "Menor: " + menor
    }
    document.getElementById("resultadomenor").value = ""
}
*/


