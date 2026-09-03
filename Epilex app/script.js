const cadastro = document.querySelector(".cadastro");
const fechacadastro = document.querySelector(".fechacadastro")
const overlay = document.querySelector(".overlay");
const fundo = document.querySelector(".fundo")

//abre overlay de cadastro
cadastro.addEventListener("click", function() {
    //overlay
    overlay.classList.add("entrar");
    overlay.classList.remove("sair");
    //fundo
    fundo.classList.add("entrar");
    fundo.classList.remove("sair");
});
//fecha overlay de cadastro
fechacadastro.addEventListener("click", function() {
    //overlay
    overlay.classList.add("sair");
    overlay.classList.remove("entrar");
    //fundo
    fundo.classList.add("sair");
    fundo.classList.remove("entrar");
});