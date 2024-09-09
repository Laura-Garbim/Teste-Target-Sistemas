const fs = require('fs');

function carregarDados() {
    const caminho = 'C:\\Users\\Sou Proa\\Downloads\\Dados\\dados.json'; 
    //ajustar o caminho para onde o arquivo foi salvo
    const dados = fs.readFileSync(caminho);
    return JSON.parse(dados);
}

function calcularFaturamento() {
    const dados = carregarDados();
    
    const faturamentos = dados
        .filter(dia => dia.valor > 0)
        .map(dia => dia.valor);

    if (faturamentos.length === 0) {
        console.log("Não há dados de faturamento válidos.");
        return;
    }
    
    const menorFaturamento = Math.min(...faturamentos);
    const maiorFaturamento = Math.max(...faturamentos);
    
    const somaFaturamentos = faturamentos.reduce((acc, valor) => acc + valor, 0);
    const mediaMensal = somaFaturamentos / faturamentos.length;
    
    const diasAcimaDaMedia = faturamentos.filter(valor => valor > mediaMensal).length;
    
    console.log(`Menor valor de faturamento: ${menorFaturamento.toFixed(2)}`);
    console.log(`Maior valor de faturamento: ${maiorFaturamento.toFixed(2)}`);
    console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
}

calcularFaturamento();
