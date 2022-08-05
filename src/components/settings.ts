export const settings = (handlerNewGame: (newSize: number, newWinSeries: number) => void) => {
  let TITLE_SIZE = "Размер сетки"
  let TITLE_WIN_SERIES = "Победная серия"

  let sizeMin = 3
  let sizeMax = 55

  let settings = document.createElement("div")
  let title = document.createElement("h5")
  title.classList.add("title")
  title.innerText = "Начать новую игру"
  let newSizeLabel = generateInput(TITLE_SIZE, sizeMin, sizeMax, sizeMin)
  let newWinSeriesLabel = generateInput(TITLE_WIN_SERIES, sizeMin, sizeMax, sizeMin)

  const handlerClickNewGame = () => {
    let newSize = (newSizeLabel.querySelector(`input`) as HTMLInputElement).value
    let newWinSeries = (newWinSeriesLabel.querySelector(`input`) as HTMLInputElement).value
    handlerNewGame(+newSize, +newWinSeries)
  }

  let button = document.createElement("button")
  button.classList.add("newGame")
  button.innerText = "Начать игру"
  button.addEventListener("click", handlerClickNewGame)


  settings.appendChild(title)
  settings.appendChild(newSizeLabel)
  settings.appendChild(newWinSeriesLabel)
  settings.appendChild(button)
  return settings
}

export const generateInput = (labelText: string, min: number, max: number, defaultValue: number) => {
  let label = document.createElement("label")
  label.innerText = labelText
  let input = document.createElement("input")
  input.type = "number"
  input.id = labelText
  input.value = String(defaultValue)
  label.appendChild(input)
  return label
}


