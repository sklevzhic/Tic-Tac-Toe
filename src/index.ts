import Board, {checkWinSeriesInLine, getValueInCell} from "./models/Board"
import Cell from "./models/Cell";
import {getCurrentValue} from "./models/Board";
import {Operators, Values} from "./types/values";

let currentStep = document.querySelector("#step") as HTMLSpanElement
let currentFigure = document.querySelector("#figureCurrent") as HTMLSpanElement
let boardWrapper = document.querySelector("#board") as HTMLDivElement
let sizeInput = document.querySelector("#size") as HTMLInputElement
let winSeriesInput = document.querySelector("#winSeries") as HTMLInputElement
let startBtn = document.querySelector("#start") as HTMLButtonElement


//Инициализауия доски
let board = new Board(3, 3)
board.initial()

//Проверка в localStorage
if (localStorage.getItem("board")) {
  let value = localStorage.getItem("board")
  let res = JSON.parse(value || "")
  board = {...res}
}

//Отрисовка доски и информации
rerenderTemplate(board);

export function rerenderTemplate(board: Board) {
  boardWrapper.innerHTML = ""
  currentStep.innerText = String(board.step);
  currentFigure.innerText = getCurrentValue(board.step + 1);
  sizeInput.value = String(board.size)
  winSeriesInput.value = String(board.winSeries);
  let templateBoard = renderBoard(board)
  boardWrapper.appendChild(templateBoard);
}

export function renderBoard(board: Board): HTMLDivElement {
  let wrapper = document.createElement('div');
  wrapper.classList.add("wrapper")
  wrapper.classList.add("flex")
  wrapper.classList.add("flex-col")
  board.cells.forEach((rowCells: Cell[]) => {
    let boardRow = document.createElement('div');
    boardRow.classList.add("flex");
    rowCells.forEach((cell: Cell) => {

      let boardCell = document.createElement('div');
      boardCell.classList.add("border");
      boardCell.classList.add("w-8");
      boardCell.classList.add("h-8");
      boardCell.classList.add("text-xl");
      boardCell.classList.add("shrink-0");
      boardCell.classList.add("text-center");
      boardCell.classList.add("cursor-default");
      boardCell.classList.add("pt-0.5");
      if (cell.value === Values.VALUE_X) {
        boardCell.classList.add("text-blue-700");
        boardCell.innerText = cell.value;
        boardCell.classList.add("cursor-default");
      }
      if (cell.value === Values.VALUE_0) {
        boardCell.classList.add("text-red-700");
        boardCell.innerText = cell.value;
        boardCell.classList.add("cursor-default");
      }
      if (!cell.value) {
        boardCell.addEventListener("click", () => handlerStep(cell))
        boardCell.classList.add("text-gray-700");
        boardCell.classList.add("cursor-pointer");
        boardCell.classList.add("hover:bg-gray-200");
        boardCell.classList.add("hover:text-opacity-50");
      }

      boardRow.appendChild(boardCell);
    })
    wrapper.appendChild(boardRow);
  })
  return wrapper
}

export function handlerStep(cell: Cell) {
  ++board.step
  board.cells[cell.x][cell.y].value = getCurrentValue(board.step)
  rerenderTemplate(board)
  localStorage.setItem("board", JSON.stringify(board))

  checkWin(cell, getCurrentValue(board.step))
}

//Проверка победы
function checkWin(cell: Cell, currentValue: Values) {
  console.log("cell", cell)
  checkMainDiagonal(cell, currentValue)
  if (checkVertical(cell, currentValue) || checkHorizontal(cell, currentValue)) {
    showModal(currentValue)
  }
}

export function checkVertical(cell: Cell, currentValue: Values) {
  let res = []
  //Для оптимизации не проверяется вся строка, а проверяем диапазон  -winSeries 0 winSeries
  let start = cell.x - board.winSeries >= 0 ? cell.x - board.winSeries : 0
  let end = cell.x + board.winSeries >= board.cells.length ? board.cells.length : cell.x + board.winSeries
  //Закидываем в массив значения со столбца для последующей проверки
  for (let i = start; i < end; i++) {
    res.push(board.cells[i][cell.y].value)
  }
  return checkWinSeriesInLine(res, board.winSeries, currentValue)
}

export function checkHorizontal(cell: Cell, currentValue: Values) {
  let res = []
  //Для оптимизации не проверяется вся строка, а проверяем диапазон  -winSeries 0 winSeries
  let start = cell.y - board.winSeries > 0 ? cell.y - board.winSeries : 0
  let end = cell.y + board.winSeries >= board.cells.length ? board.cells.length : cell.y + board.winSeries
  //Закидываем в массив значения со строки для последующей проверки
  for (let i = start; i < end; i++) {
    res.push(board.cells[cell.x][i].value)
  }

  return checkWinSeriesInLine(res, board.winSeries, currentValue)
}

export function checkMainDiagonal(cell: Cell, currentValue: Values) {

  for (let i = -board.winSeries; i <= board.winSeries; i++) {
    console.log(cell.x - i)
    console.log(cell.y + i)
  }
}

export function checkSecondaryDiagonal(cell: Cell, currentValue: Values) {

}

function checkDiagonals(cell: Cell, currentValue: Values) {
  // let res1 = []
  // let res2 = []
  // //Для оптимизации не проверяется вся диагональ, а проверяем диапазон  -winSeries 0 winSeries
  // for (let i=-board.winSeries; i < board.winSeries; i++) {
  //   //Проходим по диапазону ячеек и пушим в массив для проверки по двум диагоналям
  //   let res11 = getValueInCell(board.cells, cell.x, Operators.DEC, cell.y, Operators.DEC, i, currentValue)
  //   let res22 = getValueInCell(board.cells, cell.x, Operators.INC, cell.y, Operators.DEC, i, currentValue)
  //   res1.push(res11)
  //   res2.push(res22)
  // }
  // let x = 1
  //
  // // return (checkWinSeriesInLine(res1, board.winSeries, currentValue) || checkWinSeriesInLine(res2, board.winSeries, currentValue))
  // return true
}

//В случае победы - показ модального окна
function showModal(value: string) {
  let modal = `
    <div  class="absolute top-1/2 left-1/2 p-4 w-full h-full bg-opacity-20 transform -translate-x-1/2 -translate-y-1/2 bg-red-200">
    <div class="text-center items-center">Победа <span>${value}</span></div>
  </div> `
  boardWrapper.innerHTML += modal
  localStorage.removeItem("board")
}

//Настройки для новой игры
sizeInput.addEventListener("blur", handleSizeDesk)
winSeriesInput.addEventListener("blur", handleWinSeries)
startBtn.addEventListener("click", handleNewGame)

function handleSizeDesk() {
  sizeInput.value = String(+sizeInput.value < 3 ? 3 : +sizeInput.value > 55 ? 55 : +sizeInput.value)
}

function handleWinSeries() {
  let winSeriesTemp = +winSeriesInput.value < 3
    ? 3
    : +winSeriesInput.value > board.size
      ? board.size
      : +winSeriesInput.value

  winSeriesInput.value = String(winSeriesTemp)
}

function handleNewGame() {
  board = new Board(+sizeInput.value, +winSeriesInput.value)
  board.initial()
  board.size = +sizeInput.value
  board.winSeries = +winSeriesInput.value

  rerenderTemplate(board)
}

