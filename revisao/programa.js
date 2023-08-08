var nome = document.getElementById("inputNome");
var calorias = document.getElementById("calorias");
var lista = document.getElementById("lista");
var total = document.getElementById("total");

function adicionar(){
    var nomeAlimento = nome.ariaValue;
    var valorCaloria = parseInt(calorias.value);

    var li = document.createElement('li');
    li.innerHTML = `${nomeAlimento}: ${valorCaloria} caloria`

    lista.appendChild(li);


}