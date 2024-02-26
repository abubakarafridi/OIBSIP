const degreeInput = document.getElementById('Degrees');
const inputType = document.getElementById('Type');
const result = document.getElementById('Result');

function convertTemperature() {
    const degrees = parseFloat(degreeInput.value);
    const type = inputType.value;
    let unitSymbol;

    let convertValue;
    if(type === 'Fahrenheit') {
        convertValue = (degrees * 9/5 + 32);
        unitSymbol = 'F';
    } else if(type === 'Celsius') {
        convertValue = (degrees - 32) * 5/9;
        unitSymbol = 'C';
    }

    result.value = convertValue.toFixed(4) + unitSymbol;
}

button.addEventListener('click', convertTemperature);