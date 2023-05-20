import './styles/style.css'
import bombIcon from './assets/bomb.png'
// import createField from "./modules/filed";
// import fillBombs from './modules/fillBombs';



async function minesweeper(COLS, ROWS, BOMBS) {

    let cells;
    let field;
    let container;
    let startGameBtn;
    let selection;

    const bombsArray = [];
    const matrix = [];
    let obj = {};

    function createMatrix(array) {
        for(let i = 0; i < ROWS; i++){
            matrix[i] = [];
            for(let j = 0; j < COLS; j++){
                matrix[i][j] = ((i * ROWS) + j);
                obj[((i * ROWS) + j)] = 0;
            }
        }
    }
    createMatrix(matrix)
    console.log(matrix)

    async function variables() {
        cells = document.querySelectorAll('.field__cell');
        field = document.querySelector('.container__field');
        container = document.querySelector('.interface');
        selection = document.querySelector('.container__selection')
        startGameBtn = document.querySelector('.container__button');
    }

    async function createField(cols, rows) {
        const container = document.createElement('div');
        container.classList.add('container');

        const selection = document.createElement('select');
        selection.classList.add('container__selection');

        const option1 = document.createElement('option');
        option1.text = 'Легко - Поле 10х10 с 10 минами';
        option1.value = 'Option 1'
        const option2 = document.createElement('option');
        option2.text = 'Средний - Поле 15х15 с 40 минами';
        option2.value = 'Option 2'
        const option3 = document.createElement('option');
        option3.text = 'Сложный - Поле 20х20 с 70 минами';
        option3.value = 'Option 3' 

        selection.append(option1, option2, option3)

        const label = document.createElement('label');
        label.innerHTML = 'Выберите уровень сложности: '
        label.append(selection)
        label.style.textAlign = 'center'


        const startGameBtn = document.createElement('div');
        startGameBtn.classList.add('container__button');
        startGameBtn.innerHTML = 'Start Game';

        const cellSize = '40px';
        const field = document.createElement('div');
        field.classList.add('container__field');
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
            container.append(field);
            container.append(label)
            container.append(startGameBtn)
        }
        document.querySelector('body').append(container);

    }

    async function fillBombs (bombs) {   
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
            // console.log(bombsArray)
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

    async function fillCells() {
        for (let i = 0; i < bombsArray.length; i++) {
            let bombsLineLeft = (bombsArray[i] + 1) % (COLS) !== 0;
            let bombsLineRight = bombsArray[i] !== 0 && bombsArray[i] % COLS !== 0;
            let bombsLineTop = bombsArray[i] <= (COLS * ROWS) - COLS;
            let bombsLineDown = bombsArray[i] >= COLS;

            let diagTopLeft = bombsArray[i] - (COLS) - 1,
                diagTopRight = bombsArray[i] - (COLS) + 1,
                diagDownLeft = bombsArray[i] + (COLS) - 1,
                diagDownRight = bombsArray[i] + (COLS) + 1;
            
            if (bombsLineLeft) obj[bombsArray[i] + 1] += 1;
            if (bombsLineRight) obj[bombsArray[i] - 1] += 1;
            if (bombsLineTop) obj[bombsArray[i] + COLS] += 1;
            if (bombsLineDown) obj[bombsArray[i] - COLS] += 1;


            if (bombsLineLeft || bombsLineRight || bombsLineTop || bombsLineDown) {
                // DIAGONALS - bombsInCenter 
                if (bombsLineLeft && bombsLineRight && bombsLineTop && bombsLineDown) {
                    obj[diagTopLeft] += 1;
                    obj[diagTopRight] += 1;
                    obj[diagDownLeft] += 1;
                    obj[diagDownRight] += 1;

                }  else

                // DIAGONALS - bombsLineTop
                if (bombsArray[i] < COLS) { 
                    if (bombsArray[i] !== COLS - 1)  obj[diagDownRight] += 1;
                    if (bombsArray[i] !== 0)  obj[diagDownLeft] += 1;
                }

                if (bombsArray[i] >= (COLS * ROWS) - COLS) {
                    if (bombsArray[i] !== (COLS * ROWS) - COLS) obj[diagTopLeft] += 1;
                    if (bombsArray[i] !== (COLS * ROWS) - 1) obj[diagTopRight] += 1;
                }
                
                // DIAGONALS - bombsLineLeft
                if (bombsArray[i] % COLS == 0 ) {
                    if (bombsArray[i]  !== 0) obj[diagTopRight] += 1;
                    if (bombsArray[i] !== ((COLS * ROWS) - COLS)) obj[diagDownRight] += 1;
                    
                }
                
                //DIAGONALS - bombsLineRight
                if ((bombsArray[i] + 1) % COLS == 0) {
                    if (bombsArray[i] !== COLS - 1) obj[diagTopLeft] += 1;
                    if (bombsArray[i] !== (COLS * ROWS) - 1) obj[diagDownLeft] += 1;
                }
            }
        }
        console.log(obj)
    }

    function openCells(index, event) {
        if (obj[index] == 0) {
            cells[index].innerHTML = ' ';
        } else cells[index].innerHTML = obj[index];
        cells[index].style.backgroundColor = 'rgba(100, 100, 100, 0.3)'

        async function emptyCell(index) {
            cells[index].setAttribute('empty', true);
            cells[index].innerHTML = ' ';
            cells[index].style.backgroundColor = 'rgba(100, 100, 100, 0.3)';
        }


            if (bombsArray.includes(index)) {
                cells[index].innerHTML = `<img src="${bombIcon}" alt="Bomb">`
                cells[index].style.backgroundColor = 'rgba(255, 0, 0, 0.5)'
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

minesweeper(10, 10, 10);