function calculate() {
    const baseNumber = parseFloat(document.getElementById('base-number').value);
    const expNumber = parseFloat(document.getElementById('exp-number').value);
    const operation = document.getElementById('operation').value;
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');
    let result;

    resultDiv.innerText = '';
    errorDiv.innerText = '';

    if (operation === 'exp') {
        if (isNaN(baseNumber) || isNaN(expNumber)) {
            errorDiv.innerText = 'Por favor, insira valores válidos para a base e o expoente.';
            return;
        }
        result = `${baseNumber}^${expNumber} = ${Math.pow(baseNumber, expNumber)}`;
    } else if (operation === 'log') {
        if (isNaN(expNumber) || expNumber <= 0) {
            errorDiv.innerText = 'O logaritmo natural não está definido para números menores ou iguais a zero.';
            return;
        }
        result = `ln(${expNumber}) = ${Math.log(expNumber)}`;
    }

    resultDiv.innerText = result;
}

function clearResult() {
    document.getElementById('result').innerText = '';
    document.getElementById('error').innerText = '';
}
