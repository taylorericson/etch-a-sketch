const container = document.querySelector('.container');

createGrid(16);

function createGrid(size) {
    for(let i = 0; i < size; i++) {
        let col = document.createElement('div');
        col.className = 'column';
        
        for(let j = 0; j < size; j++) {
            let row = document.createElement('div');
            row.className = 'row';
            row.textContent = `${j + 1}`;
            col.appendChild(row);
        }
        container.appendChild(col);
    }
}