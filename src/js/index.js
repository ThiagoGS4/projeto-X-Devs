const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

btnAvancar.addEventListener("click", function(){
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

    cartaoAtual++;
    if(cartaoAtual >= cartoes.length) cartaoAtual = 0;

    cartoes[cartaoAtual].classList.add("selecionado");
});

btnVoltar.addEventListener("click", function(){
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

    cartaoAtual--;
    if(cartaoAtual < 0) cartaoAtual = cartoes.length - 1;

    cartoes[cartaoAtual].classList.add("selecionado");
});
