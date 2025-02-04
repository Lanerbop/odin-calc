// Calculator

let num1 = undefined;
let num2 = undefined;
let operator = undefined;
const CALC_NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const OPERATORS = ["+", "-", "*", "/"];
const buttons = document.querySelectorAll("button");
const screen = document.querySelector("#screen");
const acButton = document.querySelector("#ac");
const equalButton = document.querySelector("#equals");
const decimalButton = document.querySelector("#decimal");

// Populate numberButtons
const numberButtons = [];
for (let button of buttons) {
    if (CALC_NUMBERS.includes(button.id)) {
        numberButtons.push(button);
    }
}

// Populate operatorButtons
const operatorButtons = [];
for (let button of buttons) {
    if (OPERATORS.includes(button.id)) {
        operatorButtons.push(button);
    }
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (Number(num2) === 0) {
        return screen.textContent = "Brah.";
    }
    return num1 / num2;
}

function operate() {
    num1 = Number(num1);
    num2 = Number(num2);
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            throw new Error("Invalid operator!");
    }
}

// Add number button functionality
for (let button of numberButtons) {
    button.addEventListener("click", () => {
        if (!operator) {
            // Building num1
            num1 = !num1 ? button.id : num1.concat(button.id);
            screen.textContent = num1;
        } else {
            // Building num2
            num2 = !num2 ? button.id : num2.concat(button.id);
            screen.textContent = `${num1}${operator}${num2}`;
        }
    });
}

// Clear the screen and set variables to undefined
acButton.addEventListener("click", () => {
    screen.textContent = "";
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
});

// Change the operator variable to the clicked button
for (let button of operatorButtons) {
    button.addEventListener("click", () => {
        if (num2) {
            operator = button.id;
            screen.textContent = `${num1}${operator}${num2}`;
        } else {
        // num2 has not been set yet
            operator = button.id;
            screen.textContent = `${num1}${operator}`;
        }
    });
}

equalButton.addEventListener("click", () => {
    if (num1 && num2 && operator) {
        screen.textContent = Math.round(operate(operator) * 100) / 100;
        num1 = screen.textContent;
        num2 = undefined;
        operator = undefined;
    } else {
        throw new Error("Not all variables are defined.");
    }
});

decimalButton.addEventListener("click", () => {
    if (num1 && operator && !num2) {
        num2 = "0.";
        screen.textContent = `${num1}${operator}${num2}`;
    } else if (num1 && operator && !num2.includes(".")) {
        num2 = num2.concat(".");
        screen.textContent = `${num1}${operator}${num2}`;
    } else if (!num1) {
        num1 = "0.";
        screen.textContent = num1;
    } else if (num1 && !operator && !num1.includes(".")) {
        num1 = num1.concat(".");
        screen.textContent = num1;
    }
});