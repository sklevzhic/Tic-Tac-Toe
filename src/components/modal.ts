import {Figures} from "../types/figures";

export const getModalTemplate = (currentFigure: Figures, handleNewGame: () => void) => {
  let overlay = document.createElement("div")
  overlay.classList.add("overlay")
  let content = document.createElement("div")
  content.classList.add("content")
  overlay.appendChild(content)
  content.textContent = "Победа " + currentFigure
  let button = document.createElement("button")
  button.classList.add("button")
  button.textContent = "Начать новую игру"
  content.appendChild(button)
  button.addEventListener("click", handleNewGame)
  return overlay
}
