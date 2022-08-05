import {Figures} from "../types/figures";

export const board = (cells: string[][]) => {
  return renderCells(cells)
}
// Рендер Ячеек
export function renderCells(cells: string[][]) {
  let wrapperCells = document.createElement("div")
  wrapperCells.classList.add("cells__wrapper")
  cells.forEach((rowCells, y) => {
    let cellsRow = document.createElement("div")
    cellsRow.classList.add("cells__row")
    rowCells.forEach((cell, x) => {
      cellsRow.appendChild(renderCell(x, y, cell))
    })
    wrapperCells.appendChild(cellsRow)
  })

  return wrapperCells
}

// Рендер Ячейки
function renderCell(x: number, y: number, value: string) {
  let cell = document.createElement("div")
  cell.setAttribute("data-x", String(x))
  cell.setAttribute("data-y", String(y))
  cell.classList.add("cell")
  cell.innerText = value
  return cell
}

export function getCurrentFigure(step: number): Figures {
  return step % 2 ? Figures.FIGURE0 : Figures.FIGUREX
}
