import {checkWinSeriesInLine, getCurrentValue, initialBoard} from "../models/Board";

describe(("Utils Board"), () => {

  describe("should get the current figure", () => {
    test("should get a value X", () => {
      expect(getCurrentValue(0)).toBe("0")
      expect(getCurrentValue(2)).toBe("0")
      expect(getCurrentValue(4)).toBe("0")
      expect(getCurrentValue(6)).toBe("0")
      expect(getCurrentValue(8)).toBe("0")
      expect(getCurrentValue(10)).toBe("0")
      expect(getCurrentValue(12)).toBe("0")
    })
    test("should get a value Y", () => {
      expect(getCurrentValue(1)).toBe("X")
      expect(getCurrentValue(3)).toBe("X")
      expect(getCurrentValue(5)).toBe("X")
      expect(getCurrentValue(7)).toBe("X")
      expect(getCurrentValue(9)).toBe("X")
      expect(getCurrentValue(11)).toBe("X")
      expect(getCurrentValue(13)).toBe("X")

    })
  })
  describe("should be initialize the board ", () => {
    test("should get the right array length", () => {
      expect(initialBoard(3).length).toBe(3)
      expect(initialBoard(5).length).toBe(5)
      expect(initialBoard(8).length).toBe(8)
      expect(initialBoard(55).length).toBe(55)
    })
    test("should get the number of elements in the row", () => {
      expect(initialBoard(3).map(el => el.length)).toEqual(Array(3).fill(3))
      expect(initialBoard(55).map(el => el.length)).toEqual(Array(55).fill(55))
    })
  })

  describe("should check elements of the line on availability win series", () => {
    test("пустой масссив", () => {
      expect(checkWinSeriesInLine([], 3, "X")).toBeFalsy()
    })
    test("правильный 1", () => {
      expect(checkWinSeriesInLine(["X", "X", "X", "X", "X", null,"0", null, null], 5, "X")).toBeTruthy()
    })
    test("правильный 2", () => {
      expect(checkWinSeriesInLine(["0", null, "X", "X", "X", "X", "X","X", null, null,"0", null], 5, "X")).toBeTruthy()
    })
    test("правильный 3", () => {
      expect(checkWinSeriesInLine(["X", "X", "X", null,"0", null, null,"X", "X", "X", "X", "X",], 5, "X")).toBeTruthy()
    })
    test("правильный 4", () => {
      expect(checkWinSeriesInLine(["0", "0", "0", "0", "0", null, null, null], 5, "0")).toBeTruthy()
    })
    test("неправильный 1", () => {
      expect(checkWinSeriesInLine(["0", "0", "0","X", "0", "0", null, null, null], 5, "0")).toBeFalsy()
    })
    test("неправильный 2", () => {
      expect(checkWinSeriesInLine(["0", "0", null,"0","X", "0", "0",  null, null], 5, "0")).toBeFalsy()
    })
    test("неправильный 3", () => {
      expect(checkWinSeriesInLine(["0", "0", null, "0", "X", "0", "0",  null, null], 5, "0")).toBeFalsy()
    })
  })

  describe("should check element of the cell", () => {
    test("should get the current value from array by coordinates", () => {

    })

  })
})
