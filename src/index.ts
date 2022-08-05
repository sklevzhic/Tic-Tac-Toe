import "./style.css"
import {ICell} from "./types/ICell";
import {settings} from "./components/settings";
import {information} from "./components/information";
import {board, getCurrentFigure} from "./components/board";
import {Figures} from "./types/figures";
import {ILines, ILine} from "./models/ILine";
import {modal} from "./components/modal";

function start() {
  let size = 5
  let winSeriesInGame = 3

  let step = 0
  let cells = initialCells(size)

  let wrapper = document.createElement("div")
  wrapper.classList.add("wrapper")

  //
  let sidebar = document.createElement("div")
  sidebar.classList.add("sidebar")

  let settingsWrapper = <HTMLDivElement>document.createElement("div")
  settingsWrapper.classList.add("settingsWrapper")
  settingsWrapper.appendChild(settings(handlerNewGame))

  let informationWrapper = <HTMLDivElement>document.createElement("div")
  informationWrapper.classList.add("informationWrapper")
  informationWrapper.appendChild(information(step, winSeriesInGame))

  sidebar.appendChild(settingsWrapper)
  sidebar.appendChild(informationWrapper)

  let main = document.createElement("div")
  main.classList.add("main")
  let boardWrapper = <HTMLDivElement>document.createElement("div")
  boardWrapper.classList.add("board")
  boardWrapper.addEventListener("click", handlerCell)
  boardWrapper.appendChild(board(cells))

  main.appendChild(boardWrapper)

  wrapper.appendChild(sidebar)
  wrapper.appendChild(main)
  document.body.appendChild(wrapper)

  //Старт новой игры
  function handlerNewGame(newSize: number = size, newWinSeries: number = winSeriesInGame) {
    size = newSize
    winSeriesInGame = newWinSeries

    cells = initialCells(size)
    step = 0

    boardWrapper.innerHTML = ""
    boardWrapper.appendChild(board(cells))

    informationWrapper.innerHTML = ""
    informationWrapper.appendChild(information(step, winSeriesInGame))

  }

  // Обработчик клика на ячейку
  function handlerCell(event: MouseEvent, currentFigure: Figures = getCurrentFigure(step)) {
    let eventTarget = event.target as HTMLDivElement
    if (eventTarget.classList.contains("cell")) {
      let x = Number(eventTarget.getAttribute("data-x"));
      let y = Number(eventTarget.getAttribute("data-y"));
      let cell: ICell = {x, y}

      cells[Number(x)][Number(y)] = currentFigure
      eventTarget.innerText = currentFigure
      step++
      eventTarget.classList.add("disable")
      if (checkWin(cells, cell, winSeriesInGame, currentFigure)) {
        let modalTemplate = modal(currentFigure, handlerNewGame)
        main.appendChild(modalTemplate)
      }
      informationWrapper.innerHTML = ""
      informationWrapper.appendChild(information(step, winSeriesInGame))
    }
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
    "vertical": {x: "i", y: "n", arr: []},
    "horizontal": {x: "n", y: "i", arr: []},
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
      res.push(cells[x][y])
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
