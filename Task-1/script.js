// A) Find all images

// First way
let images1 = document.getElementsByTagName("img");
console.log("Images using getElementsByTagName:");
console.log(images1);

// Second way
let images2 = document.querySelectorAll("img");
console.log("Images using querySelectorAll:");
console.log(images2);


// B) Find all td in second row of second table

let secondTable = document.getElementById("table2");
let secondRow = secondTable.rows[1];
let cells = secondRow.cells;

console.log("Cells in second row:");
console.log(cells);


// C) Find elements with class sport

// First way
let sports1 = document.getElementsByClassName("sport");
console.log("Sports using getElementsByClassName:");
console.log(sports1);

// Second way
let sports2 = document.querySelectorAll(".sport");
console.log("Sports using querySelectorAll:");
console.log(sports2);