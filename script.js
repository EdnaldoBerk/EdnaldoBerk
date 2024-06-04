function atualizarMeses(inputId, outputId) {

    const anos = parseInt(document.getElementById(inputId).value);

    if (!isNaN(anos)) {

        const meses = anos * 12;

        document.getElementById(outputId).value = meses;

    }

}



function calcular() {

    const idadeAnos = parseInt(document.getElementById('idadeAnos').value);

    const idadeMeses = parseInt(document.getElementById('idadeMeses').value);

    const parceiroIdadeAnos = parseInt(document.getElementById('parceiroIdadeAnos').value);

    const parceiroIdadeMeses = parseInt(document.getElementById('parceiroIdadeMeses').value);

    const terceiroIdadeAnos = parseInt(document.getElementById('terceiroIdadeAnos').value) || 0;

    const terceiroIdadeMeses = parseInt(document.getElementById('terceiroIdadeMeses').value) || 0;



    // Converter idades para meses totais e depois arredondar para cima para anos

    const idadeTotalMeses = (idadeAnos * 12) + idadeMeses;

    const parceiroIdadeTotalMeses = (parceiroIdadeAnos * 12) + parceiroIdadeMeses;

    const terceiroIdadeTotalMeses = (terceiroIdadeAnos * 12) + terceiroIdadeMeses;



    const idadeTotal = Math.ceil(idadeTotalMeses / 12);

    const parceiroIdadeTotal = Math.ceil(parceiroIdadeTotalMeses / 12);

    const terceiroIdadeTotal = Math.ceil(terceiroIdadeTotalMeses / 12);



    // Restrição por lei: pessoas acima de 100 anos não podem namorar

    if (idadeTotal > 100 || parceiroIdadeTotal > 100 || terceiroIdadeTotal > 100) {

        document.getElementById('resultado').innerText = "Pessoas acima de 100 anos não podem namorar, conforme a lei 8.112 da Constituição Federal.";

        return;

    }



    // Restrição de idade: não pode namorar com menos de 13 anos

    if (idadeTotal <= 13) {

        document.getElementById('resultado').innerText = "Você não pode namorar, pois tem menos de 13 anos.";

        return;

    }



    // Calcular a idade mínima para namoro

    let idadeMinimaNamoro = Math.floor(idadeTotal / 2) + 7;

    if ((idadeTotal % 2) != 0) {

        idadeMinimaNamoro = Math.floor(idadeTotal / 2) + 7;

    }

    let idadeMaximaNamoro = (idadeTotal - 7) * 2;



    // Comparação de idade do parceiro

    const podeNamorarParceiro = parceiroIdadeTotal >= idadeMinimaNamoro && parceiroIdadeTotal <= idadeMaximaNamoro;



    // Comparação de idade do terceiro parceiro

    const podeNamorarTerceiro = terceiroIdadeAnos === 0 || (terceiroIdadeTotal >= idadeMinimaNamoro && terceiroIdadeTotal <= idadeMaximaNamoro);



    let textoResultado = `Idade mínima para namoro: ${idadeMinimaNamoro} anos.\n`;

    textoResultado += `Idade máxima para namoro: ${idadeMaximaNamoro} anos.\n`;

    textoResultado += `Você ${podeNamorarParceiro ? "pode" : "não pode"} namorar com seu parceiro.\n`;



    if (terceiroIdadeAnos || terceiroIdadeMeses) {

        textoResultado += `Você ${podeNamorarTerceiro ? "pode" : "não pode"} namorar com seu terceiro parceiro.`;

    }



    document.getElementById('resultado').innerText = textoResultado;

}

