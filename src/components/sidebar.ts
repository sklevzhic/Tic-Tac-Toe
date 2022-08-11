import {renderSettingsNewGame} from "./settings";
import {getInformationTemplate} from "./information";
import {getCurrentFigure} from "./board";
import {IBoard} from "../types/IBoard";


export const renderSidebar = (boardValues: IBoard, handlerNewGame: () => void) => {
  let sidebar = document.createElement("div")
  sidebar.classList.add("sidebar")

  let settingsWrapper = <HTMLDivElement>document.createElement("div")
  settingsWrapper.classList.add("settingsWrapper")
  settingsWrapper.appendChild(renderSettingsNewGame(boardValues.newSize, boardValues.newWinSeries, handlerNewGame))

  let informationWrapper = <HTMLDivElement>document.createElement("div")
  informationWrapper.classList.add("informationWrapper")
  informationWrapper.innerHTML = ""
  informationWrapper.appendChild(getInformationTemplate(boardValues.step, boardValues.winSeriesInGame, getCurrentFigure(boardValues.step)))

  sidebar.appendChild(settingsWrapper)
  sidebar.appendChild(informationWrapper)
  return sidebar
}
