import './styles/style.css'
import bombIcon from './assets/bomb.png'
// import createField from "./modules/filed";
// import fillBombs from './modules/fillBombs';

async function initGame() {

    async function checkContainer() {
        if (document.querySelector('.container') == null) {
        } else {
            document.querySelector('.container').remove()
        }
    }

    const difficulty = {
        'easy': [10, 10, 10],
        'medium': [15, 15, 40],
        'hard': [25, 25, 99]
    }
    
    let cells;
    let field;
    let container;
    let startGameBtn;
    let selection;
    let pregame;

    const bombsArray = [];
    const matrix = [];
    let obj = {};
    let index = 0;

    let leftSide = [];
    let rightSide = [];
    let topSide = [];
    let downSide = [];
    let diagonals = [];
    
    async function createMatrix(cols, rows) {
        for(let i = 0; i < rows; i++){
            matrix[i] = [];
            for(let j = 0; j < cols; j++){
                matrix[i][j] = ((i * rows) + j);
                obj[((i * rows) + j)] = 0;
            }
        }
    }
    
    async function variables() {
        cells = document.querySelectorAll('.field__cell');
        field = document.querySelector('.container__field');
        container = document.querySelector('.container');
        selection = document.querySelector('.container__selection')
        startGameBtn = document.querySelector('.container__button');
        pregame = document.querySelector('.field__pregame')
    }
    
    async function createField(cols, rows) {
        const container = document.createElement('div');
        container.classList.add('container');
    
        const selection = document.createElement('select');
        selection.classList.add('container__selection');
    
        const option1 = document.createElement('option');
        option1.text = 'Easy - field 10x10 with 10 mines';
        option1.value = 'Option 1'
        const option2 = document.createElement('option');
        option2.text = 'Medium - field 15x15 with 40 mines';
        option2.value = 'Option 2'
        const option3 = document.createElement('option');
        option3.text = 'Hard - Field 25x25 with 99 mines';
        option3.value = 'Option 3' 
    
        selection.append(option1, option2, option3)
    
        const label = document.createElement('label');
        label.innerHTML = 'Choose difficulty level: '
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
        }
    
        const pregame = document.createElement('div')
        pregame.classList.add('field__pregame');
        const paragraph = document.createElement('p')
        paragraph.innerHTML = 'Please, choose options and start a the game'
        pregame.append(paragraph)
    
        field.append(pregame)
        container.append(field);
        container.append(label)
        container.append(startGameBtn)
    
        document.querySelector('body').append(container);
    }

    async function minesweeper(cols, rows, bombs) {
        createMatrix(cols, rows, bombs)
        await fillBombs(cols, rows, bombs);
        
    }

    async function fillBombs (cols, rows, bombs) {
        async function randomize () {
            let randomNum = Math.floor(Math.random() * cells.length);
            for (let i =  bombsArray.length; i < bombs; i++) {
                if (randomNum * 1 ===  index * 1) {
                    randomize();
                } else if (!bombsArray.includes(randomNum)) {  
                    bombsArray.push(randomNum);
                } else {
                    randomize();
                }
            }
        }
        let clicks = 0;

        async function listener (event) {
            if (event.target.classList.contains('field__cell')) {
                index = parseInt(event.target.getAttribute('number'));
                event.target.setAttribute('opened', true)
                await randomize()
                clicks++
                if (clicks == 1) await fillCells(cols, rows, bombs)
                openCells(index, event)
            }
        }
        field.addEventListener('click', listener);
    }

    async function fillCells(cols, rows) {
        for (let i = 0; i < bombsArray.length; i++) {
            let bombsLineLeft = (bombsArray[i] + 1) % (cols) !== 0;
            let bombsLineRight = bombsArray[i] !== 0 && bombsArray[i] % cols !== 0;
            let bombsLineTop = bombsArray[i] <= (cols * rows) - cols;
            let bombsLineDown = bombsArray[i] >= cols;

            let diagTopLeft = bombsArray[i] - (cols) - 1,
                diagTopRight = bombsArray[i] - (cols) + 1,
                diagDownLeft = bombsArray[i] + (cols) - 1,
                diagDownRight = bombsArray[i] + (cols) + 1;
            
            if (bombsLineLeft) obj[bombsArray[i] + 1] += 1;
            if (bombsLineRight) obj[bombsArray[i] - 1] += 1;
            if (bombsLineTop) obj[bombsArray[i] + cols] += 1;
            if (bombsLineDown) obj[bombsArray[i] - cols] += 1;


            if (bombsLineLeft || bombsLineRight || bombsLineTop || bombsLineDown) {
                // DIAGONALS - bombsInCenter 
                if (bombsLineLeft && bombsLineRight && bombsLineTop && bombsLineDown) {
                    obj[diagTopLeft] += 1;
                    obj[diagTopRight] += 1;
                    obj[diagDownLeft] += 1;
                    obj[diagDownRight] += 1;

                }  else
                // DIAGONALS - bombsLineTop
                if (bombsArray[i] < cols) { 
                    if (bombsArray[i] !== cols - 1)  obj[diagDownRight] += 1;
                    if (bombsArray[i] !== 0)  obj[diagDownLeft] += 1;
                }

                if (bombsArray[i] >= (cols * rows) - cols) {
                    if (bombsArray[i] !== (cols * rows) - cols) obj[diagTopLeft] += 1;
                    if (bombsArray[i] !== (cols * rows) - 1) obj[diagTopRight] += 1;
                }
                
                // DIAGONALS - bombsLineLeft
                if (bombsArray[i] % cols == 0 ) {
                    if (bombsArray[i]  !== 0) obj[diagTopRight] += 1;
                    if (bombsArray[i] !== ((cols * rows) - cols)) obj[diagDownRight] += 1;
                    
                }
                
                //DIAGONALS - bombsLineRight
                if ((bombsArray[i] + 1) % cols == 0) {
                    if (bombsArray[i] !== cols - 1) obj[diagTopLeft] += 1;
                    if (bombsArray[i] !== (cols * rows) - 1) obj[diagDownLeft] += 1;
                }
            }
        }
    }

    function openCells(index) {
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
                gameOver()
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

    async function gameOver() {
        const background = document.createElement('div');
        background.classList.add('container__blocker');
        const paragraph = document.createElement('p')
        paragraph.classList.add('blocker__content');
        paragraph.innerHTML = 'YOU LOSE! GAME OVER!'
        background.append(paragraph)

        const button = document.createElement('div');
        button.classList.add('blocker__button');
        button.innerHTML = 'Try again'
        background.append(button)
        container.append(background);

        button.addEventListener('click', () => {
            initGame()
        })
    }

    async function startGame() {
        startGameBtn.addEventListener('click', () => {
            if (field.contains(pregame)) {
                field.removeChild(pregame);
            }

            let selectionValue = selection.options[selection.selectedIndex].value;

            if (selectionValue == 'Option 1') minesweeper(...difficulty['easy'])
            if (selectionValue == 'Option 2') minesweeper(...difficulty['medium'])
            if (selectionValue == 'Option 3') minesweeper(...difficulty['hard'])
        })
    }
    
    
    await checkContainer()
    await createField(...difficulty['easy']);
    await variables()
    await startGame()
}

initGame()

