function calcularSalario() {

    // Puxando informações de entrada do formulário
    let salarioBruto = document.querySelector("#salario_bruto").value;
    let dependentes = document.querySelector("#dependentes").value;

    let inss = 0;
   
    let limiteFaixa1 = 1320;
    let limiteFaixa2 = 2571.29;
    let limiteFaixa3 = 3856.94;
    let limiteFaixa4 = 7507.49;

    let valorFaixa1 = limiteFaixa1 * 0.075;
    let valorFaixa2 = (limiteFaixa2 - limiteFaixa1) * 0.09;
    let valorFaixa3 = (limiteFaixa3 - limiteFaixa2) * 0.12;
    
    if (salarioBruto <= 1302.00) {
        inss = 0.075 * salarioBruto;
    } else if (salarioBruto <= 2571.29) {
        inss = valorFaixa1 + ((salarioBruto - limiteFaixa1) * 0.09);
    } else if (salarioBruto <= 3856.94) {
        inss = valorFaixa1 + valorFaixa2 + ((salarioBruto - limiteFaixa2) * 0.12);
    } else if (salarioBruto <= 7507.49) {
        inss = valorFaixa1 + valorFaixa2 + valorFaixa3 + 
        ((salarioBruto - limiteFaixa3) * 0.14);
    } else {
        inss = 0.14 * limiteFaixa4;
    }

    let aliquota = 0;
    let deducao = 0;

    if (salarioBruto > 1903.98) {
        if (salarioBruto <= 2826.65) {
            aliquota = 0.075;
            deducao = 142.80;
        } else if (salarioBruto <= 3751.05) {
            aliquota = 0.15;
            deducao = 354.80;
        } else if (salarioBruto <= 4664.68) {
            aliquota = 0.225;
            deducao = 636.13;
        } else if (salarioBruto > 4664.68) {
            aliquota = 0.30;
            deducao = 869.36;
        }
    }

    let baseCalculoIRRF = salarioBruto - inss - (dependentes * 189.59);
    let irrf = (baseCalculoIRRF * aliquota) - deducao;

    if (irrf < 0) {
        irrf = 0;
    }

    let salarioLiquido = salarioBruto - (irrf + inss);

    alert(`
        INSS: R$ ${inss.toFixed(2)}
        IRRF: R$ ${irrf.toFixed(2)}
        Salário líquido: R$ ${salarioLiquido.toFixed(2)}
    `);

    // Imprimindo resultados no HTML
    // let valorINSS = document.querySelector("#valor_inss");
    // valorINSS.textContent = "R$ " + parseFloat(inss.toFixed(2));

    // let valorIRRF = document.querySelector("#imposto_renda");
    // valorIRRF.textContent = "R$ " + parseFloat(irrf.toFixed(2));
  
    // let valorSalarioLiquido = document.querySelector("#resultado_salario_liquido");
    // valorSalarioLiquido.textContent = "R$ " + parseFloat(salarioLiquido.toFixed(2));

}