const container = document.querySelector('.container');
const sizeBtn = document.getElementById('sizeBtn');
const clearBtn = document.getElementById('clearBtn');

sizeBtn.addEventListener('click', getGridSize);
clearBtn.addEventListener('click', clearGrid);

function getGridSize() {
    let gridSize = prompt("Enter size: ");
    createGrid(gridSize);

    let gridSquare = document.querySelectorAll(".grid-square");

    gridSquare.forEach((square) => {
        square.addEventListener("mouseover", changeColor);
    });
}

function createGrid(size) {
    container.innerHTML = "";

    for(let i = 0; i < size; i++) {
        let col = document.createElement('div');
        col.classList.add('col');
        
        for(let j = 0; j < size; j++) {
            let row = document.createElement('div');
            row.classList.add('grid-square');
            row.textContent = `${j + 1}`;
            col.appendChild(row);
        }
        container.appendChild(col);
    }
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