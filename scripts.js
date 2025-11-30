const container = document.querySelector(".container");

let gridSize = 16;
    
function createGridItem() {
    const div = document.createElement("div");
    div.classList.add("item");
    let divHeight = 600 / gridSize;
    let divWidth = 600 / gridSize;
    div.style.height = `${divHeight}px`;
    div.style.width = `${divWidth}px`;

    container.appendChild(div);
    };

function createGrid() {
    for (let i = 0; i < (gridSize * gridSize); i++) {
        createGridItem();
    }
};

createGrid();
