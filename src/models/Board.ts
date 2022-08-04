import Cell from "./Cell"
import {Values} from "../types/values";

class Board {
  size: number
  cells: Array<Array<Cell>>
  winSeries: number
  step: number

  constructor(size: number, winSeries: number, step: number = 0) {
    this.size = size
    this.step = step
    this.cells = initialBoard(size)
    this.winSeries = winSeries
  }

}

export default Board

//Инициализация доски
export function initialBoard(size: number) {
  let desk: Array<Array<Cell>> = []
  for (let i = 0; i < size; i++) {
    let row: Cell[] = []
    for (let j = 0; j < size; j++) {
      row.push(new Cell( null,i,j ))
    }
    desk.push(row)
  }
  return desk
}
//Получение текущей фигуры
export function getCurrentValue(step: number): Values {
  return step % 2 ? Values.VALUE_X : Values.VALUE_0
}


// Проверка победы
export function checkWin(cells: Cell[][], winSeries: number, cell: Cell, currentValue: Values): boolean {
  // Vertical
  // let x = cell.x + i
  // let y = cell.y

  // Horizontal
  // let x = cell.x
  // let y = cell.y + i

  // MainDiagonal
  // let x = cell.x + i
  // let y = cell.y + i

  // SecondaryDiagonal
  // let x = cell.x - i
  // let y = cell.y + i
  return (
    checkWinInVertical(cells, winSeries, cell, currentValue)
    || checkWinInHorizontal(cells, winSeries, cell, currentValue)
    || checkWinInMainDiagonal(cells, winSeries, cell, currentValue)
    || checkWinInSecondaryDiagonal(cells, winSeries, cell, currentValue)
  )
}
export function checkWinInVertical(cells:Cell[][], winSeries: number, cell: Cell, currentValue: Values) {
  let res = []
  for (let i = -winSeries + 1; i < winSeries; i++) {
    let x = cell.x + i
    let y = cell.y
    if (x >= 0 && y >= 0 && x < cells.length && y < cells.length) {
      res.push(cells[x][y].value)
    }
  }

  return checkWinSeriesInLine(res, winSeries, currentValue)
}
export function checkWinInHorizontal(cells:Cell[][], winSeries: number, cell: Cell, currentValue: Values) {
  let res = []

  for (let i = -winSeries + 1; i < winSeries; i++) {
    let x = cell.x
    let y = cell.y + i
    if (x >= 0 && y >= 0 && x < cells.length && y < cells.length) {
      res.push(cells[x][y].value)
    }
  }

  return checkWinSeriesInLine(res, winSeries, currentValue)
}
export function checkWinInMainDiagonal(cells:Cell[][], winSeries: number, cell: Cell, currentValue: Values) {
  let res = []
  for (let i = -winSeries + 1; i < winSeries; i++) {
    let x = cell.x + i
    let y = cell.y + i
    if (x >= 0 && y >= 0 && x < cells.length && y < cells.length) {
      res.push(cells[x][y].value)
    }
  }
  return checkWinSeriesInLine(res, winSeries, currentValue)
}
export function checkWinInSecondaryDiagonal(cells:Cell[][], winSeries: number, cell: Cell, currentValue: Values) {
  let res = []
  for (let i = -winSeries + 1; i < winSeries; i++) {
    let x = cell.x - i
    let y = cell.y + i
    if (x >= 0 && y >= 0 && x < cells.length && y < cells.length) {
      res.push(cells[x][y].value)
    }
  }
  return checkWinSeriesInLine(res, winSeries, currentValue)
}

export function checkWinSeriesInLine(array: (string | null)[], winSeries: number, value: string): boolean {
  let count = 0
  for (let i = 0; i <= array.length - 1; i++ ) {
    let tempCount = array[i] === value ? count + 1 : 0
    count = tempCount
    if (tempCount === winSeries) return true
  }
  return false
}




