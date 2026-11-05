// Projeto Jan Ken Pon em JavaScript.

function jogarJokenpo(escolhaUsuario) {

    // Elementos do HTML que serão exibidos.
    let divEscolhas = document.getElementById("texto-escolhas");
    let divResultado = document.getElementById("texto-resultado");

    // Escolha do computador.
    let numeroAleatorio = Math.random();
    let escolhaComputador = "";

    if (numeroAleatorio < 0.33) {
        escolhaComputador = "pedra";
    } else if (numeroAleatorio < 0.66) {
        escolhaComputador = "papel";
    } else {
        escolhaComputador = "tesoura";
    }

    // Mostra as escolhas.
    divEscolhas.innerText = "Você: " + escolhaUsuario + " | Computador: " + escolhaComputador;

    // Determina o vencedor.
    if (escolhaUsuario === escolhaComputador) {
        divResultado.innerText = "Empate!";
    } else if (
        (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
        (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
    ) {
        divResultado.innerText = "Você venceu!";
    } else {
        divResultado.innerText = "Você perdeu!";
    }
}