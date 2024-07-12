document.addEventListener('DOMContentLoaded', function() {
    toggleInputs();
});

function calculate() {
    const operation = document.getElementById('operation').value;
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');
    let result;

    resultDiv.innerText = '';
    errorDiv.innerText = '';

    try {
        if (operation === 'exp') {
            const baseNumber = parseFloat(document.getElementById('base-number').value);
            const expNumber = parseFloat(document.getElementById('exp-number').value);

            if (isNaN(baseNumber) || isNaN(expNumber)) {
                throw new Error('Por favor, insira valores válidos para a base e o expoente.');
            }
            result = `${baseNumber}^${expNumber} = ${Math.pow(baseNumber, expNumber).toFixed(4)}`;

        } else if (operation === 'log') {
            const logBaseNumber = parseFloat(document.getElementById('log-base-number').value);
            const logNumber = parseFloat(document.getElementById('log-number').value);

            if (isNaN(logBaseNumber) || isNaN(logNumber) || logBaseNumber <= 0 || logNumber <= 0) {
                throw new Error('Por favor, insira valores válidos e positivos para a base e o valor do logaritmo.');
            }
            result = `log_${logNumber}(${logBaseNumber}) = ${(Math.log(logBaseNumber) / Math.log(logNumber)).toFixed(4)}`;
        }
        resultDiv.innerText = result;
    } catch (error) {
        errorDiv.innerText = error.message;
    }
}

function clearResult() {
    document.getElementById('result').innerText = '';
    document.getElementById('error').innerText = '';
}

function toggleInputs() {
    const operation = document.getElementById('operation').value;
    const expInputs = document.getElementById('exp-inputs');
    const logInputs = document.getElementById('log-inputs');

    if (operation === 'exp') {
        expInputs.style.display = 'block';
        logInputs.style.display = 'none';
    } else if (operation === 'log') {
        expInputs.style.display = 'none';
        logInputs.style.display = 'block';
    }
}
