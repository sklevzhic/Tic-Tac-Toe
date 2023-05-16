import type { IBoard } from "../types/IBoard";
import { getIndexCurrentUser } from "./board";

export const renderInformation = (boardValues: IBoard) => {
    const information = document.createElement("div");

    information.classList.add("information");

    const title = document.createElement("h5");

    title.classList.add("title");
    title.textContent = "Информация";

    const step = document.createElement("p");

    step.classList.add("step");
    step.textContent = `Счетчик ходов: ${  boardValues.step}`;

    const currentFigure = document.createElement("p");

    currentFigure.classList.add("currentFigure");
    currentFigure.innerHTML = `Текущий ход: <span class="activeFigure">${boardValues.users[getIndexCurrentUser(boardValues.step)].figure}</span>`;

    const winSeries = document.createElement("p");

    winSeries.classList.add("step");
    winSeries.textContent = `Победная серия: ${  boardValues.winSeriesInGame}`;

    const countWin = document.createElement("p");

    countWin.classList.add("countWin");
    countWin.textContent = `${boardValues.users[0].name} ${boardValues.users[0].figure} [${boardValues.users[0].win} : ${boardValues.users[1].win}] ${boardValues.users[1].name}  ${boardValues.users[1].figure}`;

    information.append(title);
    information.append(step);
    information.append(currentFigure);
    information.append(winSeries);
    information.append(countWin);

    return information;
};
