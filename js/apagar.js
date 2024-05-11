document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('dblclick', function(event) {
        var linha = event.target.closest('tr.cliente');
        if (linha) {
            linha.remove();
        }
    });
});
var linhasCliente = document.querySelectorAll('.cliente');

linhasCliente.forEach(function(linha) {
    linha.addEventListener('dblclick', function(event) {
        if (!linha.classList.contains('titulos')) {
            linha.remove();
        }
    });
});
