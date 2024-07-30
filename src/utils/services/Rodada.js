const {getlistRodadaBrasileirao} = require("../services/rodadasBrasilseira");

function filtrarRodadasFuturas( ) {
    const rodadas = getlistRodadaBrasileirao()
    const dataAtual = new Date(); // Data atual

    const rodadasFuturas = [];
    for (let i = 0; i < rodadas.length; i++) {
        const rodada = rodadas[i];
        const inicioRodada = new Date(rodada.inicio);

        if (inicioRodada >= dataAtual) {
            rodadasFuturas.push(rodada);
        }
    }
    return rodadasFuturas;
}


function determinarRodadaAtual() {
    const rodadas = getlistRodadaBrasileirao()
    const dataAtual = new Date(); // Data atual
    const dataAtualsemohora = new Date(dataAtual.getFullYear(),dataAtual.getMonth(),dataAtual.getDate(),-3); // Data atual
    // console.log(rodadas)
    // console.log(dataAtual)
    for (let i = 0; i < rodadas.length; i++) {
        const rodada = rodadas[i];
        const inicioRodada = new Date(rodada.inicio);
        const fimRodada = new Date(rodada.fim);
        
        console.log(dataAtualsemohora)
        console.log(inicioRodada)
        console.log(fimRodada)
        if (dataAtualsemohora >= inicioRodada && dataAtualsemohora <= fimRodada) {
        return rodada.numero; // Ou outra propriedade que identifique a rodada
        }
    }
    return null; // Retornar null se a rodada atual não for encontrada
}

// Exemplo de uso



module.exports = { determinarRodadaAtual ,filtrarRodadasFuturas};
