import Cell from "./Cell"
import {Operators, Values} from "../types/values";

class Board {
  size: number
  cells: Array<Array<Cell>> = []
  winSeries: number
  step: number
  constructor(size: number, winSeries: number, step: number = 0) {
    this.size = size
    this.step = step
    this.winSeries = winSeries
  }

  initial() {
    this.cells = initialBoard(this.size)
  }

}

export default Board

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
export function getCurrentValue(step: number): Values {
  return step % 2 ? Values.VALUE_X : Values.VALUE_0
}
export function checkWinSeriesInLine(array: (string | null)[], winSeries: number, value: string) {
  // Счетчик значений в массиве, который пришел на проверку
  let count = 0
  for (let i = 0; i <= array.length - 1; i++ ) {
    let tempCount = array[i] === value ? count + 1 : 0
    count = tempCount
    if (tempCount === winSeries) return true
  }
  return false
}
export function getValueInCell(array: Cell[][], x:number, xOperator: string,  y:number, yOperator: string, i: number, currentValue: Values):Values | null {
  debugger
  let x1 = xOperator === Operators.DEC ? x-i : x+i
  let y1 = yOperator === Operators.DEC ? y-i : y+i
  let a = x1 >= 0
  let b = y1 >= 0
  let c = x1 < array.length
  let d = y1 < array.length
  let condition = (a && b && c && d) ? array[x1][y1].value === currentValue : false

  return condition ? array[x1][y1].value : null
}







