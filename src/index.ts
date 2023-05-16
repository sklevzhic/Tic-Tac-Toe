import "./style.css";
import type { ICell } from "./types/ICell";
import { getIndexCurrentUser, renderBoard } from "./components/board";
import { Figures } from "./types/figures";
import type { ILine, ILines } from "./types/ILine";
import { renderModal } from "./components/modal";
import type { IBoard } from "./types/IBoard";
import { renderInformation } from "./components/information";
import { renderSettingsNewGame } from "./components/settings";
import {
    DEFAULT_NEW_SIZE,
    DEFAULT_NEW_WIN_SERIES_IN_GAME,
    DEFAULT_SIZE,
    DEFAULT_WIN_SERIES_IN_GAME,
} from "./consts/boardConfig";
import { ActionsForCoordinate } from "./types/actionsForCoordinate";

export function start() {
    let boardValues: IBoard = {
        "size": DEFAULT_SIZE,
        "winSeriesInGame": DEFAULT_WIN_SERIES_IN_GAME,
        "step": 0,
        "cells": initialCells(DEFAULT_SIZE),
        "newSize": DEFAULT_NEW_SIZE,
        "newWinSeries": DEFAULT_NEW_WIN_SERIES_IN_GAME,
        "users": [
            { name: "Player", win: 0, figure: Figures.FIGUREX },
            { name: "Player", win: 0, figure: Figures.FIGURE0 },
        ],
    };

  // разметка
    const wrapper = <HTMLDivElement>document.createElement("div");

    wrapper.classList.add("wrapper");

  // разметка сайтбар
    const sideBarWrapper = <HTMLDivElement>document.createElement("div");
    const sidebar = document.createElement("div");

    sidebar.classList.add("sidebar");

    const informationWrapper = <HTMLDivElement>document.createElement("div");

    informationWrapper.classList.add("informationWrapper");
    informationWrapper.innerHTML = "";
    informationWrapper.append(renderInformation(boardValues));

    const settingsWrapper = <HTMLDivElement>document.createElement("div");

    settingsWrapper.classList.add("settingsWrapper");
    settingsWrapper.append(renderSettingsNewGame(boardValues.newSize, boardValues.newWinSeries, handlerNewGame));
    sideBarWrapper.append(sidebar);
    sidebar.append(informationWrapper);
    sidebar.append(settingsWrapper);
    sideBarWrapper.append(informationWrapper);
    sideBarWrapper.append(settingsWrapper);

  // разметка сайтбар
    const main = <HTMLDivElement>document.createElement("div");

    main.classList.add("main");

    const boardWrapper = <HTMLDivElement>document.createElement("div");

    boardWrapper.classList.add("board");
    boardWrapper.addEventListener("click", handlerCell);
    boardWrapper.append(renderBoard(boardValues.cells));
    main.append(boardWrapper);

  // Добавление разметки сайтбара и доски
    wrapper.append(sideBarWrapper);
    wrapper.append(main);
    document.body.append(wrapper);

  // Проверка локалсторедж
    if (localStorage.getItem("board")) {
        const data = localStorage.getItem("board");

        if (data) {
            boardValues = JSON.parse(data);
            updateSettings();
            updateInformation();
            updateBoard();
        }
    }

  //Старт новой игры
    function handlerNewGame(newSize: number = boardValues.size, newWinSeries: number = boardValues.winSeriesInGame) {
        const size = Number.isInteger(newSize) ? newSize : boardValues.size;

        boardValues.size = size;
        boardValues.winSeriesInGame = newWinSeries;
        boardValues.cells = initialCells(size);
        boardValues.step = 0;
        boardValues.newWinSeries = newWinSeries;
        boardValues.newSize = size;
        updateBoard();
        updateInformation();

        if (Number.isInteger(newSize)) {
            resetUsersInformation();
        }

        localStorage.setItem("board", JSON.stringify(boardValues));
    }

  // Обработчик клика на ячейку
    function handlerCell(event: MouseEvent) {
    // Получаем фигуру пользователя
        const currentFigure: Figures = boardValues.users[getIndexCurrentUser(boardValues.step)].figure;

        const eventTarget = event.target as HTMLDivElement;

        if (eventTarget.classList.contains("cell") && !(eventTarget.classList.contains("disable"))) {
            const x = Number(eventTarget.dataset.x);
            const y = Number(eventTarget.dataset.y);
            const cell: ICell = { x, y };

            boardValues.cells[Number(y)][Number(x)] = currentFigure;
            boardValues.step++;

            eventTarget.textContent = currentFigure;
            eventTarget.classList.add(currentFigure === "X" ? "cell__X" : "cell__0");
            eventTarget.classList.add("disable");

            updateInformation();

            localStorage.setItem("board", JSON.stringify(boardValues));

            const resultGame = checkWin(boardValues.cells, cell, boardValues.winSeriesInGame, boardValues.step - 1, currentFigure);

            if (resultGame) {
                const modalTemplate = renderModal(resultGame, handlerNewGame);

                if (resultGame.includes("Победа")) {
                    for (const user of boardValues.users) {
                        if (user.figure === currentFigure) {
                            user.win++;
                        }
                    }
                }

                boardWrapper.append(modalTemplate);
                localStorage.setItem("board", JSON.stringify({ ...boardValues, cells: initialCells(boardValues.size), step: 0 }));
            }
        }
    }

  //Обновление блоков
    function resetUsersInformation() {
        for (const element of boardValues.users) {
            element.win = 0;
        }

        updateInformation();
    }

    function updateInformation() {
        informationWrapper.innerHTML = "";
        informationWrapper.append(renderInformation(boardValues));
    }
    function updateSettings() {
        settingsWrapper.innerHTML = "";
        settingsWrapper.append(renderSettingsNewGame(boardValues.newSize, boardValues.newWinSeries, handlerNewGame));
    }
    function updateBoard() {
        boardWrapper.innerHTML = "";
        boardWrapper.append(renderBoard(boardValues.cells));
    }
}

start();

// Инициализация доски
export function initialCells(size: number): string[][] {
    return [ ...Array(size) ].map(() => Array(size).fill(""));
}

export function checkWin(cells: string[][], cell: ICell, winSeriesInGame: number, step: number, figure: Figures): string {
    //   Создаем массивы для возможных победных линий,
    //   x,y - указывают на то, как будем двигаться по координатам

    const lines: ILines = {
        "vertical": { x: ActionsForCoordinate.DEFAULT, y: ActionsForCoordinate.INCREMENT, arr: [] },
        "horizontal": { x: ActionsForCoordinate.INCREMENT, y: ActionsForCoordinate.DEFAULT, arr: [] },
        "mainDiagonal": { x: ActionsForCoordinate.INCREMENT, y: ActionsForCoordinate.INCREMENT, arr: [] },
        "secondaryDiagonal": { x: ActionsForCoordinate.INCREMENT, y: ActionsForCoordinate.DECREMENT, arr: [] },
    };

  // по координатам х,у получает значения с линий и записывает значения в arr
    for (const key of Object.keys(lines)) {
        lines[key].arr = checkValuesInLine(cells, winSeriesInGame, cell, lines[key]);
    }

  // Содержит ли хотя бы одна линия победную комбинацию
    if (Object.keys(lines).some(key => checkWinSeriesInLine(lines[key].arr, winSeriesInGame, figure))) {
        return `<p>Победа <span class="activeFigure">${figure}</span></p>`; //  TODO
    }
    if (step === cells.length * cells.length - 1) {
        return "<p>Ничья</p>"; //  TODO
    }

    return "";
}
export function checkValuesInLine(cells: string[][], winSeriesInGame: number, cell: ICell, line: ILine): string[] {
    const response = [];
    const COORDINATE_BEFORE = -1;
    const COORDINATE_AFTER = -1;
    //Проверяем соседние ячейки. Если они содержат похожее значение то проверяем всю линию
    const beforePositionX = getPosition("x", cell.x, line, COORDINATE_BEFORE);
    const afterPositionX = getPosition("x", cell.x, line, COORDINATE_AFTER);

    const beforePositionY = getPosition("y", cell.y, line, COORDINATE_BEFORE);
    const afterPositionY = getPosition("y", cell.y, line, COORDINATE_AFTER);

    const beforeValue = cells[beforePositionY] ? cells[beforePositionY][beforePositionX] : undefined;
    const afterValue = cells[afterPositionY] ? cells[afterPositionY][afterPositionX] : undefined;
    const currentValue = cells[cell.y][cell.x];

    if ((beforeValue === currentValue) || (currentValue === afterValue)) {
        for (let i = -winSeriesInGame + 1; i < winSeriesInGame; i++) {
            const x = getPosition("x", cell.x, line, i);
            const y = getPosition("y", cell.y, line, i);

            if (x >= 0 && y >= 0 && x < cells.length && y < cells.length) {
                response.push(cells[y][x]);
            }
        }
    }

    function getPosition(axis: "x" | "y", currentValue: number, line: ILine, i: number): number {
        if (line[axis] === ActionsForCoordinate.DECREMENT) {
            return currentValue - i;
        }
        if (line[axis] === ActionsForCoordinate.INCREMENT) {
            return currentValue + i;
        }

        return currentValue;
    }

    return response;
}
export function checkWinSeriesInLine(array: string[], winSeriesInGame: number, figure: Figures): boolean {
    let count = 0;

    for (let i = 0; i <= array.length - 1; i++) {
        const tempCount = array[i] === figure ? count + 1 : 0;

        count = tempCount;

        if (tempCount === winSeriesInGame) return true;
    }

    return false;
}
