var mudar = 2*6;
var mudar2 = mudar*mudar;

function mudaLugar() {
    var botaoNao = document.getElementById('muda');
    botaoNao.classList.toggle('movido');
}

function mudaLugar() {
    var botaoNao = document.getElementById('muda');

    // Calcula uma posição aleatória dentro dos limites da janela
    var novaPosicaoTop = Math.floor(Math.random() * (window.innerHeight - botaoNao.offsetHeight));
    var novaPosicaoLeft = Math.floor(Math.random() * (window.innerWidth - botaoNao.offsetWidth));

    // Aplica as novas coordenadas ao botão
    botaoNao.style.top = novaPosicaoTop + 'px';
    botaoNao.style.left = novaPosicaoLeft + 'px';
}

function imagem(){
    window.location.href="imagem.html"
}