const container = document.querySelector('.grid_container');
const btnNumCells = document.querySelector('#numCells');
const btnBW = document.querySelector('#bw');
const btnColor = document.querySelector('#color');

let numCells;
let toggle = '';

btnBW.addEventListener("click", function() {
    toggle="bw"
});

btnColor.addEventListener("click", function() {
    toggle="color";
});

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

const randomColor = function() {
    let color = [];
    red = Math.floor(Math.random()*255) + 1;
    green = Math.floor(Math.random()*255) + 1;
    blue = Math.floor(Math.random()*255) + 1;
    color = [red, green, blue];
    return color;
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
                if (toggle === 'bw') {
                    div.style.backgroundColor = "black";
                } else if(toggle === 'color') {
                    div.style.backgroundColor = `rgb(${randomColor()}`;
                };
            });

            container.appendChild(div);
        };
    }
}

btnNumCells.addEventListener('click', drawGrid);




