export default async function fillBombs(BOMBS) {
    const cells = document.querySelectorAll('.field__cell');
    const field = document.querySelector('.field')

    let isClicked = false;
    const bombsArray = [];
    let firstClick = 0;

    function randomize () {
        let randomNum = Math.floor(Math.random() * cells.length);
        for (let i = bombsArray.length; i < BOMBS; i++) {
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

    function listener (event) {
        firstClick = event.target.getAttribute('number');
        randomize();
        console.log(bombsArray)
    }

    field.addEventListener('click', listener);
}