function calcularNota(event) {
    // Previnindo comportamento padrão da página
    event.preventDefault();

    // Puxando informações de entrada do formulário
    let notaLinguagens = document.querySelector("#linguagens").value;
    let notaMatematica = document.querySelector("#matematica").value;
    let notaHumanas = document.querySelector("#humanas").value;
    let notaNatureza = document.querySelector("#natureza").value;
    let notaRedacao = document.querySelector("#redacao").value;

    // Pesos de cada disciplina
    const pesoLinguagens = 1;
    const pesoMatematica = 1;
    const pesoCienciasHumanas = 1.5;
    const pesoCienciasNatureza = 1.5;
    const pesoRedacao = 3;

    // Cálculo das notas ponderadas
    const notaPonderadaLinguagens = notaLinguagens * pesoLinguagens;
    const notaPonderadaMatematica = notaMatematica * pesoMatematica;
    const notaPonderadaCienciasHumanas = notaHumanas * pesoCienciasHumanas;
    const notaPonderadaCienciasNatureza = notaNatureza * pesoCienciasNatureza;
    const notaPonderadaRedacao = notaRedacao * pesoRedacao;

    // Cálculo da nota final
    const notaFinal = (
    notaPonderadaLinguagens +
    notaPonderadaMatematica +
    notaPonderadaCienciasHumanas +
    notaPonderadaCienciasNatureza +
    notaPonderadaRedacao
    ) / (pesoLinguagens + pesoMatematica + pesoCienciasHumanas + pesoCienciasNatureza + pesoRedacao);

    console.log("Nota Final do ENEM: " + notaFinal);
    
    elementoResultadoNota = document.querySelector("#resultado_nota");
    elementoResultadoNota.innerHTML = notaFinal.toFixed(2);
}