export const renderSettingsNewGame = (newSize: number, newWinSeries: number, handlerNewGame: (newSize: number, newWinSeries: number) => void) => {

  let settings = document.createElement("div")
  let title = document.createElement("h5")
  title.classList.add("title")
  title.textContent = "Начать новую игру"

  let labelSize = document.createElement("label")
  labelSize.textContent = "Размер сетки"
  let newSizeInput = generateInput(newSize, limit)
  labelSize.appendChild(newSizeInput)

  let labelNewSeries = document.createElement("label")
  labelNewSeries.textContent = "Победная серия"
  let newWinSeriesInput = generateInput(newWinSeries, limit)
  labelNewSeries.appendChild(newWinSeriesInput)


  let button = document.createElement("button")
  button.classList.add("newGame")
  button.textContent = "Начать"

  settings.appendChild(title)
  settings.appendChild(labelSize)
  settings.appendChild(labelNewSeries)
  settings.appendChild(button)


  button.addEventListener("click", () => handlerNewGame(+newSizeInput.value, +newWinSeriesInput.value))

  function limit() {
    newSizeInput.value = +newSizeInput.value <= 3 ? "3" : +newSizeInput.value > 55 ?  "55": newSizeInput.value
    newWinSeriesInput.value = String(+newWinSeriesInput.value <= 3 ? "3" : Math.min(Math.round(+newSizeInput.value * 1), +newWinSeriesInput.value))
  }

  return settings
}


export const generateInput = (defaultValue: number, limit: () => void, min: number = 3, max: number = 55,) => {
  let input = document.createElement("input")
  input.type = "number"
  input.min = String(min)
  input.max = String(max)
  input.onchange = limit
  input.value = String(defaultValue)
  return input
}



