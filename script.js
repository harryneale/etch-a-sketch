const grid = document.querySelector(".container");
const gridSize = document.querySelector(".uInput");
const go = document.querySelector("#goBtn");
const clearBoard = document.querySelector("#resetBtn");

// Set default grid
function defaultGrid() {

    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add("square");
        div.addEventListener("mouseenter", function () {
            div.style.backgroundColor = 'black';
        })
        grid.appendChild(div);
    };
};

// Set new grid size based on user input
function newGrid() {
    grid.innerHTML = "";
    grid.style.setProperty(
        "grid-template-columns",
        `repeat(${gridSize.value}, 2fr)`
    );
    grid.style.setProperty(
        "grid-template-rows",
        `repeat(${gridSize.value}, 2fr)`
    );
    for (let i = 0; i < gridSize.value * gridSize.value; i++) {
        const div = document.createElement('div');
        div.classList.add("square");

        div.addEventListener("mouseenter", function() {
            div.style.backgroundColor = 'black';
        })
        grid.appendChild(div);
    }
};

// Add event listener to set new grid
go.addEventListener("click", newGrid);

// Add reset function to clear board and reset default grid size
clearBoard.addEventListener("click", function() {
    grid.innerHTML = '';
    gridSize.value = '';
    grid.style.setProperty("grid-template-columns",`repeat(16, 2fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
    grid.animated;
    defaultGrid();
});

defaultGrid();