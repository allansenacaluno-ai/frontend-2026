

//ENTRADA DE DADOS
//Variáveis serve para armazenar dados temporariamente
var nome = "Cleitinho Rodrigues cunha";     //string 
var idade = 22;                             //inteiro
var peso = 80.3;                            //decimal
var altura = 1.55;                          //decimal
var salario = 2000.50;                      //decimal
var votacao = true;                          //booleano
var documento = false;
var titulo = true;
//estrutura condicional
if(idade >=16 && idade <=70 && documento == true && titulo == true){
    //alert("Pode voutar! " + nome )

}else{
  //  alert(" Vai embora! não pode votar! sua idade é "+ idade);

}
if((idade < 18 && idade > 15) || idade >=70){
//alert("seu voto é facultativo!")

}
 //estruturas de repetção
//lista - arrays
//                    0         1       2        3
candidatos = ['Augusto cury', 'Lula','Flavio','Renan'];
//imprimir
console.log(candidatos [3]);

//ESTRUTURA DE REPETIÇÃO
var posicao = 0;
while(posicao < 4){
    console.log("candidato: " + candidatos[posicao]);
    posicao = posicao + 1;
}
for(contador=0; contador < candidatos.length; contador++ ){
    console.log("testando for: " + candidatos[contador])
}
//trabalhando com funções
function baixarEstoque(){
    console.log("Abaixou o estoque");

} 
function lancarCaixa(){
    console.log("Dinheiro entrado no caixa!");
}
function imprimirComprovante(){
    console.log("imprimir comprovante");
}
function efetuarVenda(){
    console.log("Fazendo venda...")
    baixarEstoque();
    lancarCaixa();
    imprimirComprovante();
}
//Fazendo a chamada da função - normalmente estaria atrelado à um botão
efetuarVenda();
//Criar obijetivos
var pessoas = {nome: "ricardo", idade: 20, altura: 1.75}
console.log(pessoas.nome)



