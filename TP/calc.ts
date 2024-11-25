let currentOperation: string | null = null;
let firstValue: number | null = null;
let secondValue: number | null = null;

function clearResult() {
    (document.getElementById('result')as HTMLInputElement).value = "";
    currentOperation = null;
    firstValue = null;
    secondValue = null;
}

function appendToResult(value: string) {
    const resultInput = document.getElementById('result') as HTMLInputElement;
    resultInput.value += value;
}

function setOperation(operation: string) {
    const resultInput = document.getElementById('result') as HTMLInputElement;
    firstValue = parseFloat(resultInput.value);
    currentOperation = operation;
    resultInput.value = '';
}

function calculateResult() {
    const resultInput = document.getElementById('result') as HTMLInputElement;
    secondValue = parseFloat(resultInput.value);

    if (firstValue === null || secondValue === null || currentOperation === null) {
        return;
    }

    let result: number;

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

function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function divide(a: number, b: number): number {
    if (b === 0) {
        alert('Division par zéro impossible');
        return 0;
    }
    return a / b;
}