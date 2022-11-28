/*5. Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
      A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
      A mensagem "Reprovado", se a média for menor do que sete;
      A mensagem "Aprovado com Distinção", se a média for igual a dez.*/
function media() {
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);


    let media = (nota1 + nota2) / 2;

    if (media >= 7) {
        document.getElementById("resultado").innerHTML = "Uau! Aprovado com lovor"
        if(media == 6){
          document.getElementById("resultado").innerHTML = "Parabens, aprovado! Media"
        }
    } else {
        document.getElementById("resultado").innerHTML = "Reprovado "

    }
    document.getElementById("nota1").value = ""
    document.getElementById("nota2").value = ""
}