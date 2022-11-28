/*4. Faça um Programa que verifique se uma letra digitada é vogal ou consoante.*/

function check(){
    let letra = document.getElementById("char").value;
    letra = letra.toLowerCase();

    if(letra=='a' || letra=='e' || letra=='i' || letra=='o' || letra=='u'){
    document.getElementById("resultado").innerHTML = "Vogal"
    }else {    
    document.getElementById("resultado").innerHTML = "Consoante"
    }

    document.getElementById("resultado").value = ""
    document.getElementById("char").value = ""
}