/* Extracts the value from the clicked button,
 * based on which generates the grid field.
 */ 
function generateGrid(e) {
    let gridSize = +e.target.value;
    console.log(gridSize);
    gridField.textContent = '';
    gridField.setAttribute('style', 'visibility: visible');
     gridField.setAttribute('style', `grid-template-columns: repeat(${gridSize}, 1fr)`);
     gridField.setAttribute('style', `grid-template-rows: repeat(${gridSize}, 1fr)`);
    //gridField.setAttribute('style', `grid-template-columns: repeat(auto-fit, ${gridSize}px)`);

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            let gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square');
            gridSquare.textContent = '';
            gridField.appendChild(gridSquare);
        }
    }

}

const mainContainer = document.querySelector('#mainContainer');

/* Add static text to top of window. */
const topTextContainer = document.createElement('div');
topTextContainer.setAttribute('id', 'topTextContainer');

const hTopTitle = document.createElement('h1');
hTopTitle.textContent = 'Etch-A-Sketch';
topTextContainer.appendChild(hTopTitle);

const parTopText = document.createElement('p');
parTopText.textContent = 'Placeholder';
topTextContainer.appendChild(parTopText);

mainContainer.appendChild(topTextContainer);

/* Add buttons for grid generation. */
const gridBtnContainer = document.createElement('div');
gridBtnContainer.setAttribute('id', 'gridBtnContainer');

const btnSmallGrid = document.createElement('button');
btnSmallGrid.classList.add('btn-gen-grid'
);
btnSmallGrid.setAttribute('title', '16x16');
btnSmallGrid.setAttribute('value', '16');
btnSmallGrid.textContent = 'Small Grid';

const btnMediumGrid = document.createElement('button');
btnMediumGrid.classList.add('btn-gen-grid'
);
btnMediumGrid.setAttribute('title', '32x32');
btnMediumGrid.setAttribute('value', '32');
btnMediumGrid.textContent = 'Medium Grid';

const btnLargeGrid = document.createElement('button');
btnLargeGrid.classList.add('btn-gen-grid'
);
btnLargeGrid.setAttribute('title', '64x64');
btnLargeGrid.setAttribute('value', '64');
btnLargeGrid.textContent = 'Large Grid';


gridBtnContainer.appendChild(btnSmallGrid);
gridBtnContainer.appendChild(btnMediumGrid);
gridBtnContainer.appendChild(btnLargeGrid);

mainContainer.appendChild(gridBtnContainer);

const btnsGenGrid = Array.from(document.querySelectorAll('.btn-gen-grid'));
btnsGenGrid.forEach(btn => btn.addEventListener('click', generateGrid));

/* Add grid field. */
const gridField = document.createElement('div');
gridField.setAttribute('id', 'gridField');

mainContainer.appendChild(gridField);