var currentOperation = null;
var firstValue = null;
var secondValue = null;
function clearResult() {
    document.getElementById('result').value = "";
    currentOperation = null;
    firstValue = null;
    secondValue = null;
}
function appendToResult(value) {
    var resultInput = document.getElementById('result');
    resultInput.value += value;
}
function setOperation(operation) {
    var resultInput = document.getElementById('result');
    firstValue = parseFloat(resultInput.value);
    currentOperation = operation;
    resultInput.value = '';
}
function calculateResult() {
    var resultInput = document.getElementById('result');
    secondValue = parseFloat(resultInput.value);
    if (firstValue === null || secondValue === null || currentOperation === null) {
        return;
    }
    var result;
    switch (currentOperation) {
        case '+':
            result = add(firstValue, secondValue);
            break;
        case '-':
            result = subtract(firstValue, secondValue);
            break;
        case '*':
            result = multiply(firstValue, secondValue);
            break;
        case '/':
            result = divide(firstValue, secondValue);
            break;
        default:
            return;
    }
    resultInput.value = result.toString();
    currentOperation = null;
}
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        alert('Division par zéro impossible');
        return 0;
    }
    return a / b;
}
