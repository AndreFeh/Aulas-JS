// var idade = 18;
// Ou
/*
var idade = prompt("Insira sua Idade: ")
if(idade>=18){
    alert("maior de idade, " + idade+" anos");
}else {
    alert("menor de idade, " + idade+" anos");
};*/
// ------------------------------------------

var count = 0;

    while(count <=5){
        console.log(count);
        count++;
    }

// var count1;
// for(count1 = 0; count1<=5; count1++){
//     alert(count1);
// }

console.log("Datas");
var dia = new Date();
console.log(dia.getHours(), dia.getMinutes(), dia.getDay(), dia.getMonth(), dia.getYear());
