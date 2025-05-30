const grid = document.querySelector('.grid');
const gridRange = document.querySelector('#grid-range');
const gridSpan = document.querySelector('#grid-size');

gridSize = gridRange.value;
gridSpan.textContent = gridSize;

let hoverHandler = evt => evt.target.style.backgroundColor = 'black';

// Initailize grid
generateGrid(gridSize);

function generateGrid(size){
    clearGrid();

    for (let i = 0; i < size; i++){
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < size; j++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }

    document.querySelectorAll('.cell').forEach(elem => elem.addEventListener('mouseover', hoverHandler));
}

function clearGrid(){
    while (grid.lastElementChild){
        grid.removeChild(grid.lastElementChild);
    }
}

function random(number){
    return Math.floor(Math.random() * number);
}

gridRange.addEventListener('change', evt => {
    const gridSize = evt.target.value;
    generateGrid(gridSize);
    gridSpan.textContent = gridSize;
});

const radios = document.querySelectorAll('input[type="radio"]');

radios.forEach(elem => elem.addEventListener('change', evt => {
    const id = evt.target.getAttribute('id');

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

    document.querySelectorAll('.cell').forEach(elem => elem.addEventListener('mouseover', hoverHandler));
}));

document.querySelector('#clear').addEventListener('click', () => {
    document.querySelectorAll('.cell').forEach(elem => elem.style.backgroundColor = 'white');
});