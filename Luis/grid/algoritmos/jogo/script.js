var jogador = "x";

function jogar(celula){
    //comprar se a celula está vazia para assim escrever 
    if (celula.innerHTML == ""){
        //escreva no html a letra
        celula.innerHTML = jogador;
        //alternar variavel jogador para a proxima jogada
        if(jogador == "x"){
            jogador = "o";
        celula.style.backgroundColor = "red"
        }else{
            jogador = "x";
             celula.style.backgroundColor = "blue"
        }
    }
}

function reiniciar(){
    window.location.reload();
}

