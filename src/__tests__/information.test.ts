import { screen } from "@testing-library/dom";
import '@testing-library/jest-dom';
import { initialCells } from "../index";
import type { IBoard } from "../types/IBoard";
import { renderInformation } from "../components/information";
import { Figures } from "../types/figures";
import { DEFAULT_NEW_SIZE, DEFAULT_NEW_WIN_SERIES_IN_GAME, DEFAULT_SIZE } from "../consts/boardConfig";
import { STEP, WIN_SERIES_IN_GAME } from "./consts";

const boardValues: IBoard = {
    "size": 3,
    "winSeriesInGame": WIN_SERIES_IN_GAME[7],
    "step": STEP[15],
    "cells": initialCells(DEFAULT_SIZE),
    "newSize": DEFAULT_NEW_SIZE,
    "newWinSeries": DEFAULT_NEW_WIN_SERIES_IN_GAME,
    "users": [
        { name: "Player", win: 2, figure: Figures.FIGUREX },
        { name: "Player", win: 0, figure: Figures.FIGURE0 },
    ],
};

describe("render information", () => {
    it('should get the template information', function() {
        const template = renderInformation(boardValues);

        document.body.append(template);
        expect(screen.getByText("Счетчик ходов: 15")).toBeInTheDocument();
        expect(screen.getByText("Победная серия: 7")).toBeInTheDocument();
        expect(screen.getByText("Player X [2 : 0] Player 0")).toBeInTheDocument();
    });
});
