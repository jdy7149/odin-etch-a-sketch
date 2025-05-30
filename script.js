const grid = document.querySelector('.grid');
const gridRange = document.querySelector('#grid-range');
const gridSpan = document.querySelector('#grid-size');

gridSize = gridRange.value;
gridSpan.textContent = gridSize;

// Initailize grid
function generateGrid(side){
    grid.remo
}
for (let i = 0; i < gridSize; i++){
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < gridSize; j++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        row.appendChild(cell);
    }
    grid.appendChild(row);
}

const cells = document.querySelectorAll('.cell');

// Initialize cells' eventhandler
cells.forEach(elem => elem.addEventListener('mouseover', evt => {
    evt.target.style.backgroundColor = 'black';
}));

function random(number){
    return Math.floor(Math.random() * number);
}

const radios = document.querySelectorAll('input[type="radio"]');

radios.forEach(elem => elem.addEventListener('change', evt => {
    const id = evt.target.getAttribute('id');
    
    let hoverHandler = null;

    switch (id){
        case 'random':
            hoverHandler = evt => evt.target.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
            break;
        case 'black':
            hoverHandler = evt => evt.target.style.backgroundColor = 'black';
            break;
        case 'eraser':
            hoverHandler = evt => evt.target.style.backgroundColor = 'white';
            break;
        default:
            hoverHandler = evt => evt.target.style.backgroundColor = 'black';
    }

    cells.forEach(elem => elem.addEventListener('mouseover', hoverHandler));
}));