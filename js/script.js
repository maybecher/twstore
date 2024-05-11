var clientes = document.querySelectorAll(".cliente");

for (var i = 0; i < clientes.length; i++) {
    var quantidade = clientes[i].querySelector(".quantidade").textContent;
    var unitario = clientes[i].querySelector(".unitario").textContent;
    clientes[i].querySelector(".total").textContent = quantidade * unitario;

    if (quantidade < 1 || isNaN(quantidade)) {
        clientes[i].querySelector(".quantidade").textContent = "Qtde inválida";
        clientes[i].style.backgroundColor = "red";
    } else {
        clientes[i].querySelector(".total").textContent = calculaTotal(quantidade, unitario);
    }
}

function calculaTotal(quantidade, unitario) {
    var total = 0;
    total = quantidade * unitario;
    return formataValor(total);
}

function validaQtde(quantidade) {
    if (!isNaN(quantidade) && quantidade > 0) {
        return true;
    } else {
        return false
    }
}

function validaUnitario(unitario) {
    if (!isNaN(unitario) && unitario > 0) {
        return true;
    } else {
        return false
    }
}

function formataValor(valor) {
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

function valorInvalido(cliente) {
    cliente.querySelector(".valor").textContent = "VALOR INVÁLIDO!";
    clientes[count].classList.add("info-invalida");
}

function calcularTotalEncomenda(cliente, qtde, unitario) {
    cliente.querySelector(".valor").textContent = formataValor(unitario);
    cliente.querySelector(".total").textContent = calculaTotal(qtde, unitario);
}
