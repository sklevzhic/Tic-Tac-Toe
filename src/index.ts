import "./style.css"
import {ICell} from "./types/ICell";
import {getCurrentFigure, renderBoard} from "./components/board";
import {Figures} from "./types/figures";
import {ILine, ILines} from "./types/ILine";
import {renderModal} from "./components/modal";
import {renderSidebar} from "./components/sidebar";
import {IBoard} from "./types/IBoard";

export function start() {
  let boardValues: IBoard = {
    "isStart": true,
    "size": 3,
    "winSeriesInGame": 3,
    "step": 0,
    "cells": initialCells(3),
    "newSize": 3,
    "newWinSeries": 3,
    "users": [
      {name: "Player X", win: 0, figure: Figures.FIGUREX},
      {name: "Player 0", win: 0, figure: Figures.FIGURE0}
    ]
  }

  // Рендер разметки
  let wrapper = <HTMLDivElement>document.createElement("div")
  wrapper.classList.add("wrapper")

  // Создание сайтбара (настроек и информации)
  let sideBarWrapper = <HTMLDivElement>document.createElement("div")
  let sidebar = renderSidebar(boardValues, handlerNewGame, resetUsersInformation)
  sideBarWrapper.appendChild(sidebar)
  // Создание доски
  let main = <HTMLDivElement>document.createElement("div")
  main.classList.add("main")
  let boardWrapper = <HTMLDivElement>document.createElement("div")
  boardWrapper.classList.add("board")
  boardWrapper.addEventListener("click", handlerCell)
  boardWrapper.appendChild(renderBoard(boardValues.cells))
  main.appendChild(boardWrapper)

  // Добавление сайтбара и доски
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
    boardValues.size = size
    boardValues.winSeriesInGame = newWinSeries
    boardValues.cells = initialCells(size)
    boardValues.step = 0
    boardValues.newWinSeries = newWinSeries
    boardValues.newSize = size
    updateBoard()
    updateSidebar()
    localStorage.setItem("board", JSON.stringify(boardValues))
  }

  // Обработчик клика на ячейку
  function handlerCell(event: MouseEvent) {
    // Получаем фигуру пользователя
    let currentFigure:Figures = boardValues.users[getIndexCurrentUser(boardValues.step)].figure

    let eventTarget = event.target as HTMLDivElement
    if (eventTarget.classList.contains("cell") && !(eventTarget.classList.contains("disable"))) {
      let x = Number(eventTarget.getAttribute("data-x"));
      let y = Number(eventTarget.getAttribute("data-y"));
      let cell: ICell = {x, y}
      boardValues.cells[Number(y)][Number(x)] = currentFigure
      boardValues.step++
      // 2 способа: 1 -  без перерисовок доски
      eventTarget.textContent = currentFigure
      eventTarget.classList.add(currentFigure === "X" ? "cell__X" : "cell__0")
      eventTarget.classList.add("disable")
      // 2 способа: 2 - перерисовка доски (менее производительно)
      // updateBoard()

      updateSidebar()

      localStorage.setItem("board", JSON.stringify(boardValues))

      let resultGame = checkWin(boardValues.cells, cell, boardValues.winSeriesInGame, boardValues.step - 1, currentFigure)
      if (resultGame) {
        let modalTemplate = renderModal(resultGame, handlerNewGame)
        if (resultGame.includes("Победа")) {
          boardValues.users.map(user => {
            if (user.name.includes(currentFigure)) {
              return user.win += 1
            }
          })
        }
        boardWrapper.appendChild(modalTemplate)
        localStorage.setItem("board", JSON.stringify({...boardValues, cells: initialCells(boardValues.size), step: 0}))
      }
    }
  }

  function resetUsersInformation () {
    boardValues.users.forEach(el => {
      el.win = 0
    })
    updateSidebar()
  }



  function updateSidebar() {
    sideBarWrapper.innerHTML = ""
    sideBarWrapper.appendChild(renderSidebar(boardValues, handlerNewGame, resetUsersInformation))
  }

  function updateBoard() {
    boardWrapper.innerHTML = ""
    boardWrapper.appendChild(renderBoard(boardValues.cells))
  }

}

start()

// Инициализация доски
export function initialCells(size: number): string[][] {
  return [...Array(size)].map(() => Array(size).fill(""))
}

// Проверка победы
export function checkWin(cells: string[][], cell: ICell, winSeriesInGame: number, step: number, figure: Figures): string {
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
  if (Object.keys(lines).some(key => checkWinSeriesInLine(lines[key].arr, winSeriesInGame, figure))) {
    return `<p>Победа <span class="activeFigure">${figure}</span></p>`
  }
  if (step === cells.length * cells.length - 1) {
    return "<p>Ничья</p>"
  }
  return ""
}

export function checkValuesInLine(cells: string[][], winSeriesInGame: number, cell: ICell, line: ILine): string[] {
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

export function checkWinSeriesInLine(array: string[], winSeriesInGame: number, figure: Figures): boolean {
  let count = 0
  for (let i = 0; i <= array.length - 1; i++) {
    let tempCount = array[i] === figure ? count + 1 : 0
    count = tempCount
    if (tempCount === winSeriesInGame) return true
  }
  return false
}

function getIndexCurrentUser(step: number): number {
  return step % 2
}




















































