const container = document.querySelector('.container');
console.log(container);
for (let i = 0; i < 16; i++){
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < 16; j++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        row.appendChild(cell);
    }
    container.appendChild(row);
}

function random(number){
    return Math.floor(Math.random() * number);
}

const cells = document.querySelectorAll('.cell');

function changeHoveringColor(color, random = null){
    cells.forEach(elem => elem.addEventListener('mouseover', evt => {
        evt.target.style.backgroundColor = random === null ? color : `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    }));
}

cells.forEach(elem => elem.addEventListener('mouseover', evt => {
    evt.target.style.backgroundColor = 'black';
}));

const radios = document.querySelectorAll('input[type="radio"]');

radios.forEach(elem => elem.addEventListener('change', evt => {
    const id = evt.target.getAttribute('id');
    
    if (id === 'random'){
        changeHoveringColor('', random);
    } else if (id === 'eraser'){
        changeHoveringColor('white');
    } else if (id === 'black'){
        changeHoveringColor('black');
    }

}));