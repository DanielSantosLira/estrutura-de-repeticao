/*. Faça um programa que pergunte o preço de três produtos e informe qual produto você deve 
comprar, sabendo que a decisão é sempre pelo mais barato.* */

function MenorPreco() {
    
    let precoProduto1 = parseFloat(document.getElementById("numero1").value)
    let precoProduto2 = parseFloat(document.getElementById("numero2").value)
    let precoProduto3 = parseFloat(document.getElementById("numero3").value)
     let mensagem = " "


    if (precoProduto1 < precoProduto2) {
        if (precoProduto1 < precoProduto3) {
            mensagem ="Você deve comprar o primeiro produto!"
        }

    } else {
        mensagem ="Você deve comprar o terceiro produto!"
    
        if (precoProduto2 < precoProduto3) {
            mensagem= "Você deve comprar o segundo produto!"
        }
    }
    
    document.getElementById("resultado").innerHTML = mensagem
}

