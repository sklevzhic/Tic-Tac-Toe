import { Figures } from "../types/figures";

export const renderBoard = (cells: string[][]) => {
    return renderCells(cells);
};
// Рендер Ячеек
export function renderCells(cells: string[][]) {
    const wrapperCells = document.createElement("div");

    wrapperCells.classList.add("cells__wrapper");

    for (const [ y, rowCells ] of cells.entries()) {
        const cellsRow = document.createElement("div");

        cellsRow.classList.add("cells__row");

        for (const [ x, cell ] of rowCells.entries()) {
            cellsRow.append(renderCell(x, y, cell));
        }

        wrapperCells.append(cellsRow);
    }

    return wrapperCells;
}

// Рендер Ячейки
export function renderCell(x: number, y: number, value: string) {
    const cell = document.createElement("div");

    cell.dataset.x = String(x);
    cell.dataset.y = String(y);
    cell.classList.add("cell");

    if (value === Figures.FIGUREX) {
        cell.classList.add("cell__X");
    }
    if (value === Figures.FIGURE0) {
        cell.classList.add("cell__0");
    }
    if (value) {
        cell.classList.add("disable");
    }

    cell.textContent = value;

    return cell;
}

export function getIndexCurrentUser(step: number): number {
    const DIVIDER_TWO = 2;

    return step % DIVIDER_TWO;
}
