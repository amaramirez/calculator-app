const numbers = document.querySelector(".numbers");
const operators = document.querySelector(".operators");
const result = document.querySelector(".result");
const equal = document.querySelector(".equal");

let numberOne = null;
let numberTwo = null;
let operation = "+";
let firstNumberSet = false;

numbers.addEventListener('mouseover', (event) => {
    // if (numberOne === null) {
    //     numberOne = Number(event.target.innerText);
    //     result.innerText = `${numberOne} ${operation} ${numberTwo}`
    // } else if (numberTwo === null) {
    //     numberTwo = Number(event.target.innerText);
    //     result.innerText = `${numberOne} ${operation} ${numberTwo}`
    // }
})

operators.addEventListener("click", (event) => {
    operation = event.target.innerText;
    if (event.target.tagName === "BUTTON") {
        result.innerText = `${numberOne} ${operation} ${numberTwo}`
    }
})

equal.addEventListener("click", (event) => {
    if (!numberOne || !numberTwo) {
        alert("please choose two numbers");
        return;
    }
    let product = 0;
    if (operation === "+") {
        result.innerText = numberOne + numberTwo;
    } else if (operation === "-") {
        result.innerText = numberOne - numberTwo;
    } else if (operation === "/") {
        result.innerText = numberOne / numberTwo;
    } else if (operation === "*") {
        result.innerText = numberOne * numberTwo;
    }
})

