import "./style.css"
import {ICell} from "./types/ICell";
import {getIndexCurrentUser, renderBoard} from "./components/board";
import {Figures} from "./types/figures";
import {ILine, ILines} from "./types/ILine";
import {renderModal} from "./components/modal";
import {IBoard} from "./types/IBoard";
import {renderInformation} from "./components/information";
import {renderSettingsNewGame} from "./components/settings";

export function start() {
  let boardValues: IBoard = {
    "size": 3,
    "winSeriesInGame": 3,
    "step": 0,
    "cells": initialCells(3),
    "newSize": 3,
    "newWinSeries": 3,
    "users": [
      {name: "Player", win: 0, figure: Figures.FIGUREX},
      {name: "Player", win: 0, figure: Figures.FIGURE0},
    ]
  }

  // разметка
  let wrapper = <HTMLDivElement>document.createElement("div")
  wrapper.classList.add("wrapper")

  // разметка сайтбар
  let sideBarWrapper = <HTMLDivElement>document.createElement("div")
  let sidebar = document.createElement("div")
  sidebar.classList.add("sidebar")
  const informationWrapper = <HTMLDivElement>document.createElement("div")
  informationWrapper.classList.add("informationWrapper")
  informationWrapper.innerHTML = ""
  informationWrapper.appendChild(renderInformation(boardValues, resetUsersInformation))
  let settingsWrapper = <HTMLDivElement>document.createElement("div")
  settingsWrapper.classList.add("settingsWrapper")
  settingsWrapper.appendChild(renderSettingsNewGame(boardValues.newSize, boardValues.newWinSeries, handlerNewGame))
  sideBarWrapper.appendChild(sidebar)
  sidebar.appendChild(informationWrapper)
  sidebar.appendChild(settingsWrapper)
  sideBarWrapper.appendChild(informationWrapper)
  sideBarWrapper.appendChild(settingsWrapper)

  // разметка сайтбар
  let main = <HTMLDivElement>document.createElement("div")
  main.classList.add("main")
  let boardWrapper = <HTMLDivElement>document.createElement("div")
  boardWrapper.classList.add("board")
  boardWrapper.addEventListener("click", handlerCell)
  boardWrapper.appendChild(renderBoard(boardValues.cells))
  main.appendChild(boardWrapper)

  // Добавление разметки сайтбара и доски
  wrapper.appendChild(sideBarWrapper)
  wrapper.appendChild(main)
  document.body.appendChild(wrapper)

  // Проверка локалсторедж
  if (localStorage.getItem("board")) {
    let data = localStorage.getItem("board")
    if (data) {
      boardValues = JSON.parse(data)
      updateSettings()
      updateInformation()
      updateBoard()
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
    updateInformation()
    if (Number.isInteger(newSize)) {
      resetUsersInformation()
    }
    localStorage.setItem("board", JSON.stringify(boardValues))
  }

  // Обработчик клика на ячейку
  function handlerCell(event: MouseEvent) {
    // Получаем фигуру пользователя
    let currentFigure: Figures = boardValues.users[getIndexCurrentUser(boardValues.step)].figure

    let eventTarget = event.target as HTMLDivElement
    if (eventTarget.classList.contains("cell") && !(eventTarget.classList.contains("disable"))) {
      let x = Number(eventTarget.getAttribute("data-x"));
      let y = Number(eventTarget.getAttribute("data-y"));
      let cell: ICell = {x, y}
      boardValues.cells[Number(y)][Number(x)] = currentFigure
      boardValues.step++

      eventTarget.textContent = currentFigure
      eventTarget.classList.add(currentFigure === "X" ? "cell__X" : "cell__0")
      eventTarget.classList.add("disable")

      updateInformation()

      localStorage.setItem("board", JSON.stringify(boardValues))

      let resultGame = checkWin(boardValues.cells, cell, boardValues.winSeriesInGame, boardValues.step - 1, currentFigure)
      if (resultGame) {
        let modalTemplate = renderModal(resultGame, handlerNewGame)
        if (resultGame.includes("Победа")) {
          boardValues.users.map(user => {
            if (user.figure === currentFigure) {
              user.win++
            }
          })
        }
        boardWrapper.appendChild(modalTemplate)
        localStorage.setItem("board", JSON.stringify({...boardValues, cells: initialCells(boardValues.size), step: 0}))
      }
    }
  }

  //Обновление блоков
  function resetUsersInformation() {
    boardValues.users.forEach(el => {
      el.win = 0
    })
    updateInformation()
  }

  function updateInformation() {
    informationWrapper.innerHTML = ""
    informationWrapper.appendChild(renderInformation(boardValues, resetUsersInformation))
  }
  function updateSettings() {
    settingsWrapper.innerHTML = ""
    settingsWrapper.appendChild(renderSettingsNewGame(boardValues.newSize, boardValues.newWinSeries, handlerNewGame))
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
  //Проверяем соседние ячейки. Если они содержат похожее значение то проверяем всю линию
  let beforePositionX = getPosition("x", cell.x, line, -1)
  let beforePositionY = getPosition("y", cell.y, line, -1)
  let afterPositionX = getPosition("x", cell.x, line, 1)
  let afterPositionY = getPosition("y", cell.y, line, 1)

  let beforeValue = cells[beforePositionY] ? cells[beforePositionY][beforePositionX] : undefined
  let afterValue = cells[afterPositionY] ? cells[afterPositionY][afterPositionX] : undefined
  let currentValue = cells[cell.y][cell.x]
  if ((beforeValue === currentValue) || (currentValue === afterValue)) {
    for (let i = -winSeriesInGame + 1; i < winSeriesInGame; i++) {
      let x = getPosition("x", cell.x, line, i)
      let y = getPosition("y", cell.y, line, i)
      if (x >= 0 && y >= 0 && x < cells.length && y < cells.length) {
        res.push(cells[y][x])
      }
    }
  }

  function getPosition(axis: "x" | "y", currentValue: number, line: ILine, i: number): number {
    if (line[axis] === "d") {
      return currentValue - i
    }
    if (line[axis] === "i") {
      return currentValue + i
    }
    return currentValue
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
