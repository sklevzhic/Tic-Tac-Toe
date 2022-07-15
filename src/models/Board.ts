import Cell from "./Cell"

class Board {
  size: number
  cells: Array<Array<Cell>> = []
  winSeries: number
  constructor(size: number, winSeries: number) {
    this.size = size
    this.winSeries = winSeries
  }

  initial() {
    this.cells = initialBord(this.size)
  }

}

function initialBord(size: number) {
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
