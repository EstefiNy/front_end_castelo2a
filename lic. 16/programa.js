//guardar os dados
var convidados = [];

//variaveis
var nome =
document.getElementById('nome').value;
var botao =
document.getElementById('adicionar');
var lista =
document.getElementById('listaConvidados');

//app
botao.addEventListener('click',
function(){
    convidados.push(nome.value);
    nome.value = "";
    atualizar();
});

function atualizar(){
    lista.innerHTML = "";
    for(let i = 0; i < convidados.length; i++){
        var li = document.createElement('li');
        li.textContent = convidados[i];
        lista.appendChild(li);
    }
}
atualizar();

function enviarServidor(){
    var requisicao = convidados;
    window
}