function calcularGasolina() {

    // Puxando informações de entrada do formulário
    let distancia = document.querySelector("#distancia").value;
    let consumo = document.querySelector("#consumo").value;
    let preco = document.querySelector("#preco").value;

    // Calculando a quantidade de gasolina necessária
    let quantidadeGasolina = distancia / consumo;

    // Calculando o custo da viagem
    let custoViagem = quantidadeGasolina * preco;

    // Exibindo os resultados
    
    alert(`
        Quantidade Gasolina: ${quantidadeGasolina.toFixed(2)}
        Custo da viagem: R$ ${custoViagem.toFixed(2)}
    `);

    // Imprimindo resultados no HTML
    // console.log(`Quantidade de gasolina necessária: ${quantidadeGasolina} litros`);
    // console.log(`Custo da viagem: R$${custoViagem.toFixed(2)}`);

    // elementoResultadoGasolina = document.querySelector("#resultado_gasolina_litros");
    // elementoResultadoCusto = document.querySelector("#resultado_custo");

    // elementoResultadoGasolina.innerHTML = quantidadeGasolina;
    // elementoResultadoCusto.innerHTML = "R$ " + custoViagem.toFixed(2);

}