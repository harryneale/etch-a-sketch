const grid = document.querySelector(".container");
const gridSize = document.querySelector("#uInput");


// Set default grid
function defaultGrid() {

    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add("square");
        
        div.addEventListener("mouseenter", function() {
            div.style.backgroundColor = 'black';
        })
        grid.appendChild(div);
    };
};

defaultGrid();