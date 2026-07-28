// Select the box
const box = document.getElementById("box");
// Start animation
document.getElementById("start").onclick = function () {
    box.classList.add("move");
};
// Stop animation
document.getElementById("stop").onclick = function () {
    box.classList.remove("move");
};