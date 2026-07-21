// Array of image URLs
let images = [
    "../images/image copy 2.png",
    "../images/image copy.png",
    "../images/image.png"
];

// Get the image element
let slider = document.getElementById("slider");

// Start with the first image
let index = 0;
slider.src = images[index];

// Change the image every second
setInterval(function () {
    index++;
    if (index === images.length) {
        index = 0;
    }
    slider.src = images[index];
}, 1000);