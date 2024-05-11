var botaoAdicionar = document.querySelector('.bt_adicionar');

botaoAdicionar.addEventListener('click', function(event) {
    event.preventDefault(); 

    var nome = document.getElementById('nome').value;
    var produtoSelect = document.getElementById('produto');
    var produto = produtoSelect.options[produtoSelect.selectedIndex].text;
    var qtde = document.getElementById('quantidade').value;
    var valorUnitario = document.getElementById('valor').value;

    if (nome.trim() === '' || qtde.trim() === '' || produto.trim() === '' || valorUnitario.trim() === '') {
        alert('Por favor, preencha todos os campos antes de adicionar uma nova linha.');
        return; 
    }

    // calcula o valor total da encomenda
    var total = parseFloat(qtde) * parseFloat(valorUnitario);

    var tabela = document.querySelector('.tabela');

    var novaLinha = tabela.insertRow(-1);

    // adiiciona células a nova linha 
    novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>${produto}</td>
        <td>${qtde}</td>
        <td>${valorUnitario}</td>
        <td>${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
    `;

    if (qtde < 1 || isNaN(qtde)) {
        qtdeInvalida(novaLinha);
    }

    if (isNaN(valorUnitario) || parseFloat(valorUnitario) <= 0) {
        valorInvalido(novaLinha);
    }

    novaLinha.addEventListener('dblclick', function(event) {
        if (!novaLinha.classList.contains('titulos')) {
            novaLinha.remove();
        }
    });
});

function qtdeInvalida(linha) {
    linha.cells[2].textContent = "Qtde inválida";
    linha.classList.add("texto-vermelho");
}

function valorInvalido(linha) {
    linha.cells[3].textContent = "Valor unitário incorreto";
    linha.classList.add("fundo-vermelho");
    linha.cells[4].textContent = "Qtde inválida";
}
