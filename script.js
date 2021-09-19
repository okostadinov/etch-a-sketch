/* Extracts the value from the clicked button,
 * based on which generates the grid field.
 */
function generateGrid(e) {
    let gridSize;

    // prompt user for value in case custom grid btn was pressed
    if (e.target.value === 'custom') {
        do {
            gridSize = +prompt('Amount: ');
            console.log(gridSize);
            if (gridSize === 0) { // in case user cancelled prompt
                return;
            }
        } while ( !(Number.isInteger(gridSize)) || gridSize > 100);
    } else { // Otherwise, extract the int value
        gridSize = +e.target.value;
    }
    gridField.textContent = ''; // clear current content
    gridField.setAttribute('style', 'visibility: visible');
    gridField.style.setProperty('--grid-rows', gridSize);
    gridField.style.setProperty('--grid-cols', gridSize);

    for (let i = 0; i < (gridSize * gridSize); i++) {
        let gridSquare = document.createElement('div');
        gridSquare.textContent = '';
        gridSquare.classList.add('grid-square');
        gridSquare.addEventListener('mouseenter', fillSquare);
        gridSquare.addEventListener('mouseleave', rgbColor);
        gridField.appendChild(gridSquare);
    }
}

/* Retreives the button value pressed by the user
 * in order to specify the color to draw with.
 * In case he chose Random, compute a random 6-digit RGB hex value.
 * Otherwise, he must have chosen a specific color.
 */
function setColor(e) {
    chosenBtnColor = e.target.value;
    if (e.target.value === 'random') {
        randomizeColor();
    } else {
        currentColor = e.target.value;
    }
}

/* Generates a random RGB value.
 */
function randomizeColor() {
    let hexValues = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexValues[Math.floor(Math.random() * 16)];
    }
    currentColor = color;
}

/* Generates a random color every time
 * the user moves away from the current square.
 */
function rgbColor() {
    if (chosenBtnColor === 'rgb') randomizeColor();
}

/* Fills the background color of the square of the grid,
 * when hovering over it with the mouse.
 */
function fillSquare(e) {
    let gridSquare = e.target;
    gridSquare.setAttribute('style', `background-color: ${currentColor}`);
}

let chosenBtnColor;
let currentColor = 'black';
const container = document.querySelector('#container');

/* Add static text to top of window. */
const topTextContainer = document.createElement('div');
topTextContainer.setAttribute('id', 'topTextContainer');

const hTopTitle = document.createElement('h1');
hTopTitle.textContent = 'Etch-A-Sketch';
topTextContainer.appendChild(hTopTitle);

const parTopText = document.createElement('p');
parTopText.textContent = 'Pick a grid size, a color, and start sketching!';
topTextContainer.appendChild(parTopText);

container.appendChild(topTextContainer);

/* Add buttons for grid generation. */
const gridBtnContainer = document.createElement('div');
gridBtnContainer.setAttribute('id', 'gridBtnContainer');

const btnSmallGrid = document.createElement('button');
btnSmallGrid.classList.add('btn-gen-grid');
btnSmallGrid.setAttribute('title', '16x16');
btnSmallGrid.setAttribute('value', '16');
btnSmallGrid.textContent = 'Small Grid';
gridBtnContainer.appendChild(btnSmallGrid);

const btnMediumGrid = document.createElement('button');
btnMediumGrid.classList.add('btn-gen-grid');
btnMediumGrid.setAttribute('title', '32x32');
btnMediumGrid.setAttribute('value', '32');
btnMediumGrid.textContent = 'Medium Grid';
gridBtnContainer.appendChild(btnMediumGrid);

const btnLargeGrid = document.createElement('button');
btnLargeGrid.classList.add('btn-gen-grid');
btnLargeGrid.setAttribute('title', '64x64');
btnLargeGrid.setAttribute('value', '64');
btnLargeGrid.textContent = 'Large Grid';
gridBtnContainer.appendChild(btnLargeGrid);

const btnCustomGrid = document.createElement('button');
btnCustomGrid.classList.add('btn-gen-grid');
btnCustomGrid.setAttribute('value', 'custom');
btnCustomGrid.textContent = 'Custom Grid';
gridBtnContainer.appendChild(btnCustomGrid);

container.appendChild(gridBtnContainer);

const btnsGenGrid = Array.from(document.querySelectorAll('.btn-gen-grid'));
btnsGenGrid.forEach(btn => btn.addEventListener('click', generateGrid));

const gridAndSidebar = document.createElement('div');
gridAndSidebar.setAttribute('id', 'gridAndSidebar');

/* Add side buttons. */
const sideBtnContainer = document.createElement('div');
sideBtnContainer.setAttribute('id', 'sideBtnContainer');

const btnBlack = document.createElement('button');
btnBlack.classList.add('btn-set-color');
btnBlack.setAttribute('value', 'black');
btnBlack.textContent = 'Black';
sideBtnContainer.appendChild(btnBlack);

const btnWhite = document.createElement('button');
btnWhite.classList.add('btn-set-color');
btnWhite.setAttribute('value', 'white');
btnWhite.textContent = 'White';
sideBtnContainer.appendChild(btnWhite);

const btnRandom = document.createElement('button');
btnRandom.classList.add('btn-set-color');
btnRandom.setAttribute('value', 'random');
btnRandom.textContent = 'Random color';
sideBtnContainer.appendChild(btnRandom);

const btnRGB = document.createElement('button');
btnRGB.classList.add('btn-set-color');
btnRGB.setAttribute('value', 'rgb');
btnRGB.textContent = 'RGB';
sideBtnContainer.appendChild(btnRGB);

gridAndSidebar.appendChild(sideBtnContainer);

/* Add grid. */
const gridField = document.createElement('div');
gridField.setAttribute('id', 'gridField');
gridAndSidebar.appendChild(gridField);


container.appendChild(gridAndSidebar);

const btnsSetColor = Array.from(document.querySelectorAll('.btn-set-color'));
btnsSetColor.forEach(btn => btn.addEventListener('click', setColor));