

const botaoAlterarTema = document.getElementById("botao-alterar-tema");
console.log(botaoAlterarTema);

const body = document.querySelector("body");
console.log(body);

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", (evt) => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    if(modoEscuroEstaAtivo) {
        body.classList.remove("modo-escuro");
    
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png"); }

    else {
        body.classList.add("modo-escuro");
        
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }
});

// body.classlist.toggle("modo-escuro") - ele alterna entre um e outro não precisando de remove e add ("modo-escuro")

// passo1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema.

// passo2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body.

// passo3 - dar um jeito de identificar o clique do usuário no botão troca de tema

  
// passo4 - adicionar a classe modo-escuro no body

// passo5 - trocar a imagem do botão de alterar tema para a lua.

// passo 6 - verificar se no body contem a classe modo-escuro