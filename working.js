const container = document.querySelector('.grid_container');
const btnNumCells = document.querySelector('button');

const getNumCells = function() {
    return prompt("Enter the number of rows which will be the same as columns");
};

btnNumCells.addEventListener('click', getNumCells);

let numCells = getNumCells();

let gridTemplate = 'auto';

for (let x = 0; x < numCells -1; x++ ) {
    gridTemplate = gridTemplate +  ' auto'; 
}

container.style.gridTemplateColumns = gridTemplate;
container.style.gridTemplateRows = gridTemplate;

for (let i = 0; i < numCells; i++ ) {
    for (let j=0; j < numCells; j++) {
        //console.log(`i = ${i} j = ${j}`);
        const div = document.createElement('div');
        div.className = 'grid_item';
        container.appendChild(div);
    };
}


