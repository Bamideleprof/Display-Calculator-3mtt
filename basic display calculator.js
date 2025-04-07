// Simple calculator is done using onclick
// currentOperation: stores the selected mathematical operation e.g(+,-, *, /)
// firstOperation: stores the first number entered before an operation is performed.
// let display = document.getElementsByClassName("display");
// let display = document.getElementsById("display");

// try, and catch block in javascript is use for error handling .it lets you *try* to run code that
// might throw an error, and *catch* gracefully handle the error instead of crashing the program
let currentInput = '';
 
function appendNumber(value) {
    currentInput += value;
    updateDisplay();
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
    }
    catch {
        currentInput = "Error";
    }
    updateDisplay();
}

function clearDisplay() {
    display.value = "";
    currentInput = '';
    updateDisplay ();
}

function updateDisplay() {
    document.querySelector(".display").innerText = currentInput || "0";
}