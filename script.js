const container = document.querySelector('.container');
const sizeBtn = document.getElementById('sizeBtn');
const clearBtn = document.getElementById('clearBtn');

sizeBtn.addEventListener('click', getGridSize);
clearBtn.addEventListener('click', clearGrid);

createGrid(16);

function getGridSize() {
    let gridSize = parseInt(prompt("Enter size: "));

    if(gridSize >= 1 && gridSize <= 100) {
        createGrid(gridSize);
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
            console.log(row.getAttribute('width'));
            row.textContent = `${j + 1}`;
            col.appendChild(row);
        }
        container.appendChild(col);
    }

    let gridSquare = document.querySelectorAll(".grid-square");

    gridSquare.forEach((square) => {
        square.addEventListener("mouseover", changeColor);
    });
    
}

function changeColor(e) {
    e.target.classList.add('color');
}

function clearGrid() {
    console.log("this function was called");
    let gridSquare = document.querySelectorAll('.grid-square');

    gridSquare.forEach((square) => {
        square.classList.remove('color');
    });
}