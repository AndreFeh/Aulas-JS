console.log("Contas");
// var num1 = prompt("Insira Um Número: ");
// var num2 = prompt("Insira Outro Número: ");

function soma (num1, num2){
    return num1+num2;
} /* Passar os parametros quando imprimir SOMA(N°1, N°2) */

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(soma(3, 5));
alert(setReplace("Vai Japao", "Japao", "brasil"))
// replace serve para alterar o valor, entao se JAPAO  esta escrito correto, ele altera JAPAO PARA BRASIL

var idade = prompt("Insira sua Idade: ")
if(idade>=18){
    alert("maior de idade, " + idade+" anos");
}else {
    alert("menor de idade, " + idade+" anos");
};
// ------------------------------------------

var count = 0;

    while(count <=5){
        console.log(count);
        count++;
    }
//  OOOUUUU
var count1;
for(count1 = 0; count1<=5; count1++){
    alert(count1);
}

console.log("Datas");
var dia = new Date();
console.log(dia.getHours(), dia.getMinutes(), dia.getDay(), dia.getMonth(), dia.getYear());

