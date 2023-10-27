function calcularGasolina(event) {
    // Previnindo comportamento padrão da página
    event.preventDefault();

    // Puxando informações de entrada do formulário
    let distancia = document.querySelector("#distancia").value;
    let consumo = document.querySelector("#consumo").value;
    let preco = document.querySelector("#preco").value;

    // Calculando a quantidade de gasolina necessária
    const quantidadeGasolina = distancia / consumo;

    // Calculando o custo da viagem
    const custoViagem = quantidadeGasolina * preco;

    // Exibindo os resultados
    console.log(`Quantidade de gasolina necessária: ${quantidadeGasolina} litros`);
    console.log(`Custo da viagem: R$${custoViagem.toFixed(2)}`);

    elementoResultadoGasolina = document.querySelector("#resultado_gasolina_litros");
    elementoResultadoCusto = document.querySelector("#resultado_custo");

    elementoResultadoGasolina.innerHTML = quantidadeGasolina;
    elementoResultadoCusto.innerHTML = "R$ " + custoViagem.toFixed(2);

}