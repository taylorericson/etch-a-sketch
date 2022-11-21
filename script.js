const container = document.querySelector('.container');

createGrid(16);

function createGrid(size) {
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

const  gridSquare = document.querySelectorAll(".grid-square");

gridSquare.forEach((square) => {
    square.addEventListener("mouseover", changeColor);
});

function changeColor(e) {
    e.target.classList.add('color');
}

