// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let valor1 = parseInt(gets());
let valor2 = parseInt(gets());

//TODO: Complete os espaços em branco com uma possível solução para o desafio

let total =  valor1*valor2;
print("PROD = " + total);

// --------------------------------------------------------------------//

// TODO: complete os espaços em branco com sua solução para o problema
// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let input = gets();

let qtdEntradas = parseInt(input);
let nivelEnergia;

//Resolva o desafios nos espaços em branco
for(let i = 0; i < qtdEntradas; i++){
    input = gets();
    nivelEnergia = parseInt(input);
    
    if(nivelEnergia > 8000){
        print   ("Mais de 8000!");
    }else{
        print("Inseto!");
    }
}

// --------------------------------------------------------------------//

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções.

const monthNumber = gets();

//TODO: Complete o JSON "months" com os meses faltantes.
const months = {
  "1": "January",
  "2": "February",
  "3": "March",
  "4": "April",
  "5": "May",
  "6": "June",
  "7": "July",
  "8": "August",
  "9": "September",
  "10": "October",
  "11": "November",
  "12": "December"
};

print(months[monthNumber]); //dentro da [deve imprime numero do Scaner]

// --------------------------------------------------------------------//

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

const PI = 3.14159;

let R = parseFloat(gets());

//TODO: Complete os espaços em branco com uma possível solução para o desafio
//Para precisão numérica utiliza-se o .toFixed(n)

//TRES CASAS APOS O PONTO .000
// Math.pow para fazer POTENCIAÇÃO
//Para definir quantidades de casas antes da virgula .toFixed(n)


let volume = (4.0/3) * PI * Math.pow(R, 3);

print("VOLUME = "  +  volume.toFixed(3));

