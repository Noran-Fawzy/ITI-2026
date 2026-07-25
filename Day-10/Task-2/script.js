const container = document.getElementById("container");
const boxes = document.querySelectorAll(".box");
boxes.forEach(function(box){
    addClickEvent(box);
});
function addClickEvent(box){
    box.onclick = function () {
        
        // Create a copy of the clicked div
        const newBox = box.cloneNode(true);

        // Make the copied div clickable
        addClickEvent(newBox);

        // Add the copied div to the end
        container.appendChild(newBox);

        // Disable clicking on the original div
        box.onclick = null;
    };
}