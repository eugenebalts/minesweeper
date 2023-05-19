import './styles/style.css'
import bombIcon from './assets/bomb.png'
// import createField from "./modules/filed";
// import fillBombs from './modules/fillBombs';



async function minesweeper(COLS, ROWS, BOMBS) {

    let cells;
    let field;

    const bombsArray = [];

    async function variables() {
        cells = document.querySelectorAll('.field__cell');
        field = document.querySelector('.field');
    }

    async function createField(cols, rows) {

        const cellSize = '40px';
        const field = document.createElement('div');
        field.classList.add('field');
        field.style.gridTemplateColumns = `repeat(${cols}, ${cellSize})`;
        
        for (let i = 0; i < (cols * rows); i++) {
            const cell = document.createElement('div');
            cell.classList.add('field__cell');
            cell.style.height = cellSize;
            cell.style.width = cellSize;
            cell.setAttribute('number', i)
    
            field.append(cell)
        }
        document.querySelector('body').append(field);
    } 

    async function fillBombs (bombs) {    
        let isClicked = false;
        let firstClick = 0;
    
        async function randomize () {
            let randomNum = Math.floor(Math.random() * cells.length);
            for (let i =  bombsArray.length; i < BOMBS; i++) {
                if (randomNum * 1 ===  firstClick * 1) {
                    randomize();
                } else if (!bombsArray.includes(randomNum)) {  
                    bombsArray.push(randomNum);
                } else {
                    randomize();
                }
            }
            isClicked = true;
            field.removeEventListener('click', listener);
        }
    
        async function listener (event) {
            if (event.target.classList.contains('field__cell')) {
                firstClick = event.target.getAttribute('number');
                event.target.style.backgroundColor = 'rgba(127, 255, 0, 0.5)'
                await randomize();
                handler();
            }
        }
        field.addEventListener('click', listener);
    }

    async function handler() {
        console.log(bombsArray)
        let counter = 0;
        let leftSide = [];
        let rightSide = [];
        let topSide = [];
        let downSide = [];
        let diagonals = [];

        for (let i = 0; i < bombsArray.length; i++) {

            let bombsLineLeft = (bombsArray[i] + 1) % (COLS) !== 0;
            let bombsLineRight = bombsArray[i] !== 0 && bombsArray[i] % COLS !== 0;
            let bombsLineTop = bombsArray[i] <= (COLS * ROWS) - COLS;
            let bombsLineDown = bombsArray[i] >= COLS;

            let diagTopLeft = bombsArray[i] - (COLS) - 1,
                diagTopRight = bombsArray[i] - (COLS) + 1,
                diagDownLeft = bombsArray[i] + (COLS) - 1,
                diagDownRight = bombsArray[i] + (COLS) + 1;
            
            if (bombsLineLeft) rightSide.push(bombsArray[i] + 1);
            if (bombsLineRight) leftSide.push(bombsArray[i] - 1);
            if (bombsLineTop) downSide.push(bombsArray[i] + COLS)
            if (bombsLineDown) topSide.push(bombsArray[i] - COLS);

            if (bombsLineLeft || bombsLineRight || bombsLineTop || bombsLineDown) {

                // DIAGONALS - bombsInCenter 
                if (bombsLineLeft && bombsLineRight && bombsLineTop && bombsLineDown) {
                    diagonals.push(diagTopLeft, diagTopRight, diagDownLeft, diagDownRight)
                }  else

                // DIAGONALS - bombsLineTop
                if (bombsArray[i] < COLS) { 
                    if (bombsArray[i] !== COLS - 1)  diagonals.push(diagDownRight);
                    if (bombsArray[i] !== 0)  diagonals.push(diagDownLeft);
                }  else 

                if (bombsArray[i] >= (COLS * ROWS) - COLS) {
                    if (bombsArray[i] !== (COLS * ROWS) - COLS) diagonals.push(diagTopLeft);
                    if (bombsArray[i] !== (COLS * ROWS) - 1) diagonals.push(diagTopRight);
                }  else 
                
                // DIAGONALS - bombsLineLeft
                if (bombsArray[i] % COLS == 0 ) {
                    if (bombsArray[i]  !== 0) diagonals.push(diagTopRight);
                    if (bombsArray[i] !== ((COLS * ROWS) - COLS)) diagonals.push(diagDownRight);
                    
                } else
                
                //DIAGONALS - bombsLineRight
                if ((bombsArray[i] + 1) % COLS == 0) {
                    if (bombsArray[i] !== COLS - 1) diagonals.push(diagTopLeft);
                    if (bombsArray[i] !== (COLS * ROWS) - 1) diagonals.push(diagDownLeft);
                }
            }
        }

        cells.forEach((item, index) => {
            item.addEventListener('click', (event) => {
                counter++;  
                event.target.innerHTML = 0 * 1;
                if (leftSide.includes(index) || rightSide.includes(index) || downSide.includes(index) || topSide.includes(index) || diagonals.includes(index) || bombsArray.includes(index)) {

                    if(diagonals.includes(index)) {
                        const diagCounts = diagonals.filter(item => item == index).length;
                        event.target.innerHTML = parseInt(event.target.innerHTML) + diagCounts;
                        item.style.backgroundColor = 'rgba(127, 255, 0, 0.5)'
                    }

                    if(topSide.includes(index)) {
                        event.target.innerHTML = parseInt(event.target.innerHTML) + 1;
                        item.style.backgroundColor = 'rgba(127, 255, 0, 0.5)'
                    }

                    if(downSide.includes(index)) {
                        event.target.innerHTML = parseInt(event.target.innerHTML) + 1;
                        item.style.backgroundColor = 'rgba(127, 255, 0, 0.5)'
                    }

                    if (leftSide.includes(index)) {
                        event.target.innerHTML = parseInt(event.target.innerHTML) + 1;
                        item.style.backgroundColor = 'rgba(127, 255, 0, 0.5)'
                    }
                    
                    if(rightSide.includes(index)) {
                        event.target.innerHTML = parseInt(event.target.innerHTML) + 1;
                        item.style.backgroundColor = 'rgba(127, 255, 0, 0.5)'
                    }

                    if (bombsArray.includes(index)) {
                        event.target.innerHTML = `<img src="${bombIcon}" alt="Bomb">`
                        item.style.backgroundColor = 'rgba(255, 0, 0, 0.5)'
                    }
                    
                } else {
                    event.target.innerHTML = ' ';
                    item.style.backgroundColor = 'rgba(127, 255, 0, 0.5)'
                }
            })
        })
    }

    await createField(COLS, ROWS);
    await variables();
    await fillBombs(BOMBS);
    

}

minesweeper(5, 5, 5);