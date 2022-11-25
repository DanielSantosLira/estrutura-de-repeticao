/*Faça um Programa que peça um valor e mostre na tela se o 
valor é positivo ou negativo.*/

function PositivoOuNegativo() {
    let n1 = document.getElementById("numero1").value
    if (n1 >= 1) {
        document.getElementById("resultado").innerHTML = "O Resultado é Positivo: "
    } else if (n1 <= -1) {
        document.getElementById("resultado").innerHTML = "O Resultado é Negativo: "
    }else if(n1 == 0){
        document.getElementById("resultado").innerHTML = "O Resultado é Neutro: "
    }
    else{
        document.getElementById("resultado").innerHTML = "O Valor é Invalido: "
    }
    document.getElementById("numero1").value = ""
}