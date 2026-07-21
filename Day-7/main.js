// Assignment-1

// Original array
let numbers = [2, 1, 3, 2, 7, 2, 8, 4, 3, 6, 10, 9, 12];

// Ascending sort
console.log("Ascending Order");
console.table(sortAscending(numbers));

// Descending sort
console.log("Descending Order");
console.table(sortDescending(numbers));

// Numbers greater than 5
console.log("Numbers Greater Than 5");
console.log(filterGreaterThanFive(numbers));

// Maximum and Minimum
console.log("Maximum Number:", getMax(numbers));
console.log("Minimum Number:", getMin(numbers));

// Array multiplied by 5
console.log("Multiply By Five");
console.log(multiplyByFive(numbers));

// Remove duplicate values
let uniqueNumbers = removeDuplicates(numbers);
console.log("Unique Numbers");
console.log(uniqueNumbers);

// Count even numbers
console.log("Even Numbers Count");
console.log(countEvenNumbers(numbers));

// Convert array to string separated by *
console.log("Array As String");
console.log(arrayToString(uniqueNumbers));

// Sum array using reduce()
console.log("Sum Using Reduce");
console.log(sumArray(numbers));

// Remove elements from index 2 to 4
console.log("Splice Remove");
console.log(spliceRemove(numbers));

// Replace elements from index 2 to 3
console.log("Splice Replace");
console.log(spliceReplace(numbers));

// Add new elements from index 3
console.log("Splice Add");
console.log(spliceAdd(numbers));



// Assignment-2

// Original array
let numbers = [2, 1, 3, 2, 7, 2, 8, 4, 3, 6, 10, 9, 12];

console.log("Original Array");
console.log(numbers);

console.log("Shuffled Array");
console.log(shuffleArray(numbers));



// Assignment-3

// Number of students
let students = 4;

// Number of courses
let courses = 5;

// Create the 2D array
let grades = createGradesArray(students, courses);

console.log("Students Grades");
console.table(grades);

// Display average for each course
let averages = getCourseAverages(grades);

console.log("Average Grade For Each Course");

for (let i = 0; i < averages.length; i++) {
    console.log(`Course ${i + 1} Average = ${averages[i]}`);
}

// Display total grades for each student
let totals = getStudentTotals(grades);

console.log("Total Grades For Each Student");

for (let i = 0; i < totals.length; i++) {
    console.log(`Student ${i + 1} Total = ${totals[i]}`);
}