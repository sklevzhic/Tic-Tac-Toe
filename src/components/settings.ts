import { MAX_VALUE, MIN_VALUE, STEP } from "../consts/minMaxValues";

export const renderSettingsNewGame = (newSize: number, newWinSeries: number, handlerNewGame: (newSize: number, newWinSeries: number) => void) => {
    const settings = document.createElement("div");
    const title = document.createElement("h5");

    title.classList.add("title");
    title.textContent = "Начать новую игру";

    const labelSize = document.createElement("label");

    labelSize.textContent = "Размер сетки";

    const newSizeInput = generateInput(newSize, limit);

    labelSize.append(newSizeInput);

    const labelNewSeries = document.createElement("label");

    labelNewSeries.textContent = "Победная серия";

    const newWinSeriesInput = generateInput(newWinSeries, limit);

    labelNewSeries.append(newWinSeriesInput);

    const button = document.createElement("button");

    button.classList.add("newGame");
    button.textContent = "Начать";

    settings.append(title);
    settings.append(labelSize);
    settings.append(labelNewSeries);
    settings.append(button);

    button.addEventListener("click", () => handlerNewGame(+newSizeInput.value, +newWinSeriesInput.value));

    function limit() {
        newSizeInput.value = +newSizeInput.value <= +MIN_VALUE
            ? MIN_VALUE
            : +newSizeInput.value > +MAX_VALUE
                ? MAX_VALUE
                : newSizeInput.value;

        newWinSeriesInput.value = String(+newWinSeriesInput.value <= +MIN_VALUE
            ? MIN_VALUE
            : Math.min(Math.round(+newSizeInput.value * 1), +newWinSeriesInput.value));
    }

    return settings;
};

export const generateInput = (defaultValue: number, limit: () => void, min: string = MIN_VALUE, max: string = MAX_VALUE) => {
    const input = document.createElement("input");

    input.classList.add("input");
    input.type = "number";
    input.step = STEP;
    input.min = String(min);
    input.max = String(max);
    input.addEventListener('change', limit);
    input.addEventListener('keypress', () => false);
    input.addEventListener('wheel', () => true);
    input.title = "Изменить значение можно прокруткой колеса мыши";
    input.value = String(defaultValue);

    return input;
};

