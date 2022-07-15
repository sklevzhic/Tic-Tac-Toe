import "./style.css"
import Board from "./models/Board";
import Cell from "./models/Cell";
import {Values} from "./types/values";

let wrapperBoard = document.querySelector(".wrapper") as HTMLDivElement
let step = 0
let board = new Board(10,3)
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
        boardCell.onclick = () => handlerStep(cell, currentValue)
        boardCell.innerText = currentValue
        boardCell.classList.add("text-gray-700")
        boardCell.classList.add("cursor-pointer")
        boardCell.classList.add("text-opacity-0")
        boardCell.classList.add("hover:bg-gray-200")
        boardCell.classList.add("hover:text-opacity-50")
      }

      boardRow.appendChild(boardCell)
    })
    wrapperBoard.appendChild(boardRow)
  })
}

function handlerStep(cell: Cell, currentValue: Values) {
  board.cells[cell.x][cell.y].value = currentValue
  step++
  wrapperBoard.innerHTML = ""
  checkWin(cell, currentValue)

  renderBoard(board.cells)
}

function getCurrentValue(step: number) {
  return step % 2 ? Values.VALUE_0 : Values.VALUE_X
}

function checkVertical(cell: Cell, currentValue: Values) {
  let res = board.cells.map(el => el[cell.y].value)
  return countValues(res, board.winSeries, currentValue)

}
function checkHorizontal(cell: Cell, currentValue: Values) {
  let res = board.cells[cell.x].map(el => el.value)
  return countValues(res, board.winSeries, currentValue)
}
function checkDiagonalBT(cell: Cell, currentValue: Values) {
  let res = []
  let count = cell.x + cell.y
  let x = count > board.size - 1 ? board.size - 1 : count
  let y = count <= board.size - 1 ? 0 : count - board.size + 1
  count = y > 0 ? x - y : count

  for (let i = 0; i <= count; i++) {
    res.push(board.cells[x][y].value)
    x--
    y++
  }
  return countValues(res, board.winSeries, currentValue)
}
function checkDiagonalTB(cell: Cell, currentValue: Values) {
  let res = []
  let count = cell.x - cell.y
  let x = count < 0 ? 0 : Math.abs(count)
  let y = count > 0 ? 0 : Math.abs(count)
  count = board.size - 1 - Math.abs(count)

  for (let i = 0; i <= count; i++) {
    res.push(board.cells[x][y].value)
    x++
    y++
  }
  return countValues(res, board.winSeries, currentValue)
}

function checkWin(cell: Cell, currentValue: Values) {
  checkVertical(cell, currentValue)
  checkHorizontal(cell, currentValue)
  checkDiagonalBT(cell, currentValue)
  checkDiagonalTB(cell, currentValue)
}


function countValues(array: (Values | null)[], winSeries: number, value: Values) {

  let count = 0
  array.forEach(el => {
    if (count === winSeries) {
      alert("win")
    }
    if (el === value) {
      count++
    } else {
      count = 0
    }
  })


  return
}
