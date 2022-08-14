import {Figures} from "../types/figures";

export const getInformationTemplate = (currentStep: number, winSeries: number, currentFigure: Figures) => {

  let information = document.createElement("div")
  information.classList.add("information")
  let title = document.createElement("h5")
  title.classList.add("title")
  title.textContent = "Информация"
  let step = document.createElement("p")
  let figure = document.createElement("p")
  let series = document.createElement("p")
  step.classList.add("step")
  figure.classList.add("currentFigure")
  series.classList.add("winSeries")

  step.textContent = "Счетчик ходов: " + currentStep
  figure.innerHTML = `Текущий ход: <span class="activeFigure">${currentFigure}</span>`
  series.textContent = "Победная серия: " + winSeries

  information.appendChild(title)
  information.appendChild(step)
  information.appendChild(figure)
  information.appendChild(series)

  return information
}
