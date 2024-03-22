function decimalToBinary() {
    var decimalInput = document.getElementById("decimal").value;
    var decimalNumber = parseInt(decimalInput);

    if (isNaN(decimalNumber)) {
        alert("Please enter a valid decimal number.");
        return;
    }

    var binary = decimalNumber.toString(2);

    var result = {
        binary: binary,
    };

    binaryResult(result);
}
function decimalToOctal() {
    var decimalInput = document.getElementById("decimal").value;
    var decimalNumber = parseInt(decimalInput);

    if (isNaN(decimalNumber)) {
        alert("Please enter a valid decimal number.");
        return;
    }

    var octal = decimalNumber.toString(8);

    var result = {
        octal: octal,
    };

    octalResult(result);
}
function decimalToHexadecimal() {
    var decimalInput = document.getElementById("decimal").value;
    var decimalNumber = parseInt(decimalInput);

    if (isNaN(decimalNumber)) {
        alert("Please enter a valid decimal number.");
        return;
    }

    var hexadecimal = decimalNumber.toString(16).toUpperCase();

    var result = {
        hexadecimal: hexadecimal
    };

    hexadecimalResult(result);
}

function binaryResult(result) {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `Binary: ${result.binary}`;
}
function octalResult(result) {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `Octal: ${result.octal}`;
}
function hexadecimalResult(result) {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `Hexadecimal: ${result.hexadecimal}`;
}