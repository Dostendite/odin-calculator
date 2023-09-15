

const displayPara = document.querySelector("#display-para");
const buttons = document.querySelectorAll("button");


buttons.forEach((button) => {
    if (button.id === "button-clear" || button.id === "button-equals") {
        return;
    } else {
        button.addEventListener(("click"), (e) => {
            displayPara.textContent += button.textContent;
        });
    }
});

// = C
// + − × ÷ 
// button-clear button-equals
// ~~~~~~~~ FUNCTIONS ~~~~~~~~

function add(addendOne, addendTwo) {
    return addendOne + addendTwo;
}

function subtract(minuend, subtrahend) {
    return minuend - subtrahend;
}

function multiply(factorOne, factorTwo) {
    return factorOne * factorTwo;
}

function divide(dividend, divisor) {
    return dividend / divisor;
}

const operandOne = 0;
let operator = "";
const operandTwo = 0;

function operate(operandOne, operator, operandTwo) {
    switch (operator) {
        case "+":
            return add(operandOne, operandTwo)
            break;
        case "−":
            return subtract(operandOne, operandTwo);
            break;
        case "×":
            return multiply(operandOne, operandTwo);
            break;
        case "÷":
            return divide(operandOne, operandTwo);
    }
}