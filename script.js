const grid = document.querySelector(".container");
const gridSize = document.querySelector(".uInput");
const go = document.querySelector("#goBtn");
const clearBoard = document.querySelector("#resetBtn");
const blkBtn = document.querySelector("#originalColors");
const rbowBtn = document.querySelector("#rainbowColors");
const ersBtn = document.querySelector("#eraser");
let squareClass;

// Set default grid
function defaultGrid() {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add("square");
        grid.appendChild(div);
    }
};

function blackColor() {
    squareClass = Object.values(document.getElementsByClassName("square"));
    squareClass.forEach(function(gridSquare) {
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.classList.add("square-color");
            gridSquare.classList.remove("square-eraser");
            gridSquare.style.removeProperty("background-color");
        });
    });
}

function initialGrid() {
    defaultGrid()
    blackColor();
}

initialGrid();

// Add reset function to clear board and reset default grid size
clearBoard.addEventListener("click", function() {
    grid.innerHTML = '';
    gridSize.value = '';
    grid.style.setProperty("grid-template-columns",`repeat(16, 2fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
    grid.animated;
    initialGrid();
});

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
        grid.appendChild(div);
    };
    blackColor();
    gridSize.value = '';
};

// Add event listener to set new grid
go.addEventListener("click", newGrid);

function randomColour() {
    return `rgb(${Math.round(Math.random() * 256)}, ${Math.round(Math.random() * 256)}, ${Math.round(Math.random() * 256)})`;
}

function randomRGB() {
    squareClass = Object.values(document.getElementsByClassName("square"));
    squareClass.forEach(function(gridSquare) {
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.style.cssText = `background-color: ${randomColour()}`;
            gridSquare.classList.remove("square-eraser");
            gridSquare.classList.remove("square-color");
        });
    });
}

function eraseDrawing() {
    squareClass = Object.values(document.getElementsByClassName("square"));
    squareClass.forEach(function(gridSquare) {
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.classList.add("square-eraser");
            gridSquare.classList.remove("square-color");
            gridSquare.style.removeProperty("background-color");
        });
    });
}

/* div.addEventListener("mouseenter", function() {
            div.style.backgroundColor = 'black';
        }) */
        
        
rbowBtn.addEventListener('click', () => {
    randomRGB();
});
        
blkBtn.addEventListener('click', () => {
    blackColor();
});

ersBtn.addEventListener('click', () => {
    eraseDrawing();
});





