function clicou(){
    alert("Obrigado Por Clicar");
}

function clicou2(){
    document.getElementById("agradecer");/*Pega do documento o ElementoID */
    console.log(document.getElementById("agradecer"));
}

function clicou3(){
    document.getElementById("agradecer").innerHTML =     "Obrigado Por Clicar";
}

function redirecionar(){
    window.open("https://mail.google.com/mail/u/1/#inbox");/*Redirecionador para Abrir em outra Pagina*/
    window.location.href = "https://mail.google.com/mail/u/1/#inbox";/*Abre na Mesma Pagina*/
}

function trocar(elemento){
    // document.getElementById("mouseMove").innerHTML = "Obrigado por passar o mouse"; /*"quando passar o mouse ele reconhehce e troca a frase"/*
    // alert("trocar texto"); /*Quando passar o mouse em cima, ele reconhecera e dara um alerta*/
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
}
