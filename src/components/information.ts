import {IBoard} from "../types/IBoard";
import {getCurrentFigure} from "./board";

export const renderInformation = (boardValues: IBoard) => {

  let information = document.createElement("div")
  information.classList.add("information")
  information.innerHTML = `
    <h5 class="title">Информация</h5>
    <p class="step">Счетчик ходов: ${boardValues.step}</p>
    <p class="currentFigure">Текущий ход: <span class="activeFigure">${getCurrentFigure(boardValues.step)}</span></p>
    <p class="winSeries">Победная серия: ${boardValues.winSeriesInGame}</p>
    <p>${boardValues.users[0].name} [${boardValues.users[0].win} : ${boardValues.users[1].win}] ${boardValues.users[1].name}</p>
  `
  return information
}
