import {renderSettingsNewGame} from "./settings";
import {renderInformation} from "./information";
import {IBoard} from "../types/IBoard";


export const renderSidebar = (boardValues: IBoard, handlerNewGame: () => void, resetUsersInformation: () => void) => {
  let sidebar = document.createElement("div")
  sidebar.classList.add("sidebar")


  let informationWrapper = <HTMLDivElement>document.createElement("div")
  informationWrapper.classList.add("informationWrapper")
  informationWrapper.innerHTML = ""
  informationWrapper.appendChild(renderInformation(boardValues, resetUsersInformation))

  let settingsWrapper = <HTMLDivElement>document.createElement("div")
  settingsWrapper.classList.add("settingsWrapper")
  settingsWrapper.appendChild(renderSettingsNewGame(boardValues.newSize, boardValues.newWinSeries, handlerNewGame))


  sidebar.appendChild(informationWrapper)
  sidebar.appendChild(settingsWrapper)

  return sidebar
}

