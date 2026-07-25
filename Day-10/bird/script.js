const bird = document.getElementById("bird");

// Start from the right side
let x = window.innerWidth - bird.offsetWidth; 
// Move left
let speed = -5; 
// Face the current direction
bird.style.transform = "scaleX(-1)";

function moveBird() {
    x += speed;
    bird.style.left = x + "px";
    // Change direction at the left edge
    if (x <= 0) {
        speed = 5;
        bird.style.transform = "scaleX(1)";
    }
    // Change direction at the right edge
    if (x >= window.innerWidth - bird.offsetWidth) {
        speed = -5;
        bird.style.transform = "scaleX(-1)";
    }
    // Keep the animation running
    requestAnimationFrame(moveBird);
}
moveBird();