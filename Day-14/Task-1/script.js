// Get the video element
const video = document.getElementById("videoPlayer");

// Get all sidebar buttons
const buttons = document.querySelectorAll(".sidebar button");
function changeVideo(src, button) {
    video.src = src;
    video.load();
    video.play();

    // Remove rotate class from all buttons
    buttons.forEach(btn => {
        btn.classList.remove("rotate");
    });

    // Add rotate class again to restart animation
    setTimeout(() => {
        button.classList.add("rotate");
    }, 10);
    
    // Remove rotate class after animation ends
    button.addEventListener("transitionend", function () {
        button.classList.remove("rotate");
    }, { once: true });
}