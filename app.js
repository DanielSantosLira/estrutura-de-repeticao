let fome = 4
let somo = 10
let banho = 'sim'

/*
if(fome > sono){
    document.getElementById("mensagem").innerHTML = "jantar"
}
else{
    document.getElementById("mensagem").innerHTML = "Dormi"
}
operadores relacionais 
> maior
== igual
< menor
>= maior igual
<= menor igual
<! diferente

opereadores Lógicos
&& - E todas as opereaçôes devem ser 
verdadeiras para o resultado se verdadeiro

|| -OU
! - NÃO

*/
if(fome > sono){
    document.getElementById("mensagem").innerHTML = "jantar"
}
else if(banho == 'sim'){
    document.getElementById("mensagem").innerHTML = "Tomar Banho"
}