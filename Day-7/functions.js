// Assignment-1

// Sort array in ascending order
function sortAscending(arr) {
    return [...arr].sort((a, b) => a - b);
}

// Sort array in descending order
function sortDescending(arr) {
    return [...arr].sort((a, b) => b - a);
}

// Return numbers greater than 5
function filterGreaterThanFive(arr) {
    return arr.filter(num => num > 5);
}

// Return maximum number
function getMax(arr) {
    return Math.max(...arr);
}

// Return minimum number
function getMin(arr) {
    return Math.min(...arr);
}

// Create a new array with every element multiplied by 5
function multiplyByFive(arr) {
    return Array.from(arr, num => num * 5);
}

// Remove duplicate values
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Count even numbers
function countEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0).length;
}

// Convert array to string separated by *
function arrayToString(arr) {
    return arr.join("*");
}

// Sum all array elements using reduce()
function sumArray(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

// Remove elements from index 2 to index 4
function spliceRemove(arr) {
    let copy = [...arr];
    copy.splice(2, 3);
    return copy;
}

// Remove elements from index 2 to index 3 and insert new elements
function spliceReplace(arr) {
    let copy = [...arr];
    copy.splice(2, 2, 40, 50, 60, 70, 80);
    return copy;
}

// Add new elements starting from index 3
function spliceAdd(arr) {
    let copy = [...arr];
    copy.splice(3, 0, 100, 200, 300);
    return copy;
}



// Assignment-2

// Shuffle array elements randomly
function shuffleArray(arr) {
    // Create a copy of the original array
    let shuffled = [...arr];
    // Loop from the last element to the first
    for (let i = shuffled.length - 1; i > 0; i--) {
        // Generate a random index
        let randomIndex = Math.floor(Math.random() * (i + 1));
        // Swap the current element with the random element
        [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
    }
    return shuffled;
}


// Assignment-3

// Create a 2D array and fill it with grades using prompt
function createGradesArray(studentCount, courseCount) {
    let grades = [];
    // Loop through students
    for (let i = 0; i < studentCount; i++) {
        grades[i] = [];
        // Loop through courses
        for (let j = 0; j < courseCount; j++) {
            grades[i][j] = Number(
                prompt(`Enter grade for Student ${i + 1} in Course ${j + 1}`)
            );
        }
    }
    return grades;
}

// Calculate average grade for each course
function getCourseAverages(grades) {
    let averages = [];
    let students = grades.length;
    let courses = grades[0].length;
    // Loop through courses
    for (let j = 0; j < courses; j++) {
        let sum = 0;
        // Sum grades of all students in this course
        for (let i = 0; i < students; i++) {
            sum += grades[i][j];
        }
        averages.push(sum / students);
    }
    return averages;
}

// Calculate total grades for each student
function getStudentTotals(grades) {
    let totals = [];
    // Loop through students
    for (let i = 0; i < grades.length; i++) {
        let sum = 0;
        // Sum all courses for one student
        for (let j = 0; j < grades[i].length; j++) {
            sum += grades[i][j];
        }
        totals.push(sum);
    }
    return totals;
}
