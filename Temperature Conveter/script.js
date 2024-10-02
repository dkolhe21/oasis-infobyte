document.getElementById('convertButton').addEventListener('click', function() {
    const inputTemperature = parseFloat(document.getElementById('temperatureInput').value);
    const selectedUnit = document.querySelector('input[name="unit"]:checked').value;
    const resultArea = document.getElementById('result');

    if (isNaN(inputTemperature)) {
        resultArea.textContent = "Please enter a valid number.";
        return;
    }

    let celsius, fahrenheit, kelvin;

    // Convert input temperature to Celsius
    if (selectedUnit === "Celsius") {
        celsius = inputTemperature;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = celsius + 273.15;
    } else if (selectedUnit === "Fahrenheit") {
        fahrenheit = inputTemperature;
        celsius = (fahrenheit - 32) * 5/9;
        kelvin = celsius + 273.15;
    } else if (selectedUnit === "Kelvin") {
        kelvin = inputTemperature;
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
    }

    resultArea.innerHTML = `
        ${inputTemperature}° ${selectedUnit} is equivalent to:<br>
        ${celsius.toFixed(2)}° Celsius<br>
        ${fahrenheit.toFixed(2)}° Fahrenheit<br>
        ${kelvin.toFixed(2)}° Kelvin
    `;
});
