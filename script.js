const displayPara = document.querySelector("#display-para");
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button")
const clearButton = document.querySelector("#button-clear");
const equalsButton = document.querySelector("#button-equals");

let operators = ["+", "", "×", "÷"];
let operatorActive = false;

clearButton.addEventListener("click", clear);
equalsButton.addEventListener("click", evaluate);

numberButtons.forEach((button) => {
    button.addEventListener(("click"), () => addNumber(button.textContent));
});

operatorButtons.forEach((button) => {
    button.addEventListener(("click"), () => addOperator(button.textContent));
});

function clear() {
    displayPara.textContent = "";
    operatorActive = false;
}

function addNumber(number) {
    // concatenates to the current number without any empty spaces
    displayPara.textContent += number;
}

function addOperator(operator) {
    if (operatorActive === true) {
        if (isOperator(displayPara.textContent.slice(-1))) return;

        evaluate();
        displayPara.textContent += operator;
        operatorActive = true;
    } else {
        displayPara.textContent += operator;
        operatorActive = true;
    }
}

function isOperator(symbol) {
    return operators.includes(symbol.trim());
}

function restoreFirstDigit() {
    displayPara.textContent = displayPara.textContent.split(" ")[0];
    operatorActive = false;
}

function evaluate() {
    if (!operatorActive) return;
    let evaluationData = displayPara.textContent.split(" ");
    if (evaluationData.length > 3 && isOperator(evaluationData[1])) {
        restoreFirstDigit();
        return;
    }

    let result = operate(evaluationData[0], evaluationData[1], evaluationData[2]);
    if (result === undefined) {
        alert("Can't divide by 0!")
        restoreFirstDigit();
        return;
    }
    evaluationData.splice(0, 3, result);
    displayPara.textContent = result;
    operatorActive = false;
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
            if (+operandOne === 0 || +operandTwo === 0) {
                return;
            }
            result = divide(+operandOne, +operandTwo);
    }

    return Math.round(result * 100) / 100;
}
