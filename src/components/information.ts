import {IBoard} from "../types/IBoard";
import {getCurrentFigure} from "./board";

export const renderInformation = (boardValues: IBoard, resetUsersInformation: () => void) => {

  let information = document.createElement("div")
  information.classList.add("information")

  let title = document.createElement("h5")
  title.classList.add("title")
  title.textContent = "Информация"

  let step = document.createElement("p")
  step.classList.add("step")
  step.textContent = "Счетчик ходов: " + boardValues.step

  let currentFigure = document.createElement("p")
  currentFigure.classList.add("currentFigure")
  currentFigure.innerHTML = `Текущий ход: <span class="activeFigure">${getCurrentFigure(boardValues.step)}</span>`

  let winSeries = document.createElement("p")
  winSeries.classList.add("step")
  winSeries.textContent = "Победная серия: " + boardValues.winSeriesInGame

  let countWin = document.createElement("p")
  countWin.classList.add("countWin")
  countWin.textContent = `${boardValues.users[0].name} [${boardValues.users[0].win} : ${boardValues.users[1].win}] ${boardValues.users[1].name}`


  let button = document.createElement("button")
  button.textContent = "Сбросить счет"
  button.addEventListener("click", resetUsersInformation)

  information.appendChild(title)
  information.appendChild(step)
  information.appendChild(currentFigure)
  information.appendChild(winSeries)
  information.appendChild(countWin)
  information.appendChild(button)

  return information
}
