
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

            // Convertendo anos e meses para total de meses e arredondando para cima
            const totalMesesSuaIdade = Math.ceil(suaIdadeAnos * 12 + suaIdadeMeses);
            const totalMesesParceiro = Math.ceil(idadeParceiroAnos * 12 + idadeParceiroMeses);
            const totalMesesTerceiro = idadeTerceiroAnos && idadeTerceiroMeses ? Math.ceil(idadeTerceiroAnos * 12 + idadeTerceiroMeses) : null;

            // Convertendo de volta para anos e meses
            const totalAnosSuaIdade = Math.ceil(totalMesesSuaIdade / 12);
            const totalAnosParceiro = Math.ceil(totalMesesParceiro / 12);
            const totalAnosTerceiro = totalMesesTerceiro ? Math.ceil(totalMesesTerceiro / 12) : null;

            // Calculando a idade mínima para namoro
            const idadeMinNamoro = Math.floor(suaIdadeAnos / 2) + 7;
            const mesesMinNamoro = idadeMinNamoro * 12;
            // Calculando a idade máxima para namoro
            const idadeMaxNamoro = (totalAnosSuaIdade - 7) * 2;

            let resultados = `Sua idade mínima para namoro é ${idadeMinNamoro} anos.<br>`;
            resultados += `Sua idade máxima para namoro é ${idadeMaxNamoro} anos.<br>`;

            // Verificando se o casal pode namorar
            if (totalAnosSuaIdade <= 100 && totalAnosParceiro <= 100) {
                if (totalAnosParceiro >= idadeMinNamoro && totalAnosParceiro <= idadeMaxNamoro) {
                    if (suaIdadeAnos >= 13 && idadeParceiroAnos >= 13) {
                        resultados += `Você e seu parceiro(a) podem namorar.<br>`;
                    } else {
                        resultados += `Seu parceiro(a) é muito jovem para namorar.<br>`;
                    }
                }
            } else {
                resultados += `Um dos parceiros tem mais de 100 anos, não é permitido.<br>`;
            }

            // Verificando se o trisal pode namorar
            if (totalAnosTerceiro) {
                if (totalAnosSuaIdade <= 100 && totalAnosTerceiro <= 100) {
                    if (totalAnosTerceiro >= idadeMinNamoro && totalAnosTerceiro <= idadeMaxNamoro) {
                        if (suaIdadeAnos >= 13 && idadeParceiroAnos >= 13 && idadeTerceiroAnos >= 13) {
                            resultados += `Você, seu parceiro(a) e o terceiro podem namorar.<br>`;
                        } else {
                            resultados += `Você, seu parceiro(a) ou o terceiro são muito jovens para namorar.<br>`;
                        }
                    }
                } else {
                    resultados += `Um dos parceiros tem mais de 100 anos, não é permitido.<br>`;
                }
            }

            document.getElementById('resultados').innerHTML = resultados;
        }
