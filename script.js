const DEFAULT_COLOR = '#333333';
const DEFAULT_MODE = 'black';

const container = document.querySelector('.container');
const sizeBtn = document.getElementById('sizeBtn');
const colorInput = document.getElementById('colorInput');
const blackBtn = document.getElementById('blackBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const clearBtn = document.getElementById('clearBtn');

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;

colorInput.oninput = (e) => {
    currentMode = "color";
    setCurrentColor(e.target.value);
}

rainbowBtn.onclick = () => setCurrentMode('rainbow');
blackBtn.onclick = () => setCurrentMode('black');

sizeBtn.addEventListener('click', getGridSize);
clearBtn.addEventListener('click', clearGrid);

createGrid(16);

function getGridSize() {
    let gridSize = prompt("Enter size: ");

    if(gridSize >= 1 && gridSize <= 100) {
        createGrid(gridSize);
    } else if (gridSize == "") {
        alert("Cancelling...");
    } else { 
        alert("Enter a positive number (1-100)");
        getGridSize();
    }   
}

function createGrid(size) {
    container.textContent = "";

    for(let i = 0; i < size; i++) {
        let col = document.createElement('div');
        col.classList.add('col');
        
        for(let j = 0; j < size; j++) {
            let row = document.createElement('div');
            row.classList.add('grid-square');
            row.classList.add('row');

            let height = 500 / size;
            row.style.height = `${height}px`
            row.style.width = "100%";
            col.appendChild(row);
        }
        container.appendChild(col);
    }

    let gridSquare = document.querySelectorAll(".grid-square");

    gridSquare.forEach((square) => {
        square.addEventListener("mouseover", draw);
    });
    
}

function setCurrentMode(newMode) {
    currentMode = newMode;
}

function setCurrentColor(newColor) {
    currentColor = newColor;
}

function draw(e) {

    if(currentMode === 'rainbow') {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    } else if (currentMode === 'black') {
        e.target.style.backgroundColor = DEFAULT_COLOR;
    } else {
        e.target.style.backgroundColor = currentColor;
    }
    
}

function clearGrid() {
    let gridSquare = document.querySelectorAll('.grid-square');

    gridSquare.forEach((square) => {
        square.style.backgroundColor = "#FFFFFF";
    });
}