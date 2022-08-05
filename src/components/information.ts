import {Figures} from "../types/figures";
import {getCurrentFigure} from "./board";

export const information = (currentStep: number, winSeries: number, currentFigure: Figures = getCurrentFigure(currentStep)) => {
  let information = document.createElement("div")
  information.classList.add("information")
  let title = document.createElement("h5")
  title.classList.add("title")
  title.innerText = "Информция"
  let step = document.createElement("p")
  let figure = document.createElement("p")
  let series = document.createElement("p")
  step.classList.add("step")
  figure.classList.add("currentFigure")
  series.classList.add("winSeries")

  step.innerText = "Счетчик ходов: " +  currentStep
  figure.innerText = "Текущий ход: " +  currentFigure
  series.innerText = "Победная серия: " +  winSeries

  information.appendChild(title)
  information.appendChild(step)
  information.appendChild(figure)
  information.appendChild(series)

  return information
}
