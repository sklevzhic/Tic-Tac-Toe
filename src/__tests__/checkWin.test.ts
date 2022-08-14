import {checkValuesInLine, checkWin, checkWinSeriesInLine} from "../index";
import {ILines} from "../types/ILine";
import {Figures} from "../types/figures";

export let cellsMock: string[][] = [
  ["", "", "", "", "", "", "", ""],
  ["", "0", "X", "0", "", "", "", ""],
  ["", "X", "", "X", "0", "", "", ""],
  ["0", "X", "", "X", "X", "0", "", ""],
  ["0", "X", "", "0", "0", "", "", ""],
  ["", "", "X", "X", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""]
]
//  0 1 2 3 4 5 6 7 = x
//0 * * * * * * * *
//1 * 0 X 0 * * * *
//2 * X * X 0 * * *
//3 0 X * X X 0 * *
//4 0 X * 0 0 * * *
//5 * * X X * * * *
//6 * * * * * * * *
//7 * * * * * * * *
//=
//y


let lines: ILines = {
  "vertical": {x: "n", y: "i", arr: []},
  "horizontal": {x: "i", y: "n", arr: []},
  "mainDiagonal": {x: "i", y: "i", arr: []},
  "secondaryDiagonal": {x: "i", y: "d", arr: []},
}

describe("Should get values values from the line", () => {
  describe("should get values from lines", () => {
    test("should get values from the vertical", () => {
      // console.log(checkValuesInLine(cellsMock, 4, {"x": 2, "y": 2}, lines["vertical"]))
      expect(checkValuesInLine(cellsMock, 4, {"x": 2, "y": 2}, lines["vertical"]))
        .toEqual(["", "X", "", "", "", "X"])
      expect(checkValuesInLine(cellsMock, 4, {"x": 7, "y": 7}, lines["vertical"]))
        .toEqual(["", "", "", ""])
      expect(checkValuesInLine(cellsMock, 4, {"x": 3, "y": 3}, lines["vertical"]))
        .toEqual(["", "0", "X", "X", "0", "X", ""])
    })
    test("should get values from the horizontal", () => {
      expect(checkValuesInLine(cellsMock, 4, {"x": 4, "y": 4}, lines["horizontal"]))
        .toEqual(["X", "", "0", "0", "", "", ""])
      expect(checkValuesInLine(cellsMock, 4, {"x": 0, "y": 0}, lines["horizontal"]))
        .toEqual(["", "", "", ""])
      expect(checkValuesInLine(cellsMock, 4, {"x": 0, "y": 3}, lines["horizontal"]))
        .toEqual(["0", "X", "", "X"])
      expect(checkValuesInLine(cellsMock, 4, {"x": 7, "y": 3}, lines["horizontal"]))
        .toEqual(["X", "0", "", ""])
    })
    test("should get values from the main diagonal", () => {
      expect(checkValuesInLine(cellsMock, 4, {"x": 7, "y": 3}, lines["mainDiagonal"]))
        .toEqual(["", "", "", ""])
      expect(checkValuesInLine(cellsMock, 4, {"x": 7, "y": 0}, lines["mainDiagonal"]))
        .toEqual([""])
      expect(checkValuesInLine(cellsMock, 4, {"x": 0, "y": 7}, lines["mainDiagonal"]))
        .toEqual([""])
      expect(checkValuesInLine(cellsMock, 4, {"x": 4, "y": 4}, lines["mainDiagonal"]))
        .toEqual(["0", "", "X", "0", "", "", ""])
      expect(checkValuesInLine(cellsMock, 4, {"x": 0, "y": 0}, lines["mainDiagonal"]))
        .toEqual(["", "0", "", "X"])

    })
    test("should get values from the secondary diagonal", () => {
      expect(checkValuesInLine(cellsMock, 4, {"x": 4, "y": 4}, lines["secondaryDiagonal"]))
        .toEqual(["", "", "X", "0", "0", "", ""])
      expect(checkValuesInLine(cellsMock, 4, {"x": 0, "y": 0}, lines["secondaryDiagonal"]))
        .toEqual([""])
      expect(checkValuesInLine(cellsMock, 4, {"x": 7, "y": 7}, lines["secondaryDiagonal"]))
        .toEqual([""])
      expect(checkValuesInLine(cellsMock, 4, {"x": 7, "y": 0}, lines["secondaryDiagonal"]))
        .toEqual(["X", "", "", ""])
      expect(checkValuesInLine(cellsMock, 4, {"x": 1, "y": 1}, lines["secondaryDiagonal"]))
        .toEqual(["", "0", ""])
      expect(checkValuesInLine(cellsMock, 4, {"x": 5, "y": 3}, lines["secondaryDiagonal"]))
        .toEqual(["", "X", "0", "0", "", ""])
    })
  })
  describe("should check elements of the line on availability win series", () => {
    test("true 1", () => {
      expect(checkWinSeriesInLine(["X", "X", "X", "X", "X", "", "0", "", ""], 5, Figures.FIGUREX)).toBeTruthy()
    })
    test("true 2", () => {
      expect(checkWinSeriesInLine(["0", "", "X", "X", "X", "X", "X", "X", "", "", "0", ""], 5, Figures.FIGUREX)).toBeTruthy()
    })
    test("true 3", () => {
      expect(checkWinSeriesInLine(["X", "X", "X", "", "0", "", "", "X", "X", "X", "X", "X",], 5, Figures.FIGUREX)).toBeTruthy()
    })
    test("true 4", () => {
      expect(checkWinSeriesInLine(["0", "0", "0", "0", "0", "", "", ""], 5, Figures.FIGURE0)).toBeTruthy()
    })
    test("false 1", () => {
      expect(checkWinSeriesInLine(["0", "0", "0", "X", "0", "0", "", "", ""], 5, Figures.FIGURE0)).toBeFalsy()
    })
    test("false 2", () => {
      expect(checkWinSeriesInLine(["0", "0", "", "0", "X", "0", "0", "", ""], 5, Figures.FIGURE0)).toBeFalsy()
    })
    test("false 3", () => {
      expect(checkWinSeriesInLine(["0", "0", "", "0", "X", "0", "0", "", ""], 5, Figures.FIGURE0)).toBeFalsy()
    })
  })
  describe("should check win", () => {
    test("win", () => {
      expect(checkWin(cellsMock, {"x": 4, "y": 3}, 3, Figures.FIGUREX)).toBeTruthy()
      expect(checkWin(cellsMock, {"x": 3, "y": 2}, 3, Figures.FIGUREX)).toBeTruthy()
      expect(checkWin(cellsMock, {"x": 1, "y": 2}, 3, Figures.FIGUREX)).toBeTruthy()
      expect(checkWin(cellsMock, {"x": 4, "y": 2}, 3, Figures.FIGURE0)).toBeTruthy()

    })
    test("lose", () => {
      expect(checkWin(cellsMock, {"x": 4, "y": 0}, 4, Figures.FIGUREX)).toBeFalsy()
      expect(checkWin(cellsMock, {"x": 1, "y": 1}, 4, Figures.FIGUREX)).toBeFalsy()
      expect(checkWin(cellsMock, {"x": 1, "y": 2}, 4, Figures.FIGUREX)).toBeFalsy()
      expect(checkWin(cellsMock, {"x": 3, "y": 5}, 4, Figures.FIGUREX)).toBeFalsy()
    })
  })

})

