import "./style.css"
import Board from "./models/Board";
import Cell from "./models/Cell";
import {Values} from "./types/values";

let wrapperBoard = document.querySelector(".wrapper") as HTMLDivElement
let step = 0
let board = new Board(5)
board.initial()

renderBoard(board.cells)








function renderBoard(array:Array<Array<Cell>>) {
  array.forEach((rowCells: Cell[]) => {
    let boardRow = document.createElement('div');
    boardRow.classList.add("flex")

    rowCells.forEach((cell:Cell) => {

      let boardCell = document.createElement('div');
      boardCell.onclick = () => handlerStep(cell)
      boardCell.classList.add("border")
      boardCell.classList.add("w-14")
      boardCell.classList.add("h-14")
      boardCell.classList.add("text-3xl")
      boardCell.classList.add("text-center")
      boardCell.classList.add("pt-1.5")
      // if (cell.value === "X") {
      //   boardCell.classList.add("text-blue-700")
      //   boardCell.innerText = cell.value
      // }
      // if (cell.value === "0") {
      //   boardCell.classList.add("text-red-700")
      //   boardCell.innerText = cell.value
      // }
      // if (!cell.value) {
      //     boardCell.classList.add(step % 2 !== 0 ? "text-red-700" : "text-blue-700" )
      //     boardCell.classList.add("text-opacity-0")
      //     boardCell.classList.add("hover:bg-gray-200")
      //     boardCell.classList.add("hover:text-opacity-50")
      //     boardCell.innerText = step % 2 !== 0 ? "0" : "X"
      // }
      // @ts-ignore
      boardCell.innerText = cell.value
      boardRow.appendChild(boardCell)
    })
    wrapperBoard.appendChild(boardRow)
  })
}

function handlerStep(cell: Cell) {

  // let currentValue = step % 2 !== 0 ? "0" : "X"
  // if (!board.cells[colIdx][rowIdx].value) {
  //   board.cells[colIdx][rowIdx].value = currentValue
  //   wrapper.innerHTML = ``
  //   step++
  //   renderBoard()
  //   board.checkWin(rowIdx, colIdx, currentValue)
  // }

  // console.log(cell.x)
  // console.log(cell.y)
  // @ts-ignore
  board.cells[cell.x][cell.y].value = Values.VALUE_X
  wrapperBoard.innerHTML = ""
  renderBoard(board.cells)
  console.log(board.cells)
}


