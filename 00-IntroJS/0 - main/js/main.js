var apresentacao = "Olá Humano! ";
var dia = 29092022;
alert(apresentacao + "Esse é Meu Primeiro JS" + " No Dia " + dia + " Dessa Nova Terra");

console.log(dia);
console.log(apresentacao);
console.log(apresentacao.replace("Olá Humano", "Meu Nome é JS")); /*Mudar o atributo para essa ocasiao somente, nao altera na memoria */
console.log(apresentacao.toUpperCase());/* Deixar tudo Maiúsculo */
console.log(apresentacao.toLowerCase());/* Deixar tudo Minúsculo */

var lista = ["Maçã", "Uva", "Laranja", "Limão"];
console.log(lista);

lista.push("Uva", "Ameixa");/* Inserir Valor(no final), da para inserir ELEMENTOS REPETIDOS */
console.log(lista)
console.log("Apresentar Indice 2 -> " + lista[2]);
lista.pop();/* Remover Ultimo valor*/
console.log(lista);
console.log(lista.length); /* o tamanho da minha lista */
console.log(lista.push());
console.log(lista.reverse());/* reverte os elementos da lista*/
console.log(lista[3]); /*RETORNOU O 3° ITEM DO MEU VETOR/ ARRAY */
console.log(lista.toString()[3]);/*TRANSFORMOU EM STRING... RETORNO A 3° LETRA DO MEU VETOR/ FRASE */
console.log(lista.join(" - "));/*TRANSFORMOU EM STRING... Separando os elementos com " - "*/

console.log(" Agora Apresentando DICIONARIO ");
var fruta = [{nome: "maracuja", cor: "amarela", comSemente: true}, {nome: "uva", cor: "roxa", comSemente:true}];
console.log(fruta);
console.log(fruta[1])