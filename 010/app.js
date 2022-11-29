/*Faça um Programa que pergunte em que turno você estuda. Peça para digitar M-matutino 
ou V-Vespertino ou N- Noturno. Imprima a mensagem "Bom Dia!", 
"Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!",  conforme o caso.
As Organizações Tabajara resolveram dar um aumento de salário aos seus 
colaboradores e lhe contraram para desenvolver o programa que calculará os reajustes */

function exibir() {
    let periodo = document.getElementById("periodo").value
    
    if (periodo == "m") {
        document.getElementById("resultado").innerHTML = "Matutino"
        
    }else if (periodo == "v") {
        document.getElementById("resultado").innerHTML = "Vespertino"
    }
     else if (periodo == "n") {
        document.getElementById("resultado").innerHTML = "Boa Noite!"
    } else {
        document.getElementById("resultado").innerHTML = "Periodo Invalido"
    }
document.getElementById("resultado").value = ""
}
function calcula(value)
{
    por = 0;
    value = parseFloat(value);    
    if (value <=280)
    {
    	por = 20;
    }
    else if (value > 280 && value <= 700)
    {
    	por = 15;
    }
    else if (value > 700 && value <= 1500)
    {
    	por = 10;
    }
    else if (value > 1500)
    {
    	por = 5;
    }
    resp = value + ((value * por) / 100);
    document.getElementById("reposta").innerHTML = "R$"+resp;
   
}







