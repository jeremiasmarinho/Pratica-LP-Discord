function calcularSalario(event) {
    // Previnindo comportamento padrão da página
    event.preventDefault();

    // Puxando informações de entrada do formulário
    let salarioBruto = document.querySelector("#salario_bruto").value;
    let dependentes = document.querySelector("#dependentes").value;

    let inss = 0;

    if (salarioBruto <= 1302.00) {
        inss = 0.075 * salarioBruto;
    } else if (salarioBruto <= 2571.29) {
        inss = 0.09 * salarioBruto;
    } else if (salarioBruto <= 3856.94) {
        inss = 0.12 * salarioBruto;
    } else if (salarioBruto <= 7507.49) {
        inss = 0.14 * salarioBruto;
    } else {
        inss = 0.14 * 7507.49;
    }

    let valorINSS = document.querySelector("#valor_inss");
    valorINSS.textContent = "R$ " + parseFloat(inss.toFixed(2));

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

    let valorIRRF = document.querySelector("#imposto_renda");
    valorIRRF.textContent = "R$ " + parseFloat(irrf.toFixed(2));
    
    let salarioLiquido = salarioBruto - (irrf + inss);
    let valorSalarioLiquido = document.querySelector("#resultado_salario_liquido");
    valorSalarioLiquido.textContent = "R$ " + parseFloat(salarioLiquido.toFixed(2));

}


