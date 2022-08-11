import "./style.css"
import {ICell} from "./types/ICell";
import {board, getCurrentFigure} from "./components/board";
import {Figures} from "./types/figures";
import {ILine, ILines} from "./types/ILine";
import {getModalTemplate} from "./components/modal";
import {renderSidebar} from "./components/sidebar";
import {IBoard} from "./types/IBoard";

export function start() {
  let boardValues: IBoard = {
    "size": 3,
    "winSeriesInGame": 3,
    "step": 0,
    "cells": initialCells(3),
    "newSize": 3,
    "newWinSeries": 3
  }

  // Рендер элементов
  let wrapper = <HTMLDivElement>document.createElement("div")
  wrapper.classList.add("wrapper")

  let main = <HTMLDivElement>document.createElement("div")
  main.classList.add("main")
  let boardWrapper = <HTMLDivElement>document.createElement("div")
  boardWrapper.classList.add("board")
  boardWrapper.addEventListener("click", handlerCell)
  boardWrapper.appendChild(board(boardValues.cells))

  main.appendChild(boardWrapper)
  let sideBarWrapper = <HTMLDivElement>document.createElement("div")
  let sidebar = renderSidebar(boardValues, handlerNewGame)
  sideBarWrapper.appendChild(sidebar)
  wrapper.appendChild(sideBarWrapper)
  wrapper.appendChild(main)
  document.body.appendChild(wrapper)

  // Проверка локалсторедж
  if (localStorage.getItem("board")) {
    let data = localStorage.getItem("board")
    if (data) {
      boardValues = JSON.parse(data)
      updateBoard()
      updateSidebar()
    }
  }

  //Старт новой игры
  function handlerNewGame(newSize: number = boardValues.size, newWinSeries: number = boardValues.winSeriesInGame) {
    let size = Number.isInteger(newSize) ? newSize : boardValues.size
    let boardNew: IBoard = {
      size: size,
      winSeriesInGame: newWinSeries,
      cells: initialCells(size),
      step: 0,
      newSize: size,
      newWinSeries: newWinSeries
    }
    boardValues = boardNew

    updateBoard()
    updateSidebar()
  }

  // Обработчик клика на ячейку
  function handlerCell(event: MouseEvent, currentFigure: Figures = getCurrentFigure(boardValues.step)) {
    let eventTarget = event.target as HTMLDivElement
    if (eventTarget.classList.contains("cell") && !(eventTarget.classList.contains("disable"))) {
      let x = Number(eventTarget.getAttribute("data-x"));
      let y = Number(eventTarget.getAttribute("data-y"));
      let cell: ICell = {x, y}

      boardValues.cells[Number(y)][Number(x)] = currentFigure
      boardValues.step++

      updateBoard()
      updateSidebar()
      saveToLocalStorage("board", JSON.stringify(boardValues))

      if (checkWin(boardValues.cells, cell, boardValues.winSeriesInGame, currentFigure)) {
        let modalTemplate = getModalTemplate(currentFigure, handlerNewGame)
        boardWrapper.appendChild(modalTemplate)
        localStorage.removeItem("board")
      }
    }
  }
  function updateSidebar() {
    sideBarWrapper.innerHTML = ""
    sideBarWrapper.appendChild(renderSidebar(boardValues, handlerNewGame))
  }
  function updateBoard() {
    boardWrapper.innerHTML = ""
    boardWrapper.appendChild(board(boardValues.cells))
  }

}

start()

// Инициализация доски
export function initialCells(size: number) {
  return [...Array(size)].map(() => Array(size).fill(""))
}

// Проверка победы
export function checkWin(cells: string[][], cell: ICell, winSeriesInGame: number, currentFigure: Figures) {
  // n   =   {x || y}
  // d   =   {x || y} - i
  // i   =   {x || y} + i
  let lines: ILines = {
    "vertical": {x: "n", y: "i", arr: []},
    "horizontal": {x: "i", y: "n", arr: []},
    "mainDiagonal": {x: "i", y: "i", arr: []},
    "secondaryDiagonal": {x: "i", y: "d", arr: []},
  }
  // по координатам х,у получает значения с линий и записывает значения в arr
  Object.keys(lines).map(key => {
    lines[key].arr = checkValuesInLine(cells, winSeriesInGame, cell, lines[key])
  })

  // Содержит ли хотя бы одна линия победную комбинацию
  return Object.keys(lines).some(key => checkWinSeriesInLine(lines[key].arr, winSeriesInGame, currentFigure))
}
export function checkValuesInLine(cells: string[][], winSeriesInGame: number, cell: ICell, line: ILine) {
  let res = []
  for (let i = -winSeriesInGame + 1; i < winSeriesInGame; i++) {
    let x = (line.x === "n") ? cell.x : (line.x === "d") ? cell.x - i : cell.x + i
    let y = (line.y === "n") ? cell.y : (line.y === "d") ? cell.y - i : cell.y + i
    if (x >= 0 && y >= 0 && x < cells.length && y < cells.length) {
      res.push(cells[y][x])
    }
  }
  return res
}
export function checkWinSeriesInLine(array: string[], winSeriesInGame: number, figure: Figures | ""): boolean {
  let count = 0
  for (let i = 0; i <= array.length - 1; i++) {
    let tempCount = array[i] === figure ? count + 1 : 0
    count = tempCount
    if (tempCount === winSeriesInGame) return true
  }
  return false
}
export function saveToLocalStorage(key: string, value: string) {
  localStorage.setItem(key, value)
}
