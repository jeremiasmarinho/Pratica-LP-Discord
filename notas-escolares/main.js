function calcularNota() {

    // Puxando informações de entrada do formulário
    let notaLinguagens = document.querySelector("#linguagens").value;
    let notaMatematica = document.querySelector("#matematica").value;
    let notaHumanas = document.querySelector("#humanas").value;
    let notaNatureza = document.querySelector("#natureza").value;
    let notaRedacao = document.querySelector("#redacao").value;

    // Pesos de cada disciplina
    let pesoLinguagens = 1;
    let pesoMatematica = 2;
    let pesoCienciasHumanas = 1;
    let pesoCienciasNatureza = 4;
    let pesoRedacao = 2;

    // Cálculo das notas ponderadas
    let notaPonderadaLinguagens = notaLinguagens * pesoLinguagens;
    let notaPonderadaMatematica = notaMatematica * pesoMatematica;
    let notaPonderadaCienciasHumanas = notaHumanas * pesoCienciasHumanas;
    let notaPonderadaCienciasNatureza = notaNatureza * pesoCienciasNatureza;
    let notaPonderadaRedacao = notaRedacao * pesoRedacao;

    // Cálculo da nota final
    let notaFinal = (
    notaPonderadaLinguagens +
    notaPonderadaMatematica +
    notaPonderadaCienciasHumanas +
    notaPonderadaCienciasNatureza +
    notaPonderadaRedacao
    ) / (pesoLinguagens + pesoMatematica + pesoCienciasHumanas + pesoCienciasNatureza + pesoRedacao);

    alert("Nota Final do ENEM: " + notaFinal);
    
    // Imprimindo resultados no HTML
    // elementoResultadoNota = document.querySelector("#resultado_nota");
    // elementoResultadoNota.innerHTML = notaFinal.toFixed(2);
}