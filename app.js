const grid = document.querySelector(".container");
const gridSize = document.querySelector("#uInput");
const go = document.querySelector(".goBtn");
const reset = document.querySelector("#resetBtn");


// Set default grid
function defaultGrid() {

    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add("square");
        grid.appendChild(div);
    }
};

