
const displayPara = document.querySelector("#display-para");
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button")
const clearButton = document.querySelector("#button-clear");
const equalsButton = document.querySelector("#button-equals");

clearButton.addEventListener(("click") , (e) => {
    displayPara.textContent = "";
});

equalsButton.addEventListener(("click"), (e) => {;

    let displayArray = displayPara.textContent.split(" ");
    displayPara.textContent = calculate(displayArray);
});

numberButtons.forEach((button) => {
    button.addEventListener(("click"), (e) => {
        displayPara.textContent += button.textContent;
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener(("click"), (e) => {
        displayPara.textContent += button.textContent;
    });
});

// ~~~~~~~~ FUNCTIONS ~~~~~~~~

function calculate(displayArray) {

    let result = 0;

    while (displayArray.length > 1) {
        result = operate(displayArray[0], displayArray[1], displayArray[2]);
        displayArray.splice(0, 3, result);
    }

    console.log(`Calculated ${displayArray}`)

    return displayArray;
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

function operate(operandOne, operator, operandTwo) {

    let result = 0;

    switch (operator) {
        case "+":
            result = add(+operandOne, +operandTwo);
            break;
        case "−":
            result = subtract(+operandOne, +operandTwo);
            break;
        case "×":
            result = multiply(+operandOne, +operandTwo);
            break;
        case "÷":
            result = divide(+operandOne, +operandTwo);
    }

    return Math.round(result * 100) / 100;
}
