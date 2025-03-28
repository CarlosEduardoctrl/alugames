let jogosAlugados = 1;

function exibirJogosAlugados(){
console.log(`total de jogos alugados ${jogosAlugados}`);
}

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if(imagem.classList.contains('dashboard__item__img--rented')) {
        if (confirm('Deseja realmente devolver o jogo?')) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.textContent = 'Alugar';
            botao.classList.remove('dashboard__item__button--return');
            jogosAlugados--;
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        jogosAlugados++;
    }
    exibirJogosAlugados();
}