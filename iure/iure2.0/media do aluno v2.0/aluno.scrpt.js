function caucularnotafinal(){
let nota1 = Number(document.getElementById("nota1").value);
let nota2 = Number(document.getElementById("nota2").value);
let media = (nota1 + nota2) / 2 ;

document.getElementById("resultado").innerHTML =  + media;

let msg //criar uma variavel e deixar ela vazia
if(med >=6){// se por acaso a media foi 6.0 ou mais....

msg ='meus parabéns! aprovado!!'
} else {
    msg='Estude um pouco mais!!! Reprovado'
    //o if é uma estrutura que cria uma CONDIÇÂO, que execulta um bloco
//de comando ou outro, dependendo do resultado de um teste logico.

let ress = document.getElementById('situacao')
    res.innerHTML = '<p> Calculando a média final de <mark>$(nome)</mark>,</p>'
    res.innerHTML += '<p> As notas obtidas foram<mark->$<nota1> e $(nome2)</mark>,</p>'
    res.innerHTML += '<p> A mêdia final serà <mark>$(med)</mark>,</p>'
    res.innerHTML += `<p> A mensagem que temos é: <stroug slylecolor: blue'>=${msg}</strong>,</p>`

}
}