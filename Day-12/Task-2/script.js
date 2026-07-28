// Select Elements
const cards = document.querySelectorAll(".card");
const content = document.querySelector(".content");
const gallery = document.querySelector(".gallery");
const title = document.getElementById("title");
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");

// Overlay
const overlay = document.createElement("div");
overlay.classList.add("overlay");
document.body.appendChild(overlay);

// Hover Effect
content.addEventListener("mouseenter", function () {
    content.classList.add("move");
});

content.addEventListener("mouseleave", function () {
    content.classList.remove("move");
});

// Click On Image
cards.forEach(function (card) {
    card.addEventListener("click", function () {
        // Remove old active image
        cards.forEach(function (img) {
            img.classList.remove("active");
        });
        // Active image
        card.classList.add("active");
        // Show Overlay
        overlay.classList.add("show");
        // Fade other images
        gallery.classList.add("hide");
        // Move content
        content.classList.add("move");
        // Show Text
        title.textContent = card.dataset.title;
        text2.textContent = card.dataset.desc;
        // Return after 3 seconds
        setTimeout(function () {
            card.classList.remove("active");
            overlay.classList.remove("show");
            gallery.classList.remove("hide");
            content.classList.remove("move");
            title.textContent = "";
            text2.textContent = "";
            text1.textContent =
                "Click any image to show its information.";
        }, 3000);
    });
});