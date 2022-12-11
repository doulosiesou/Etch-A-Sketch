const container = document.querySelector('.grid_container');
const btnNumCells = document.querySelector('#numCells');
let numCells;

const getNumCells = function() {
    let keepTrack = true;
    let numCellsIn
    while (keepTrack) {
        numCellsIn = prompt("Enter the number of rows which will be the same as columns, the maximum number is 100");
        if (numCellsIn > 100) {
            numCellsIn = prompt("Enter the number of rows which will be the same as columns, the maximum number is 100");
        } else {
            keepTrack = false;
        }
    };
    return numCellsIn;
};

const drawGrid = function() {

    container.innerHTML = '';

    let gridTemplate = 'auto';
    numCells = getNumCells();

    for (let x = 0; x < numCells -1; x++ ) {
        gridTemplate = gridTemplate +  ' auto'; 
    }
    
    container.style.gridTemplateColumns = gridTemplate;
    container.style.gridTemplateRows = gridTemplate;
    
    for (let i = 0; i < numCells; i++ ) {
        for (let j=0; j < numCells; j++) {
            // console.log(`i = ${i} j = ${j}`);

            const div = document.createElement('div');
            div.className = 'grid_item';
            div.addEventListener("mouseover", function () {
                div.style.backgroundColor = "black";

            // = color[Math.floor(Math.random() * color.length)];

            });

            container.appendChild(div);
        };
    }
}

btnNumCells.addEventListener('click', drawGrid);




