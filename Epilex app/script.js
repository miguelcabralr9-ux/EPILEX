const cadastro = document.querySelector(".cadastro");
const fechacadastro = document.querySelector(".fechacadastro")
const overlay = document.querySelector(".overlay");
const fundo = document.querySelector(".fundo")

//Variáveis do formulário
const user_date = document.querySelector("#user_date");


//Faz com que a data máxima seja a atual
if(user_date) {
user_date.max = new Date().toISOString().split("T")[0]; 
};
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