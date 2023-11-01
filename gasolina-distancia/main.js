function calcularGasolina() {
  let consumo = document.querySelector("#consumo").value;
  let preco = document.querySelector("#preco").value;
  let distancia = document.querySelector("#distancia").value;

  let custoViagem = (distancia / consumo) * preco;

  alert("O custo é: R$ " + custoViagem.toFixed(2));

  console.log(custoViagem);
}
