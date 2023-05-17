export default async function createField(cols, rows) {

    const cellSize = '40px';

    const field = document.createElement('div');
    field.classList.add('field');
    field.style.gridTemplateColumns = `repeat(${cols}, ${cellSize})`;
    
    for (let i = 0; i < (cols * rows); i++) {
        const cell = document.createElement('button');
        cell.classList.add('field__cell');
        cell.style.height = cellSize;
        cell.style.width = cellSize;
        cell.setAttribute('number', i)

        field.append(cell)
    }
    document.querySelector('body').append(field);
}