const images = [
    "./images/image1.png",
    "./images/image2.png",
    "./images/image3.png"
];

const slider = document.getElementById("slider");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const stopBtn = document.getElementById("stop");

let currentIndex = 0;
let interval;

// Show Image
function showImage(){
    slider.src = images[currentIndex];
}

// Next
nextBtn.onclick = function(){
    currentIndex++;
    if(currentIndex >= images.length){
        currentIndex = 0;
    }
    showImage();
}

// Previous
prevBtn.onclick = function(){
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }
    showImage();
}

// Slide Show
playBtn.onclick = function(){
    clearInterval(interval);
    interval = setInterval(function(){
        currentIndex++;
        if(currentIndex >= images.length){
            currentIndex = 0;
        }
        showImage();
    },2000);
}

// Stop
stopBtn.onclick = function(){
    clearInterval(interval);
}