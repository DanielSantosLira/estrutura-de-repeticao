/*Faça um Programa que leia três números e mostre o maior deles.*/

function maior(){
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);
    let num3 = parseFloat(document.getElementById("numero3").value);

    let maior = num1;
    maior = num2;
    maior = num3;

    if(num1 > maior){
        maior = num1;
       }
    if(num2 > maior){
     maior = num2;
    }
    if(num3 > maior){
     maior = num3;

    }else{
        document.getElementById("resultado").innerHTML = "Maior: " + maior
    }
    document.getElementById("resultado").value = ""

   
   }