const grid = document.querySelector(".container");
const gridSize = document.querySelector(".uInput");
const go = document.querySelector(".goBtn");
const reset = document.querySelector(".resetBtn");


// Set default grid
function defaultGrid() {

    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add("square");
        grid.appendChild(div);
    }
};

// Update grid with new, user input value
function newGrid() {
    grid.innerHTML = '';
    grid.style.setProperty(
        "grid-template-columns",
        `repeat(${gridSize.value}, 2fr)`
    );
    grid.style.setProperty(
        "grid-template-rows",
        `repeat(${gridSize.value}, 2fr)`
    );
    for (let i = 0; i < gridSize.value * gridSize.value ; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
    }
    console.log(gridSize.value);
};

defaultGrid();

// Changes the class of square from square to color on mouseover
const square = document.querySelector("div");
square.addEventListener("mouseover", function(event) {
    event.target.classList.replace("square", "color");
});

// Add event listener to grid size input
gridSize.addEventListener("change", newGrid);
