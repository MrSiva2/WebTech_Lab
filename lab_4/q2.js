const draggableItems = document.querySelectorAll('[draggable="true"]');
const dropZone = document.getElementById("dropZone");

// When dragging starts
draggableItems.forEach(item => {
    item.addEventListener("dragstart", function(event) {
        event.dataTransfer.setData("text", event.target.id);
    });
});

// Allow drop
dropZone.addEventListener("dragover", function(event) {
    event.preventDefault();
});

// When item is dropped
dropZone.addEventListener("drop", function(event) {
    event.preventDefault();

    const data = event.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);

    dropZone.appendChild(draggedElement);
});
