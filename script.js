const calcular = document.getElementById('calcular');


function poupanca () {
    const nome = document.getElementById('nome').value;
    const p = document.getElementById('valorMensal').value;
    const i = document.getElementById('juros').value;
    const n = document.getElementById('parcelas').value;
    const VF = 0;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && p !== '' && i !== '' && n !== '') {
        const VF = (p*((((1+(i/100))**n)-1) / (i/100))).toFixed(2);

        resultado.textContent = `Olá, ${nome}! Se você aplicar R$${p}, a taxa de juros de ${i}% ao mês, durante ${n} meses, acumulará uma poupança de R$${VF}`;


    }else {
        resultado.textContent = 'Para calcular o valor das suas prestações e a situação da poupança, preencha todos os campos.';
    }

}
calcular.addEventListener('click', poupanca);
