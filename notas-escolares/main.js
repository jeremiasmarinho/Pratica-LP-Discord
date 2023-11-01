function calcularNota() {
  let linguagens = document.querySelector("#linguagens").value;
  let matematica = document.querySelector("#matematica").value;
  let natureza = document.querySelector("#natureza").value;
  let redacao = document.querySelector("#redacao").value;

  let pesoLiguaguem = 1;
  let pesoMatematica = 2;
  let pesoNatureza = 1;
  let pesoRedacao = 2;

  let notaPonderadaLinguagens = linguagens * pesoLiguaguem;
  let notaPonderadaMatematica = matematica * pesoMatematica;
  let notaPonderadaNatureza = natureza * pesoNatureza;
  let notaPonderadaRedacao = redacao * pesoRedacao;

  let notaTotal =
    (notaPonderadaLinguagens +
      notaPonderadaMatematica +
      notaPonderadaNatureza +
      notaPonderadaRedacao) /
    (pesoLiguaguem + pesoMatematica + pesoNatureza + pesoRedacao);

  alert("A nota final é: " + notaTotal).toFixed(2);
}
