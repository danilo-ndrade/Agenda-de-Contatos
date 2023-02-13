let inputNome = document.getElementById("input-nome");
let inputNumero = document.getElementById("input-numero");
let tabelaBody = document.getElementById("tabela-body");
let form = document.getElementById("form-contato");

let listaNumeros = [];

function inserirContato(nome, numero) {
  if (listaNumeros.includes(numero)) {

    alert("Este número já foi cadastrado");
  
} else {
    
    listaNumeros += numero;

    let row = document.createElement("tr");
    let c1 = document.createElement("td");
    let c2 = document.createElement("td");

    c1.textContent = nome;
    c2.textContent = numero;

    row.appendChild(c1);
    row.appendChild(c2);

    tabelaBody.appendChild(row);
  
}
}

inputNumero.addEventListener('input', function(event) {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length >= 10) {
      event.target.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else {
      event.target.value = value;
    }
  });

form.addEventListener("submit", function (e) {
  e.preventDefault();
  inserirContato(inputNome.value, inputNumero.value);

  inputNome.value = '';
  inputNumero.value = '';
});
