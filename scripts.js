let sketchArea = document.querySelector("#sketch-area");
const sketchAreaSize = 600;
let gridSizeInput = prompt("Enter a number from 1 - 100");
let gridSize = Number(gridSizeInput);
console.log(gridSize);

function createGrid() {
    let gridItem = document.createElement("div");
    gridItem.classList.add("grid-square");
    gridItem.style.height = `${(sketchAreaSize / gridSize)-2}px`;
    gridItem.style.width = `${(sketchAreaSize / gridSize)-2}px`;

    sketchArea.appendChild(gridItem);

    gridItem.addEventListener("mouseenter", function() {
        gridItem.style.backgroundColor = "black";
    });
};

for (i = 0; i < gridSize*gridSize; i++) {
    createGrid();
};

const showGrid = document.querySelector("#grid-show");
const removeGrid = document.querySelector("#grid-remove");
const changeGridSize = document.querySelector("#grid-size");
const resetGrid = document.querySelector("#reset");
const gridSquares = document.querySelectorAll(".grid-square");

resetGrid.addEventListener("click", function(){
    gridSquares.forEach(function(square) {
        square.style.backgroundColor = "white";
    });
});

showGrid.addEventListener("click", function(){
    gridSquares.forEach(function(square) {
        square.style.borderColor = "black";
    });
});

removeGrid.addEventListener("click", function(){
    gridSquares.forEach(function(square) {
        square.style.borderColor = "white";
    });
});


