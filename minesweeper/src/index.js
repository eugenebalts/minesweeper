import './styles/style.css'
import bombIcon from './assets/bomb.png'
// import createField from "./modules/filed";
// import fillBombs from './modules/fillBombs';



async function minesweeper(COLS, ROWS, BOMBS) {

    let cells;
    let field;

    const bombsArray = [];
    const matrix = [];

    function createMatrix(array) {
        for(let i = 0; i < ROWS; i++){
            matrix[i] = [];
            for(let j = 0; j < COLS; j++){
                matrix[i][j] = ((i * ROWS) + j);
            }
        }
    }
    createMatrix(matrix)
    console.log(matrix)

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
            cell.style.fontWeight = '600'
            cell.setAttribute('number', i)
            cell.setAttribute('opened', false)
    
            field.append(cell)
        }
        document.querySelector('body').append(field);
    }

    async function fillBombs (bombs) {   
        let isClicked = false;
        let index = 0;
    
        async function randomize () {
            let randomNum = Math.floor(Math.random() * cells.length);
            for (let i =  bombsArray.length; i < BOMBS; i++) {
                if (randomNum * 1 ===  index * 1) {
                    randomize();
                } else if (!bombsArray.includes(randomNum)) {  
                    bombsArray.push(randomNum);
                } else {
                    randomize();
                }
            }
            isClicked = true;
        }
        let clicks = 0;
        async function listener (event) {
            if (event.target.classList.contains('field__cell')) {
                index = parseInt(event.target.getAttribute('number'));
                event.target.setAttribute('opened', true)
                await randomize()
                
                clicks++
                if (clicks == 1) await fillCells()
                openCells(index, event)
                }
            }
        field.addEventListener('click', listener);
    }

        let leftSide = [];
        let rightSide = [];
        let topSide = [];
        let downSide = [];
        let diagonals = [];

    function fillCells() {
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
    }

    function openCells(index, event) {
        cells[index].innerHTML = 0;
        

        function stylizeButton(index) {
            cells[index].innerHTML = parseInt(cells[index].innerHTML) + 1;
            cells[index].style.backgroundColor = 'rgba(100, 100, 100, 0.3)'
            cells[index].setAttribute('opened', true);
        }

        function diagonalButtons(index) {
            const diagCounts = diagonals.filter(item => item == index).length;
            console.log(diagCounts)
            cells[index].innerHTML = parseInt(cells[index].innerHTML) + diagCounts;
            cells[index].style.backgroundColor = 'rgba(100, 100, 100, 0.3)'
            checkInner(index)
        }

        function setMarker() {
            cells[index].setAttribute('hint', true);
        }

        async function emptyCell(index) {
            cells[index].setAttribute('empty', true);
            cells[index].innerHTML = ' ';
            cells[index].style.backgroundColor = 'rgba(100, 100, 100, 0.3)';
            // for (let i = 0; i < matrix.length; i++) {
            //     for (let j = 0; j < matrix[i].length; j++) {
            //         if (index == matrix[i][j]) console.log('index is', matrix[i][j], 'next is ' + matrix[i][j + 1]);
            //         if (matrix[i][j + 1]) 
            //     }
            // }
            // cells.forEach((item, i) => {
            //     if (!(leftSide.includes(i) || rightSide.includes(i) || downSide.includes(i) || topSide.includes(i) || diagonals.includes(i) || bombsArray.includes(i))) {
            //         item.style.backgroundColor = 'rgba(100, 100, 100, 0.3)';
            //     }
            // })

            // (async function() {
            //     for (let i = 0; i < matrix.length; i++) {
            //         for (let j = 0; j < matrix[i].length; j++) {
            //             if (matrix[i][j] == index) {
            //                 if ((j < matrix[i].length - 1)) {
            //                     if (!(leftSide.includes(index + 1) || rightSide.includes(index + 1) || downSide.includes(index + 1) || topSide.includes(index + 1) || diagonals.includes(index + 1) || bombsArray.includes(index + 1))) { 
            //                         await emptyCell(matrix[i][j + 1])
            //                     } else {
            //                         cells[index + 1].innerHTML = 0;
            //                         stylizeButton(matrix[i][j + 1]);
            //                         if (diagonals.includes(index + 1)) diagonalButtons(index + 1)
            //                     }
            //                 }
            //             }
            //         }
            //     }
            // })()

            // if (leftSide.includes(index + 1) || rightSide.includes(index + 1) || downSide.includes(index + 1) || topSide.includes(index + 1) || diagonals.includes(index + 1) || bombsArray.includes(index + 1)) {
            //     cells[index + 1].innerHTML = 0;
            //     stylizeButton(index + 1)
            // } else await emptyCell(index + 1)

            // if (leftSide.includes(index - 1) || rightSide.includes(index - 1) || downSide.includes(index - 1) || topSide.includes(index - 1) || diagonals.includes(index - 1) || bombsArray.includes(index - 1)) {
            //     cells[index - 1].innerHTML = 0;
            //     stylizeButton(index - 1)
            // } else emptyCell(index - 1)
            
        }



        if (leftSide.includes(index) || rightSide.includes(index) || downSide.includes(index) || topSide.includes(index) || diagonals.includes(index) || bombsArray.includes(index) ) {
            if(diagonals.includes(index)) {
                diagonalButtons(index)
            }

            if(topSide.includes(index)) {
                stylizeButton(index)
                setMarker(index)
            }

            if(downSide.includes(index)) {
                stylizeButton(index)
                setMarker(index)
            }

            if (leftSide.includes(index)) {
                stylizeButton(index)
                setMarker(index)
            }
            
            if(rightSide.includes(index)) {
                stylizeButton(index)
                setMarker(index)
            }

            if (bombsArray.includes(index)) {
                cells[index].innerHTML = `<img src="${bombIcon}" alt="Bomb">`
                cells[index].style.backgroundColor = 'rgba(255, 0, 0, 0.5)'
            }
        } else {
            emptyCell(index)
            console.log('empty')
        }
        checkInner(index)
    }

    function checkInner(index) {
        if (cells[index].innerHTML == 1) cells[index].style.color = 'blue';
        if (cells[index].innerHTML == 2) cells[index].style.color = 'green';
        if (cells[index].innerHTML == 3) cells[index].style.color = 'purple';
        if (cells[index].innerHTML == 4) cells[index].style.color = 'Crimson';
        if (cells[index].innerHTML == 5) cells[index].style.color = 'Red';
        if (cells[index].innerHTML == 6) cells[index].style.color = 'FireBrick';
        if (cells[index].innerHTML == 7) cells[index].style.color = 'DarkRed';
        if (cells[index].innerHTML == 8) cells[index].style.color = 'brown';
    }
    await createField(COLS, ROWS);
    await variables();
    await fillBombs(BOMBS);
    
}

minesweeper(5, 5, 5);