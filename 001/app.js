/*1. Faça um Programa que peça dois números e 
        imprima  o maior deles.*/
function MaiorNumero() {
    let n1 = document.getElementById("numero1").value
    let n2 = document.getElementById("numero2").value
 if(parseInt(n1) > parseInt (n2)){
 document.getElementById("resultado").innerHTML = "O maior número é: " + n1
 }else{
    document.getElementById("resultado").innerHTML = "O maior número é: " + n2
 }
 document.getElementById("numero1").value = ""
 document.getElementById("numero2").value = ""
 
}