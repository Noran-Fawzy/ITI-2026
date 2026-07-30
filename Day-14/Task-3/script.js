// Get addition inputs and result
const add1 = document.getElementById("add1");
const add2 = document.getElementById("add2");
const addResult = document.getElementById("addResult");

// Get multiplication inputs and result
const mul1 = document.getElementById("mul1");
const mul2 = document.getElementById("mul2");
const mulResult = document.getElementById("mulResult");

// Addition function
function addition() {

    // Convert input values to numbers
    let num1 = Number(add1.value);
    let num2 = Number(add2.value);

    // Display the sum
    addResult.textContent = num1 + num2;
}

// Multiplication function
function multiplication() {

    // Convert input values to numbers
    let num1 = Number(mul1.value);
    let num2 = Number(mul2.value);

    // Display the result
    mulResult.textContent = num1 * num2;
}

// Run addition when input changes
add1.addEventListener("input", addition);
add2.addEventListener("input", addition);

// Run multiplication when input changes
mul1.addEventListener("input", multiplication);
mul2.addEventListener("input", multiplication);