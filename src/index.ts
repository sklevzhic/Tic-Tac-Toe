import Board from "./models/Board";
import Cell from "./models/Cell";
import {Operators, Values} from "./types/values";
import { countValues } from "./utils/countValues";
import { getCurrentValue } from "./utils/getCurrentValue";
import { getValueInCell } from "./utils/getValueInCell";

let wrapperBoard = document.querySelector(".wrapper") as HTMLDivElement
let size = document.querySelector("#size") as HTMLInputElement
let winseries = document.querySelector("#winseries") as HTMLInputElement
let figureCurrent = document.querySelector("#figureCurrent") as HTMLSpanElement
let stepHTMl = document.querySelector("#step") as HTMLSpanElement
let winZnak = document.querySelector("#winZnak") as HTMLSpanElement
let modal = document.querySelector("#modalWin") as HTMLDivElement
let startBtn = document.querySelector("#start") as HTMLButtonElement

// Инициализация доски по умолчанию
let board = new Board(10,3)
board.initial()

// Значение по умолчанию закидываем на страницу
size.value = String(board.size)
winseries.value = String(board.winSeries)

//Отрисовка при первом запуске
renderBoard(board.cells)




function renderBoard(array: Array<Array<Cell>>) {
  array.forEach((rowCells: Cell[]) => {
    let boardRow = document.createElement('div');
    boardRow.classList.add("flex")

    rowCells.forEach((cell: Cell) => {

      let boardCell = document.createElement('div');
      boardCell.classList.add("border")
      boardCell.classList.add("w-8")
      boardCell.classList.add("h-8")
      boardCell.classList.add("text-xl")
      boardCell.classList.add("shrink-0")
      boardCell.classList.add("text-center")
      boardCell.classList.add("cursor-default")
      boardCell.classList.add("pt-0.5")
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
        boardCell.onclick = (e: any ) => handlerStep(e, cell)

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


function handlerStep(e: any , cell: Cell) {
  //Получаем текущий знак (X или 0)
  let currentValue = getCurrentValue(board.step)
  //Выводим на экран следующий ход и текущий ход
  stepHTMl.innerText = String(board.step + 1)
  figureCurrent.innerText = getCurrentValue(board.step + 1)


  //В массиве ячеек меняем значение
  board.cells[cell.x][cell.y].value = currentValue
  //Для оптимизации в ячейку ставиться текущий знак (X или 0), не перерисовывая всю доску
  e.target.innerText = currentValue

  if (currentValue === Values.VALUE_X) {
    e.target.classList.add("text-blue-700")
  }
  if (currentValue === Values.VALUE_0) {
    e.target.classList.add("text-red-700")
  }
  e.target.classList.add("pointer-events-none")

  board.step++
  // После каждого хода проверка на победу

  checkWin(cell, currentValue)
}

function checkWin(cell: Cell, currentValue: Values) {
  checkVertical(cell, currentValue)
  checkHorizontal(cell, currentValue)
  checkDiagonal(cell, currentValue)
}

export function checkVertical(cell: Cell, currentValue: Values) {
  let res = []
  //Для оптимизации не проверяется вся строка, а проверяем диапазон  -winSeries 0 winSeries
  let start = cell.x - board.winSeries >= 0 ? cell.x - board.winSeries : 0
  let end = cell.x + board.winSeries >= board.cells.length ? board.cells.length : cell.x + board.winSeries
  //Закидываем в массив значения со столбца для последующей проверки
  for (let i=start; i < end; i++) {
    res.push(board.cells[i][cell.y].value)
  }

  return countValues(res, board.winSeries, currentValue) ? showModal(currentValue)  : ""

}
export function checkHorizontal(cell: Cell, currentValue: Values) {
  let res = []
  //Для оптимизации не проверяется вся строка, а проверяем диапазон  -winSeries 0 winSeries
  let start = cell.y - board.winSeries > 0 ? cell.y - board.winSeries : 0
  let end = cell.y + board.winSeries >= board.cells.length ? board.cells.length : cell.y + board.winSeries
  //Закидываем в массив значения со строки для последующей проверки
  for (let i=start; i <end; i++) {
    res.push(board.cells[cell.x][i].value)
  }

  return countValues(res, board.winSeries, currentValue) ? showModal(currentValue) : ""
}
function checkDiagonal(cell: Cell, currentValue: Values) {
  let res1 = []
  let res2 = []
  let x = cell.x
  let y = cell.y
  //Для оптимизации не проверяется вся диагональ, а проверяем диапазон  -winSeries 0 winSeries
  for (let i=-board.winSeries; i < board.winSeries; i++) {
    //Проходим по диапазону ячеек и пушим в массив для проверки по двум диагоналям
    let res11 = getValueInCell(board.cells, x, Operators.DEC, y, Operators.DEC, i, currentValue)
    let res22 = getValueInCell(board.cells, x, Operators.INC, y, Operators.DEC, i, currentValue)
    res1.push(res11)
    res2.push(res22)
  }

  countValues(res1, board.winSeries, currentValue) ? showModal(currentValue) : ""
  countValues(res2, board.winSeries, currentValue) ? showModal(currentValue) : ""

}

size.addEventListener("input", handleSizeDesk)
winseries.addEventListener("input", handleWinSeries)
startBtn.addEventListener("click", rerenderDesk)



function handleSizeDesk(e: any) {
  board.size = +size.value
}

function handleWinSeries() {
  board.winSeries = +winseries.value
}

function showModal(value: string) {
  modal.classList.remove("hidden")
  winZnak.innerText = value
}

function rerenderDesk() {
  let sizeTemp = +size.value < 3 ? 3 : +size.value > 55 ? 55 : +size.value

  let winSeriesTemp = +winseries.value < 3
    ? 3
    : +winseries.value > sizeTemp
      ? sizeTemp
      : +winseries.value

  size.value = String(sizeTemp)
  winseries.value = String(winSeriesTemp)

  board = new Board(sizeTemp, winSeriesTemp)
  board.initial()
  wrapperBoard.innerHTML = ""
  stepHTMl.innerText = "0"
  modal.classList.add("hidden")
  figureCurrent.innerText = "X"
  renderBoard(board.cells)
}

