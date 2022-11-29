/*. Faça um programa que pergunte o preço de três produtos e informe qual produto você deve 
comprar, sabendo que a decisão é sempre pelo mais barato.* */

function MenorPreco() {
    let precoProduto1 = parseFloat(document.getElementById("precoProduto1")).value
    let precoProduto2 = parseFloat(document.getElementById("precoProduto2")).value
    let precoProduto3 = parseFloat(document.getElementById("precoProduto3")).value

    


    if (precoProduto1 < precoProduto2) {
        if (precoProduto1 < precoProduto3) {
            print("VocÃª deve comprar o primeiro produto!");
        }

    } else {
        print("VocÃª deve comprar o terceiro produto!")
    }else{
        if (precoProduto2 < precoProduto3) {
            print("VocÃª deve comprar o segundo produto!");
        }
    }else{
        print("VocÃª deve comprar o terceiro produto!")
    }
    document.getElementById("resultado").value = ""
}
