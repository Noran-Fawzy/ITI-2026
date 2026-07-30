const source = document.getElementById("source");
const target = document.getElementById("target");
const dropText = document.querySelector(".drop-text");
let draggedImage = null;
const images = document.querySelectorAll("#source img");

images.forEach(img => {

    // Save the dragged image
    img.addEventListener("dragstart", function () {
        draggedImage = this;
    });
});

// Allow dropping
target.addEventListener("dragover", function (e) {
    e.preventDefault();
});

// Highlight the drop area
target.addEventListener("dragenter", function (e) {
    e.preventDefault();
    target.classList.add("active");
});

// Remove highlight when leaving
target.addEventListener("dragleave", function () {
    target.classList.remove("active");
});

// Drop the image
target.addEventListener("drop", function (e) {
    e.preventDefault();

    // Remove highlight
    target.classList.remove("active");

    // Hide the message after the first drop
    if (dropText) {
        dropText.remove();
    }

    // Move the image
    target.appendChild(draggedImage);

    // Check if the source is empty
    checkEmpty();
});

// Check if all images are moved
function checkEmpty() {
    if (source.querySelectorAll("img").length === 0) {
        source.classList.add("empty");
    }
}