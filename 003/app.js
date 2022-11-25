/*3. Faça um Programa que verifique se uma letra digitada é 
"D" ou "N". Conforme a letra escrever: D - Dia, N - noite, Período Inválido. */

function VerificarPeriodo() {
    let periodo = document.getElementById("periodo").value
    if (periodo == "d") {
        document.getElementById("resultado").innerHTML = "Dia"

    } else if (periodo == "n") {
        document.getElementById("resultado").innerHTML = "Noite"
    } else {
        document.getElementById("resultado").innerHTML = "Periodo Invalido"
    }
}