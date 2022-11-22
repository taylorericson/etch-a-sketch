const container = document.querySelector('.container');
const sizeBtn = document.getElementById('sizeBtn');
const clearBtn = document.getElementById('clearBtn');

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
            console.log(row.getAttribute('width'));
            let height = 500 / size;
            row.style.height = `${height}px`
            row.style.width = "100%";
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