/* Faça um Programa que leia três números e mostre-os em ordem decrescente. */

function exibir(){
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var num3= parseFloat(document.getElementById("numero3").value);

    var aux = num1;

    if(num2 > num1){
     aux=num2;
     num2=num1;
     num1=aux;
    }

    if(num3 > num1){
     aux=num3;
     num3=num1;
     num1=aux;
    }

    if(num3 > num2){
     aux=num3;
     num3=num2;
     num2=aux;
    }
   
  document.getElementById("resultado").innerHTML = num1+"-"+num2+"-"+num3
}