//lista de convidados
var convidados = [];

//variaveis
var nome =
document.getElementById('nome').ariaValueMax;
var botao =
document.getElementById('add');
var lista =
document.getElementById('listaConvidados');

botao.addEventListener('click',
function(){
    convidados.push(nome);
    nome = "";
    atualizar();
});

function atualizar(){
    lista.innerHTML = " ";
    
}