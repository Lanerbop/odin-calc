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
    if (num2 === 0) {
        throw new Error("Cannot divide by zero!");
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
        operator = button.id;
        screen.textContent += operator;
    });
}

// on "=" button, we call the operate function,
// set num 1 to the result and set num2 & operator to undefined

equalButton.addEventListener("click", () => {
    screen.textContent = operate(operator);
    num1 = screen.textContent;
    num2 = undefined;
    operator = undefined;
});