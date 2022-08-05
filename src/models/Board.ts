// import Cell from "./Cell"
// import {Figures} from "../types/values";
//
// class Board {
//   size: number
//   cells: Array<Array<Cell>>
//   winSeries: number
//   step: number
//
//   constructor(size: number, winSeries: number, step: number = 0) {
//     this.size = size
//     this.step = step
//     this.cells = initialCells(size)
//     this.winSeries = winSeries
//   }
//
// }
//
// export default Board
//
// //Инициализация доски
// export function initialCells(size: number) {
//   let cells: Array<Array<Cell>> = []
//   for (let y = 0; y < size; y++) {
//     let row: Cell[] = []
//     for (let x = 0; x < size; x++) {
//       row.push(new Cell( null,x,y ))
//     }
//     cells.push(row)
//   }
//   return cells
// }
// //Получение текущей фигуры
// export function getCurrentValue(step: number): Figures {
//   return step % 2 ? Figures.VALUE_X : Figures.VALUE_0
// }
//
//
// // Проверка победы
// export function checkWin(cells: Cell[][], winSeries: number, cell: Cell, currentValue: Figures):boolean {
//   let vertical = checkValuesInVertical(cells, winSeries, cell)
//   let horizontal = checkValuesInHorizontal(cells, winSeries, cell)
//   let mainDiagonal = checkValuesInMainDiagonal(cells, winSeries, cell)
//   let secondaryDiagonal = checkValuesInSecondaryDiagonal(cells, winSeries, cell)
//   let arrays = [vertical, horizontal, mainDiagonal, secondaryDiagonal]
//   return arrays.some(arr => checkWinSeriesInLine(arr, winSeries, currentValue))
// }
//
// export function checkValuesInVertical(cells:Cell[][], winSeries: number, cell: Cell) {
//   let res = []
//   for (let i = -winSeries + 1; i < winSeries; i++) {
//     let x = cell.x
//     let y = cell.y + i
//     if (x >= 0 && y >= 0 && x < cells.length && y < cells.length) {
//       res.push(cells[y][x].value)
//     }
//   }
//   return res
// }
// export function checkValuesInHorizontal(cells:Cell[][], winSeries: number, cell: Cell) {
//   let res = []
//
//   for (let i = -winSeries + 1; i < winSeries; i++) {
//     let x = cell.x + i
//     let y = cell.y
//     if (x >= 0 && y >= 0 && x < cells.length && y < cells.length) {
//       res.push(cells[y][x].value)
//     }
//   }
//   return res
// }
// export function checkValuesInMainDiagonal(cells:Cell[][], winSeries: number, cell: Cell) {
//   let res = []
//   for (let i = -winSeries + 1; i < winSeries; i++) {
//     let x = cell.x + i
//     let y = cell.y + i
//     if (x >= 0 && y >= 0 && x < cells.length && y < cells.length) {
//       res.push(cells[y][x].value)
//     }
//   }
//
//   return res
// }
// export function checkValuesInSecondaryDiagonal(cells:Cell[][], winSeries: number, cell: Cell) {
//   let res = []
//   for (let i = -winSeries + 1; i < winSeries; i++) {
//     let x = cell.x + i
//     let y = cell.y - i
//     if (x >= 0 && y >= 0 && x < cells.length && y < cells.length) {
//       res.push(cells[y][x].value)
//     }
//   }
//   return res
// }
//
// export function checkWinSeriesInLine(array: (string | null)[], winSeries: number, value: string): boolean {
//   let count = 0
//   for (let i = 0; i <= array.length - 1; i++ ) {
//     let tempCount = array[i] === value ? count + 1 : 0
//     count = tempCount
//     if (tempCount === winSeries) return true
//   }
//   return false
// }
//
//
//
//
