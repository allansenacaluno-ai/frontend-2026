function analisarEmprestimo(){
    let idade = parseInt(document.getElementById("idade").value);
    let rendaMensal = parseFloat(document.getElementById("renda").value);
    let scoreCredito = parseInt(document.getElementById("score").value);
    let possuiRestricao = document.getElementById("restricao").checked;
    let divResultado = document.getElementById("resultado");
    if (isNaN(idade) || isNaN(rendaMensal) || isNaN(scoreCredito)) {
        divResultado.innerText = "Preencha todos os campos.";
        return;
    }
    if (possuiRestricao) {
        divResultado.innerText = "Empréstimo Negado.";
        return;
    }
    if ((idade >= 22 && rendaMensal > 3000) || scoreCredito > 800) {
        divResultado.innerText = "Empréstimo Aprovado!";
    } else {
        divResultado.innerText = "Empréstimo Negado.";
    }
}
