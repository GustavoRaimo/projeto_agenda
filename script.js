document.getElementById('contato-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;

    if (nome && telefone) {
        var table = document.querySelector('table');

        var nova_linha = table.insertRow(table.rows.length);
        var cell1 = nova_linha.insertCell(0);
        var cell2 = nova_linha.insertCell(1);

        cell1.innerHTML = nome;
        cell2.innerHTML = telefone;

        document.getElementById('nome').value = '';
        document.getElementById('telefone').value = '';
    }
});