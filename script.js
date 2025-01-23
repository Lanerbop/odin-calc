// Calculator

let num1 = undefined;
let num2 = undefined;
let operator;
const CALC_NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

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

function operate(num1, operator, num2) {
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

const buttons = document.querySelectorAll("button");
const screen = document.querySelector("#screen");

const numberButtons = [];
// Populate numberButtons
for (let button of buttons) {
    if (CALC_NUMBERS.includes(button.id)) {
        numberButtons.push(button);
    }
}

