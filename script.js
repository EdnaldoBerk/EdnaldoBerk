function atualizarMeses(idadeAnosId, idadeMesesId) {
    const anos = document.getElementById(idadeAnosId).value;
    const meses = anos * 12;
    document.getElementById(idadeMesesId).value = meses;
}

document.getElementById('suaIdadeAnos').addEventListener('input', function() {
    atualizarMeses('suaIdadeAnos', 'suaIdadeMeses');
});

document.getElementById('idadeParceiroAnos').addEventListener('input', function() {
    atualizarMeses('idadeParceiroAnos', 'idadeParceiroMeses');
});

document.getElementById('idadeTerceiroAnos').addEventListener('input', function() {
    atualizarMeses('idadeTerceiroAnos', 'idadeTerceiroMeses');
});

function calcularNamoro() {
    const suaIdadeAnos = parseInt(document.getElementById('suaIdadeAnos').value);
    const suaIdadeMeses = parseInt(document.getElementById('suaIdadeMeses').value);
    const idadeParceiroAnos = parseInt(document.getElementById('idadeParceiroAnos').value);
    const idadeParceiroMeses = parseInt(document.getElementById('idadeParceiroMeses').value);
    const idadeTerceiroAnos = parseInt(document.getElementById('idadeTerceiroAnos').value);
    const idadeTerceiroMeses = parseInt(document.getElementById('idadeTerceiroMeses').value);

    const totalMesesSuaIdade = Math.ceil(suaIdadeAnos * 12 + suaIdadeMeses);
    const totalMesesParceiro = Math.ceil(idadeParceiroAnos * 12 + idadeParceiroMeses);
