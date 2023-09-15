

const displayPara = document.querySelector("#display-para");
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button")
const clearButton = document.querySelector("#button-clear");
const equalsButton = document.querySelector("#button-equals");

const operators = "+−×÷";

clearButton.addEventListener(("click") , (e) => {
    displayPara.textContent = "";
});

equalsButton.addEventListener(("click"), (e) => {
    calculate();
});

numberButtons.forEach((button) => {
    button.addEventListener(("click"), (e) => {
        displayPara.textContent += +button.textContent;
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener(("click"), (e) => {
        displayPara.textContent += button.textContent;
    });
});


// ~~~~~~~~ FUNCTIONS ~~~~~~~~

function calculate() {
    // loop through all the numbers & operators
    // in displaycontent.textContent and
    // if an operator is found, operate with
    // the number behind & the one in front
    // (until another operator is found)
    // store the result in a variable which
    // substitutes all the operate arguments

    // can find an operator if it's not a number

    let currentResult = 0;
    // for (let i = 0;)
}

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
            return add(+operandOne, +operandTwo)
            break;
        case "−":
            return subtract(+operandOne, +operandTwo);
            break;
        case "×":
            return multiply(+operandOne, +operandTwo);
            break;
        case "÷":
            return divide(+operandOne, +operandTwo);
    }
}