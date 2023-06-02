console.log(document) // abrir a documentação do "index.html" no console
console.log(document.querySelector(".botao-trailer")) //buscando o elemento do botão

// variaveis:
const botaoTrailer = document.querySelector(".botao-trailer"); // pegando o elemento do botão
const modal = document.querySelector(".modal") // pegar o elemento da "modal" no js
const fecharModal = document.querySelector(".fechar-modal") // pegar o elemento de fechar a modal
const video = document.getElementById("video") // pegando o elemento do video
const linkVideo = video.src // adicionando uma variavel para o link do vídeo


botaoTrailer.addEventListener("click", () => { // indentificando o click do usuário
    // abrindo a "modal" (a aba do trailer) na tela
    modal.classList.add("aberto") 
    video.setAttribute("src", linkVideo)
})

// fechando a aba de trailer
fecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto") 
    video.setAttribute("src","")
})

/*
    Também poderia ser criado uma função para abrir e fechar a aba do trailer (modal)

    function altModal() {
        modal.classList.toggle("aberto")
    }

    Adicionando essa função no início do código, na aba dos eventos eu poderia trocar o
    --modal.classList.add/remove("aberto")
    por
    --altModal()

    Isso deixaria o código mais simples e mais bonito!
*/


