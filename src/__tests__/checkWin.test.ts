import { checkValuesInLine, checkWin, checkWinSeriesInLine } from "../index";
import type { ILines } from "../types/ILine";
import { Figures } from "../types/figures";
import { ActionsForCoordinate } from "../types/actionsForCoordinate";
import { CELL, STEP, WIN_SERIES_IN_GAME } from "./consts";

export const cellsMock: string[][] = [
    [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ],
    [
        "",
        "0",
        "X",
        "0",
        "",
        "",
        "",
        "",
        "",
    ],
    [
        "",
        "X",
        "",
        "X",
        "0",
        "",
        "",
        "",
        "",
    ],
    [
        "0",
        "X",
        "",
        "X",
        "X",
        "0",
        "",
        "",
        "",
    ],
    [
        "0",
        "X",
        "",
        "0",
        "0",
        "",
        "",
        "",
        "",
    ],
    [
        "",
        "",
        "X",
        "X",
        "",
        "",
        "",
        "",
        "",
    ],
    [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ],
    [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ],
    [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ],
];

const cellsDrawMock: string[][] = [
    [
        "0",
        "X",
        "0",
    ],
    [
        "X",
        "X",
        "0",
    ],
    [
        "X",
        "0",
        "X",
    ],
];

//  0 1 2 3 4 5 6 7 = x
//0 * * * * * * * *
//1 * 0 X 0 * * * *
//2 * X * X 0 * * *
//3 0 X * X X 0 * *
//4 0 X * 0 0 * * *
//5 * * X X * * * *
//6 * * * * * * * *
//7 * * * * * * * *

const lines: ILines = {
    "vertical": { x: ActionsForCoordinate.DEFAULT, y: ActionsForCoordinate.INCREMENT, arr: [] },
    "horizontal": { x: ActionsForCoordinate.INCREMENT, y: ActionsForCoordinate.DEFAULT, arr: [] },
    "mainDiagonal": { x: ActionsForCoordinate.INCREMENT, y: ActionsForCoordinate.INCREMENT, arr: [] },
    "secondaryDiagonal": { x: ActionsForCoordinate.INCREMENT, y: ActionsForCoordinate.DECREMENT, arr: [] },
};

describe("Should get values values from the line", () => {
    describe("should get values from lines", () => {
        test("should get values from the vertical", () => {
            const a = checkValuesInLine(cellsMock, WIN_SERIES_IN_GAME[4], { "x": CELL.x3, "y": 3 }, lines["vertical"]);

            expect(a).toEqual([ "", "0", "X", "X", "0", "X", "" ]);

            const b = checkValuesInLine(cellsMock, WIN_SERIES_IN_GAME[3], { "x": CELL.x3, "y": 3 }, lines["vertical"]);

            expect(b).toEqual([ "0", "X", "X", "0", "X" ]);

            const c = checkValuesInLine(cellsMock, WIN_SERIES_IN_GAME[4], { "x": CELL.x0, "y": 3 }, lines["vertical"]);

            expect(c).toEqual([ "", "", "", "0", "0", "", "" ]);
        });
        test("should get values from the horizontal", () => {
            expect(checkValuesInLine(cellsMock, WIN_SERIES_IN_GAME[4], { "x": CELL.x4, "y": 4 }, lines["horizontal"]))
                .toEqual([ "X", "", "0", "0", "", "", "" ]);
            expect(checkValuesInLine(cellsMock, WIN_SERIES_IN_GAME[3], { "x": CELL.x2, "y": CELL.y2 }, lines["horizontal"]))
                .toEqual([]);
            expect(checkValuesInLine(cellsMock, WIN_SERIES_IN_GAME[3], { "x": CELL.x3, "y": CELL.y2 }, lines["horizontal"]))
                .toEqual([]);
            expect(checkValuesInLine(cellsMock, WIN_SERIES_IN_GAME[3], { "x": CELL.x4, "y": 3 }, lines["horizontal"]))
                .toEqual([ "", "X", "X", "0", "" ]);
        });
        test("should get values from the main diagonal", () => {
            expect(checkValuesInLine(cellsMock, WIN_SERIES_IN_GAME[3], { "x": CELL.x2, "y": CELL.y1 }, lines["mainDiagonal"]))
                .toEqual([ "", "X", "X", "X" ]);
            expect(checkValuesInLine(cellsMock, WIN_SERIES_IN_GAME[4], { "x": CELL.x2, "y": CELL.y1 }, lines["mainDiagonal"]))
                .toEqual([ "", "X", "X", "X", "" ]);
            expect(checkValuesInLine(cellsMock, WIN_SERIES_IN_GAME[5], { "x": CELL.x2, "y": CELL.y1 }, lines["mainDiagonal"]))
                .toEqual([ "", "X", "X", "X", "", "" ]);
            expect(checkValuesInLine(cellsMock, WIN_SERIES_IN_GAME[3], { "x": CELL.x1, "y": 3 }, lines["mainDiagonal"]))
                .toEqual([]);
            expect(checkValuesInLine(cellsMock, WIN_SERIES_IN_GAME[3], { "x": CELL.x2, "y": CELL.y5 }, lines["mainDiagonal"]))
                .toEqual([ "0", "X", "X", "", "" ]);
        });
        test("should get values from the secondary diagonal", () => {
            expect(checkValuesInLine(cellsMock, WIN_SERIES_IN_GAME[4], { "x": CELL.x4, "y": 4 }, lines["secondaryDiagonal"]))
                .toEqual([ "", "", "X", "0", "0", "", "" ]);
            expect(checkValuesInLine(cellsMock, WIN_SERIES_IN_GAME[4], { "x": CELL.x1, "y": CELL.y2 }, lines["secondaryDiagonal"]))
                .toEqual([ "0", "X", "X", "" ]);
            expect(checkValuesInLine(cellsMock, WIN_SERIES_IN_GAME[3], { "x": CELL.x1, "y": CELL.y2 }, lines["secondaryDiagonal"]))
                .toEqual([ "0", "X", "X", "" ]);
        });
    });
    describe("should check elements of the line on availability win series", () => {
        test("true 1", () => {
            expect(checkWinSeriesInLine([ "X", "X", "X", "X", "X", "", "0", "", "" ], WIN_SERIES_IN_GAME[5], Figures.FIGUREX)).toBeTruthy();
        });
        test("true 2", () => {
            expect(checkWinSeriesInLine([ "0", "", "X", "X", "X", "X", "X", "X", "", "", "0", "" ], WIN_SERIES_IN_GAME[5], Figures.FIGUREX)).toBeTruthy();
        });
        test("true 3", () => {
            expect(checkWinSeriesInLine([ "X", "X", "X", "", "0", "", "", "X", "X", "X", "X", "X" ], WIN_SERIES_IN_GAME[5], Figures.FIGUREX)).toBeTruthy();
        });
        test("true 4", () => {
            expect(checkWinSeriesInLine([ "0", "0", "0", "0", "0", "", "", "" ], WIN_SERIES_IN_GAME[5], Figures.FIGURE0)).toBeTruthy();
        });
        test("false 1", () => {
            expect(checkWinSeriesInLine([ "0", "0", "0", "X", "0", "0", "", "", "" ], WIN_SERIES_IN_GAME[5], Figures.FIGURE0)).toBeFalsy();
        });
        test("false 2", () => {
            expect(checkWinSeriesInLine([ "0", "0", "", "0", "X", "0", "0", "", "" ], WIN_SERIES_IN_GAME[5], Figures.FIGURE0)).toBeFalsy();
        });
        test("false 3", () => {
            expect(checkWinSeriesInLine([ "0", "0", "", "0", "X", "0", "0", "", "" ], WIN_SERIES_IN_GAME[5], Figures.FIGURE0)).toBeFalsy();
        });
    });
    describe("should check win", () => {
        test("win", () => {
            expect(checkWin(cellsMock, { "x": CELL.x4, "y": CELL.y3 }, WIN_SERIES_IN_GAME[3], STEP[12], Figures.FIGUREX).includes("Победа")).toBeTruthy();
            expect(checkWin(cellsMock, { "x": CELL.x4, "y": CELL.y3 }, WIN_SERIES_IN_GAME[3], STEP[12], Figures.FIGUREX).includes("X")).toBeTruthy();
            expect(checkWin(cellsMock, { "x": CELL.x3, "y": CELL.y2 }, WIN_SERIES_IN_GAME[3], STEP[12], Figures.FIGUREX).includes("Победа")).toBeTruthy();
            expect(checkWin(cellsMock, { "x": CELL.x3, "y": CELL.y2 }, WIN_SERIES_IN_GAME[3], STEP[12], Figures.FIGUREX).includes("X")).toBeTruthy();
            expect(checkWin(cellsMock, { "x": CELL.x1, "y": CELL.y2 }, WIN_SERIES_IN_GAME[3], STEP[12], Figures.FIGUREX).includes("Победа")).toBeTruthy();
            expect(checkWin(cellsMock, { "x": CELL.x1, "y": CELL.y2 }, WIN_SERIES_IN_GAME[3], STEP[12], Figures.FIGUREX).includes("X")).toBeTruthy();
            expect(checkWin(cellsMock, { "x": CELL.x4, "y": CELL.y2 }, WIN_SERIES_IN_GAME[3], STEP[12], Figures.FIGURE0).includes("Победа")).toBeTruthy();
            expect(checkWin(cellsMock, { "x": CELL.x4, "y": CELL.y2 }, WIN_SERIES_IN_GAME[3], STEP[11], Figures.FIGURE0).includes("0")).toBeTruthy();
        });
        test("lose", () => {
            expect(checkWin(cellsMock, { "x": CELL.x4, "y": CELL.y0 }, WIN_SERIES_IN_GAME[5], STEP[12], Figures.FIGUREX)).toBeFalsy();
            expect(checkWin(cellsMock, { "x": CELL.x1, "y": CELL.y1 }, WIN_SERIES_IN_GAME[5], STEP[12], Figures.FIGUREX)).toBeFalsy();
            expect(checkWin(cellsMock, { "x": CELL.x1, "y": CELL.y2 }, WIN_SERIES_IN_GAME[5], STEP[12], Figures.FIGUREX)).toBeFalsy();
            expect(checkWin(cellsMock, { "x": CELL.x3, "y": CELL.y5 }, WIN_SERIES_IN_GAME[5], STEP[12], Figures.FIGUREX)).toBeFalsy();
        });

        test("draw", () => {
            expect(checkWin(cellsDrawMock, { "x": CELL.x0, "y": CELL.y1 }, WIN_SERIES_IN_GAME[3], STEP[12], Figures.FIGUREX).includes("Ничья")).toBeFalsy();
            expect(checkWin(cellsDrawMock, { "x": CELL.x1, "y": CELL.y1 }, WIN_SERIES_IN_GAME[3], STEP[12], Figures.FIGUREX).includes("Ничья")).toBeFalsy();
            expect(checkWin(cellsDrawMock, { "x": CELL.x1, "y": CELL.y2 }, WIN_SERIES_IN_GAME[3], STEP[12], Figures.FIGUREX).includes("Ничья")).toBeFalsy();
            expect(checkWin(cellsDrawMock, { "x": CELL.x2, "y": CELL.y1 }, WIN_SERIES_IN_GAME[3], STEP[12], Figures.FIGUREX).includes("Ничья")).toBeFalsy();
        });
    });
});
