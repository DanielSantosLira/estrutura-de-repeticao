/* Faça um Programa que leia três números e mostre o maior e o menor deles. */

function maior(){
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var num3 = parseFloat(document.getElementById("numero3").value);

    var maior = num1;
   

    if(num2 > maior)
      maior = num2;
    
    if(num3 > maior)
     maior = num3;

     document.getElementById("resultado").innerHTML = "Maior: "+ maior
    var menor = num1;

    if(num2 < menor)
     menor = num2;
    if(num3 < menor)
     menor = num3;

     document.getElementById("resultado").innerHTML += "Menor: "+ menor
  }


/*function menor(){
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var num3 = parseFloat(document.getElementById("numero3").value);

    var menor = num1;

    if(num2 < menor)
     menor = num2;
    if(num3 < menor)
     menor = num3;

    alert("Menor: "+menor);
   }*/
