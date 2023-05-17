import './styles/style.css'
import createField from "./modules/filed";
import fillBombs from './modules/fillBombs';



async function minesweeper(COLS, ROWS, BOMBS) {
    await createField(COLS, ROWS);

    await fillBombs(BOMBS);

    // await 
    
}

minesweeper(10, 10, 10);