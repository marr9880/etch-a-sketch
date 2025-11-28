const header = document.querySelector(".header");
header.style.display = "flex";
header.style.alignItems = "center";
header.style.justifyContent = "center";

const container = document.querySelector(".grid-container");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "600px";
container.style.height = "600px";
container.style.alignItems = "center";
container.style.justifyContent = "center";

let gridSize = 16;

function createGridItem() {
    const div = document.createElement("div");
    let divHeight = 600 / gridSize;
    let divWidth = 600 / gridSize;
    div.classList.add("grid-item");
    div.style.height = `${divHeight}px`;
    div.style.width = `${divWidth}px`;
    div.style.display = "flex";

    container.appendChild(div);
};

function createGrid() {
    for (let i = 0; i < (gridSize * gridSize); i++) {
        createGridItem();
    }
};

createGrid();