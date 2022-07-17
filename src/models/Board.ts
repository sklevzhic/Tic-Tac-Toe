import Cell from "./Cell"

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
    let cells = initialBord(this.size)
    this.cells = cells
  }

}

export function initialBord(size: number) {
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

export default Board
