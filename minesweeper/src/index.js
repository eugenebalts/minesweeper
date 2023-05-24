import './styles/style.css'
import bombIcon from './assets/bomb.png'
import markerImg from './assets/marker.png'
import audioOn from './assets/audioOn.png'
import audioOff from './assets/audioOff.png'
import openCellSound from './assets/audio/openCell.mp3'
import boom from './assets/audio/boom.mp3'
import lose from './assets/audio/lose.mp3'
import markerSound from './assets/audio/marker.mp3'
import win from './assets/audio/win.mp3'

let isChecked = false;
let isSound = true;

async function initGame() {
    async function checkContainer() {
        if (document.querySelector('.container') == null) {
        } else {
            document.querySelector('.container').remove()
        }
    }

    const difficulty = {
        'easy': [10, 10 , 10],
        'medium': [15, 15, 40],
        'hard': [25, 25, 99]
    }

    let loseSound = new Audio(lose);
    let openSound = new Audio(openCellSound);
    let boomSound = new Audio(boom)
    let markerSounds = new Audio(markerSound)
    let winSound = new Audio(win)
    
    let cells;
    let field;
    let container;
    let startGameBtn;
    let selection;
    let selectionLabel;
    let pregame;
    let clicksCounter;
    let duration;
    let markerIco;
    let empty;
    let topic;
    let topicLabel;
    let topicSpan;
    let markerTitle;
    let markerSubtitle;
    let bombsCount;
    let soundImg;

    async function variables() {
        cells = document.querySelectorAll('.field__cell');
        field = document.querySelector('.container__field');
        container = document.querySelector('.container');
        selection = document.querySelector('.container__selection')
        startGameBtn = document.querySelector('.container__button');
        pregame = document.querySelector('.field__pregame');
        clicksCounter = document.querySelector('.panel__clicks');
        duration = document.querySelector('.panel__duration')
        markerIco = document.querySelector('.panel__marker img');
        empty = document.querySelector('.container__empty');
        selectionLabel = document.querySelector('.container__label-selection');
        topic = document.querySelector('.container__topic');
        topicLabel = document.querySelector('.container__topic-label')
        topicSpan = document.querySelector('.container__topic-span')
        markerTitle = document.querySelector('.marker__title')
        markerSubtitle = document.querySelector('.marker__subtitle')
        bombsCount = document.querySelector('.container__bombs-count')
        soundImg = document.querySelector('.container__sound')
    }

    let bombsArray = [];
    let matrix = [];
    let obj = {};
    let index = 0;
    let clicks = 0;
    let dur = 0;
    let gameStarted = false;
    let isMarker = false;
    let markCounter = 1;
    let isDark = false;

    let leftSide = [];
    let rightSide = [];
    let topSide = [];
    let downSide = [];
    let diagonals = [];

    function startProps() {
        bombsArray = [];
        matrix = [];
        obj = {};
        index = 0;
        clicks = 0;
        dur = 0;
        gameStarted = false;

        leftSide = [];
        rightSide = [];
        topSide = [];
        downSide = [];
        diagonals = [];
        isMarker = false;
        markCounter = 1;
    }


    
    async function createMatrix(cols, rows) {
        for(let i = 0; i < rows; i++){
            matrix[i] = [];
            for(let j = 0; j < cols; j++){
                matrix[i][j] = ((i * rows) + j);
                obj[((i * rows) + j)] = 0;
            }
        }
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
    
        selection.append(option1)
        selection.append(option2)
        selection.append(option3)

    
        const label = document.createElement('label');
        label.innerHTML = 'Choose difficulty level: '
        label.append(selection)
        label.style.textAlign = 'center';
        label.classList.add('container__label-selection');

        const bombsCountLabel = document.createElement('label');
        bombsCountLabel.innerHTML = 'Count of bombs (10 - 99): '
        const bombsCount = document.createElement('input');
        bombsCount.classList.add('container__bombs-count');
        bombsCount.value = 10;
        bombsCountLabel.append(bombsCount)


    
    
        const startGameBtn = document.createElement('div');
        startGameBtn.classList.add('container__button');
        startGameBtn.innerHTML = 'Start Game';

        const empty = document.createElement('div');
        empty.style.minWidth = '300px';
        empty.style.minHeight = '300px';
        empty.style.position = 'relative'
        empty.classList.add('container__empty')
    
        const pregame = document.createElement('div')
        pregame.classList.add('field__pregame');
        const paragraph = document.createElement('p')
        paragraph.innerHTML = 'Please, choose options and start the game'
        pregame.append(paragraph)

        const helpPanel = document.createElement('div');
        helpPanel.classList.add('container__help-panel');

        const clicksCounter = document.createElement('input');
        clicksCounter.classList.add('panel__clicks');
        clicksCounter.value = clicks;
        clicksCounter.disabled = true;
        const clicksLabel = document.createElement('label');
        clicksLabel.innerHTML = 'Clicks: '
        clicksLabel.append(clicksCounter)

        const duration = document.createElement('input');
        duration.classList.add('panel__duration');
        duration.value = dur;
        duration.disabled = true;
        const durationLabel = document.createElement('label');
        durationLabel.innerHTML = 'Game duration, sec: '
        durationLabel.append(duration)

        const marker = document.createElement('div');
        marker.classList.add('panel__marker');
        const markerTitle = document.createElement('p');
        markerTitle.innerHTML = 0;
        markerTitle.classList.add('marker__title');
        const markerIco = document.createElement('img');
        markerIco.src = markerImg;
        const markerSubtitle = document.createElement('p');
        markerSubtitle.classList.add('marker__subtitle');
        markerSubtitle.style.margin = 0;
        markerSubtitle.style.fontWeight = 700;
        marker.append(markerTitle);
        marker.append(markerIco);

        helpPanel.append(clicksLabel);
        helpPanel.append(durationLabel);
        helpPanel.append(marker);
        container.append(helpPanel);

        container.append(markerSubtitle)

        empty.append(pregame)
        container.append(empty)

        container.append(label)
        container.append(bombsCountLabel)
        
        container.append(startGameBtn)

        const topic = document.createElement('input');
        topic.classList.add('container__topic');
        topic.type = 'checkbox';
        topic.style.position = 'absolute'
        topic.style.right = '10px';
        topic.style.bottom = '10px';
        topic.style.width = '30px';
        topic.style.height = '30px';
        topic.style.left = '-1000px'

        const topicLabel = document.createElement('label');
        topicLabel.classList.add('container__topic-label');
        topicLabel.style.fontWeight = 700;
        topicLabel.style.cursor = 'pointer';
        const span = document.createElement('span');
        span.classList.add('container__topic-span')
        span.style.fontSize = '25px';
        span.style.fontFamily = 'Impact'
        topicLabel.append(span);
        topicLabel.append(topic);

        container.append(topicLabel)
        document.querySelector('body').append(container);

        const soundImg = document.createElement('img');
        soundImg.classList.add('container__sound');
        if (isSound) {
            soundImg.src = audioOn;
        } else {
            soundImg.src = audioOff;
        }
        soundImg.style.bottom = '10px';
        soundImg.style.right = '10px';
        soundImg.style.position = 'absolute';
        soundImg.style.width = '20px';
        soundImg.style.cursor = 'pointer';
        container.append(soundImg)
    }

    function sound() {
        soundImg.addEventListener('click', () => {
            if (isSound) {
                soundImg.src = audioOff
                isSound = false
            } else {
                soundImg.src = audioOn
                isSound = true
            }
        })
    }

    async function createCells(cols, rows, bombs) {
        const field = document.createElement('div');
        field.classList.add('container__field');
        let cellSize;
        function size() {
            if (window.innerWidth <= 550) {
                if (cols == 10) {
                    cellSize = '30px';
                } else if (cols == 15) {
                    cellSize = '20px';
                } else if (cols == 25) {
                    cellSize = '15px';
                }
            } else {
                if (cols == 10) {
                    cellSize = '40px';
                } else if (cols == 15) {
                    cellSize = '30px';
                } else if (cols == 25) {
                    cellSize = '15px';
                }
            }
            field.style.gridTemplateColumns = `repeat(${cols}, ${cellSize})`;
        }
        size()
        window.addEventListener('resize', size);
        


        for (let i = 0; i < (cols * rows); i++) {
            const cell = document.createElement('div');
            cell.classList.add('field__cell');
            cell.style.height = cellSize;
            cell.style.width = cellSize;
            cell.style.fontWeight = '600'
            cell.setAttribute('number', i)
            cell.setAttribute('opened', false)
            cell.setAttribute('marked', false)
            field.append(cell);
        }
        container.insertBefore(field, selectionLabel)
        await variables()

        function sizes() {
            cells.forEach(cell => {
                if (window.innerWidth <= 550) {
                    if (cols == 10) {
                        cell.style.width = '30px'
                        cell.style.height = '30px'
                        cellSize = '30px';
                    } else if (cols == 15) {
                        cell.style.width = '20px'
                        cell.style.height = '20px'
                        cellSize = '20px';
                    } else if (cols == 25) {
                        cell.style.width = '15px'
                        cell.style.height = '15px'
                        cellSize = '15px';
                    }
                    field.style.gridTemplateColumns = `repeat(${cols}, ${cellSize})`;
                } else {
                    if (cols == 10) {
                        cell.style.width = '40px'
                        cell.style.height = '40px'
                        cellSize = '40px';
                    } else if (cols == 15) {
                        cell.style.width = '30px'
                        cell.style.height = '30px'
                        cellSize = '30px';
                    } else if (cols == 25) {
                        cell.style.width = '20px'
                        cell.style.height = '20px'
                        cellSize = '20px';
                    }
                    field.style.gridTemplateColumns = `repeat(${cols}, ${cellSize})`;
                }
            })
        }
        sizes()
        window.addEventListener('resize', sizes);
    }

    function listenTopic() {
        topic.addEventListener('change', () => {
            if (topic.checked) {
                document.querySelector('body').style.background = '#323030'
                isChecked = true;
                checkIsChecked()
            } else {
                document.querySelector('body').style.background = 'unset'
                isChecked = false;
                checkIsChecked()
            }
        })
    }

    async function minesweeper(cols, rows, bombs) {
        if (empty) {
            container.removeChild(empty)
        }
        if (field) {
            field.remove()
        }
        await createCells(cols, rows, bombs);
        await createMatrix(cols, rows, bombs)
        await fillBombs(cols, rows, bombs);
        markCell();
        markerSubtitle.innerHTML = `BOMBS: ${bombs}`
    }

    function markListener() {
        markCounter += 1;
        if (isSound) markerSounds.play()
        if (markCounter % 2 == 0) {
            isMarker = true;
            markerIco.style.opacity = '.5'
        } else {
            isMarker = false;
            markerIco.style.opacity = '1'
        }
    }

    async function markCell() {
        markerIco.style.opacity = 1;
        markerIco.addEventListener('click', markListener);
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

        async function listener (event) {
            if (!isMarker && !event.target.classList.contains('field__cell') && !event.target.classList.contains('container__field')) {
                event.target.closest('.field__cell').setAttribute('marked', false)
                event.target.closest('.field__cell').removeChild(event.target.closest('.field__cell').firstChild);
                markerTitle.innerHTML = parseInt(markerTitle.innerHTML) - 1
            } else {
                if (event.target.classList.contains('field__cell') && !isMarker) {
                    index = parseInt(event.target.getAttribute('number'));
                    await randomize()
                    if (event.target.getAttribute('opened') == 'false') {
                        clicks++;
                        if (clicks == 1) {
                            await fillCells(cols, rows, bombs)
                        }
                        clicksCounter.value = clicks;
                        event.target.setAttribute('opened', true)
                    }
                    openCells(cols, rows, bombs, index);
                }
            }

            if (event.target.classList.contains('field__cell') && isMarker) {
                if (event.target.getAttribute('opened') == 'false') {
                    markerTitle.innerHTML = parseInt(markerTitle.innerHTML) + 1;
                    if (isSound) markerSounds.play()
                    event.target.innerHTML = `<img class="cell__marker" src="${markerImg}" alt="marker" style="width: 100%; height: 100%">`
                    isMarker = false;
                    markCounter -= 1;
                    markerIco.style.opacity = '1';
                    event.target.setAttribute('marked', true)
                }
            }
        }
        field.addEventListener('click', listener);
    }

    async function fillCells(cols, rows) {
        for (let i = 0; i < bombsArray.length; i++) {
            obj[bombsArray[i]] = 'bomb';
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
                } else

                if (bombsArray[i] >= (cols * rows) - cols) {
                    if (bombsArray[i] !== (cols * rows) - cols) obj[diagTopLeft] += 1;
                    if (bombsArray[i] !== (cols * rows) - 1) obj[diagTopRight] += 1;
                } else 
                
                // DIAGONALS - bombsLineLeft
                if (bombsArray[i] % cols == 0 ) {
                    if (bombsArray[i]  !== 0) obj[diagTopRight] += 1;
                    if (bombsArray[i] !== ((cols * rows) - cols)) obj[diagDownRight] += 1;
                    
                } else 
                
                //DIAGONALS - bombsLineRight
                if ((bombsArray[i] + 1) % cols == 0) {
                    if (bombsArray[i] !== cols - 1) obj[diagTopLeft] += 1;
                    if (bombsArray[i] !== (cols * rows) - 1) obj[diagDownLeft] += 1;
                }
            }
        }
    }

    async function openCells(cols, rows, bombs, index) {
        if (obj[index] == 0) {
            cells[index].innerHTML = ' ';
            if (isSound) openSound.play()
        } else if (obj[index] !== 'bomb') cells[index].innerHTML = obj[index];
        cells[index].style.backgroundColor = 'rgba(100, 100, 100, 0.3)'
        if (isSound) openSound.play()
        if (bombsArray.includes(index)) {
            cells[index].innerHTML = `<img src="${bombIcon}" alt="Bomb">`
            cells[index].style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
            if (isSound) boomSound.play()
            gameOver()
        } else {
            let winNumber = (cols * rows) - bombs
            if (clicks == winNumber) congratulations()
        }

        checkInner(cols, rows, bombs, index)
    }

    async function checkInner(cols, rows, bombs, index) {
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
        setTimeout(() => {
            if (isSound) loseSound.play()
        }, 500)
        const background = document.createElement('div');
        background.classList.add('container__blocker');
        const paragraph = document.createElement('p')
        paragraph.classList.add('blocker__content');
        paragraph.innerHTML = 'YOU LOSE! GAME OVER!'
        paragraph.style.color = '#ff2400'
        background.append(paragraph)

        const button = document.createElement('div');
        button.classList.add('blocker__button');
        button.innerHTML = 'Try again'
        background.append(button)
        container.append(background);
        clearInterval(interval)
        //TODO LOCAL STORAGE DURATION

        button.addEventListener('click', () => {
            initGame()
        })

    }

    async function congratulations() {
        if (isSound) winSound.play()
        const background = document.createElement('div');
        background.classList.add('container__blocker');
        const paragraph = document.createElement('p')
        paragraph.classList.add('blocker__content');
        paragraph.innerHTML = 'YOU WIN! CONGRATULATIONS!'
        paragraph.style.color = '#99ff99'
        background.append(paragraph)

        const button = document.createElement('div');
        button.classList.add('blocker__button');
        button.innerHTML = 'Play again'
        background.append(button)
        container.append(background);
        openBombs()
        clearInterval(interval)

        //TODO LOCAL STORAGE DURATION

        button.addEventListener('click', () => {
            initGame()
        })
    }

    async function openBombs() {
        bombsArray.forEach(number => {
            cells[number].innerHTML = `<img src="${bombIcon}" alt="Bomb">`
            cells[number].style.backgroundColor = '#99ff99';
        })
    }

    let interval;

    async function startGame() {
        sound()
        startGameBtn.addEventListener('click', () => {
            if (isSound) openSound.play()
            if (interval) {
                clearInterval(interval)
            }
            startProps()
            duration.value = dur;
            clicksCounter.value = clicks
            if (empty) {
                if (empty.contains(pregame)) empty.removeChild(pregame);
            }
            let counter = [];
            let selectionValue = selection.options[selection.selectedIndex].value;
            for (let i = 10; i < 100; i++) {
                counter.push(i)
            }
            if (counter.includes(parseInt(bombsCount.value))) {
                if (selectionValue == 'Option 1') minesweeper(difficulty['easy'][0], difficulty['easy'][1], bombsCount.value)
                if (selectionValue == 'Option 2') minesweeper(difficulty['medium'][0], difficulty['medium'][1], bombsCount.value)
                if (selectionValue == 'Option 3') minesweeper(difficulty['hard'][0], difficulty['hard'][1], bombsCount.value);
            } else {
                alert ('Incorrect options. Count of bombs should be by 10 to 99');
                initGame()
            }
            gameStarted = true;
            interval = setInterval(() => {
                dur += 1
                duration.value = dur;
            }, 1000)
        })
    }

    function checkIsChecked() {
        if (isChecked) {
            topic.checked = true
            document.querySelector('body').style.color = 'white'
            topicSpan.innerHTML = 'WHITE'
        } else {
            topic.checked = false;
            document.querySelector('body').style.color = 'unset'
            topicSpan.innerHTML = 'DARK'
        }
    }

    await checkContainer()
    await createField(...difficulty['easy']);
    await variables()
    listenTopic()
    checkIsChecked()
    await startGame()
}

initGame()




