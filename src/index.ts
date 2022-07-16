import "./style.css"
import Board from "./models/Board";
import Cell from "./models/Cell";
import {Operators, Values} from "./types/values";

let step = 0

let wrapperBoard = document.querySelector(".wrapper") as HTMLDivElement

let board = new Board(100,5)
board.initial()

renderBoard(board.cells)













function renderBoard(array: Array<Array<Cell>>) {
  let currentValue = getCurrentValue(step)

  array.forEach((rowCells: Cell[]) => {
    let boardRow = document.createElement('div');
    boardRow.classList.add("flex")

    rowCells.forEach((cell: Cell) => {

      let boardCell = document.createElement('div');
      boardCell.classList.add("border")
      boardCell.classList.add("w-14")
      boardCell.classList.add("h-14")
      boardCell.classList.add("text-3xl")
      boardCell.classList.add("text-center")
      boardCell.classList.add("cursor-default")
      boardCell.classList.add("pt-1.5")
      if (cell.value === Values.VALUE_X) {
        boardCell.classList.add("text-blue-700")
        boardCell.innerText = cell.value
        boardCell.classList.add("cursor-default")
      }
      if (cell.value === Values.VALUE_0) {
        boardCell.classList.add("text-red-700")
        boardCell.innerText = cell.value
        boardCell.classList.add("cursor-default")
      }
      if (!cell.value) {
        boardCell.onclick = (e: any ) => handlerStep(e, cell, currentValue)

        boardCell.classList.add("text-gray-700")
        boardCell.classList.add("cursor-pointer")
        // boardCell.classList.add("text-opacity-0")
        boardCell.classList.add("hover:bg-gray-200")
        boardCell.classList.add("hover:text-opacity-50")
      }

      boardRow.appendChild(boardCell)
    })
    wrapperBoard.appendChild(boardRow)
  })
}
function handlerStep(e: any , cell: Cell, currentValue: Values) {
  console.log(step)
  console.log(currentValue)
  board.cells[cell.x][cell.y].value = currentValue
  e.target.innerText = currentValue

  if (currentValue === Values.VALUE_X) {
    e.target.classList.add("text-blue-700")
  }
  if (currentValue === Values.VALUE_0) {
    e.target.classList.add("text-red-700")
  }

  step++
  // wrapperBoard.innerHTML = ""


  checkWin(cell, currentValue)
  // renderBoard(board.cells)
}
function getCurrentValue(step: number) {
  return step % 2 ? Values.VALUE_0 : Values.VALUE_X
}

function checkVertical(cell: Cell, currentValue: Values) {
  let res = []
  let start = cell.x - board.winSeries >= 0 ? cell.x - board.winSeries : 0
  let end = cell.x + board.winSeries >= board.cells.length ? board.cells.length : cell.x + board.winSeries
  for (let i=start; i < end; i++) {
    res.push(board.cells[i][cell.y].value)
  }

  return countValues(res, board.winSeries, currentValue)

}
function checkHorizontal(cell: Cell, currentValue: Values) {
  let res = []
  let start = cell.y - board.winSeries > 0 ? cell.y - board.winSeries : 0
  let end = cell.y + board.winSeries >= board.cells.length ? board.cells.length : cell.y + board.winSeries


  for (let i=start; i <end; i++) {
    res.push(board.cells[cell.x][i].value)
  }
  return countValues(res, board.winSeries, currentValue)
}
function checkDiagonal(cell: Cell, currentValue: Values) {
  let res1 = []
  let res2 = []
  let x = cell.x
  let y = cell.y

  for (let i=-board.winSeries; i < board.winSeries; i++) {
    let res11 = checkCell(x, Operators.DEC, y, Operators.DEC, i, currentValue)
    let res22 = checkCell(x, Operators.INC, y, Operators.DEC, i, currentValue)
    res1.push(res11)
    res2.push(res22)
    countValues(res1, board.winSeries, currentValue)
    countValues(res2, board.winSeries, currentValue)

  }

}


function checkWin(cell: Cell, currentValue: Values) {
  checkVertical(cell, currentValue)
  checkHorizontal(cell, currentValue)
  checkDiagonal(cell, currentValue)
}


function countValues(array: (Values | null)[], winSeries: number, value: Values) {

  let count = 0
  array.forEach(el => {

    if (el === value) {
      count++
    } else {
      count = 0
    }
    if (count === winSeries) {
      alert("win")
    }
  })
}
function checkCell(x:number, xOperator: string,  y:number,yOperator: string, i: number, currentValue: Values):Values | null {
  let x1 = xOperator === Operators.DEC ? x-i : x+i
  let y1 = yOperator === Operators.DEC ? y-i : y+i

  let a = x1 >= 0
  let b = y1 >= 0
  let c = x1 < board.size
  let d = y1 < board.size
  let condition = (a && b && c && d) ? board.cells[x1][y1].value === currentValue : false

  return condition ? board.cells[x1][y1].value : null
}

