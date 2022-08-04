import {checkWinSeriesInLine, getCurrentValue, getValueInCell, initialBoard} from "../models/Board";
import {Operators, Values} from "../types/values";
let boardTemp = [
  [ { "x": 0, "y": 0, "value": null, "id": 158 },
    { "x": 0, "y": 1, "value": null, "id": 228 },
    { "x": 0, "y": 2, "value": null, "id": 158 },
    { "x": 0, "y": 3, "value": null, "id": 226 },
    { "x": 0, "y": 4, "value": null, "id": 235 },
  ],
  [ { "x": 1, "y": 0, "value": null, "id": 1158 },
    { "x": 1, "y": 1, "value": null, "id": 1228 },
    { "x": 1, "y": 2, "value": null, "id": 1158 },
    { "x": 1, "y": 3, "value": Values.VALUE_X, "id": 1226 },
    { "x": 1, "y": 4, "value": null, "id": 1235 },
  ],
  [ { "x": 2, "y": 0, "value": null, "id": 2158 },
    { "x": 2, "y": 1, "value": null, "id": 2228 },
    { "x": 2, "y": 2, "value": Values.VALUE_X, "id": 2158 },
    { "x": 2, "y": 3, "value": null, "id": 2226 },
    { "x": 2, "y": 4, "value": null, "id": 2235 },
  ],
  [ { "x": 3, "y": 0, "value": Values.VALUE_0, "id": 3158 },
    { "x": 3, "y": 1, "value": null, "id": 3228 },
    { "x": 3, "y": 2, "value": Values.VALUE_X, "id": 3158 },
    { "x": 3, "y": 3, "value": Values.VALUE_X, "id": 3226 },
    { "x": 3, "y": 4, "value": null, "id": 3235 },
  ],
  [ { "x": 4, "y": 0, "value": Values.VALUE_0, "id": 4158 },
    { "x": 4, "y": 1, "value": null, "id": 4228 },
    { "x": 4, "y": 2, "value": Values.VALUE_X, "id": 4158 },
    { "x": 4, "y": 3, "value": null, "id": 4226 },
    { "x": 4, "y": 4, "value": null, "id": 4235 },
  ]
]
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
      expect(getValueInCell(boardTemp,4,Operators.INC,0, Operators.DEC,0, Values.VALUE_0)).toBe(Values.VALUE_0)
      expect(getValueInCell(boardTemp,4,Operators.INC,0, Operators.DEC,0, Values.VALUE_0)).not.toBe(Values.VALUE_X)
      expect(getValueInCell(boardTemp,4,Operators.INC,0, Operators.DEC,0, Values.VALUE_0)).not.toBe(null)
    })

    // test("Проверка сбора значений по диагонали (", () => {
    //   let selectedValue =  Values.VALUE_X
    //   expect(getValueInCell(boardTemp,3,Operators.DEC,3, Operators.DEC,0, selectedValue)).toBe(Values.VALUE_X)
    //   expect(getValueInCell(boardTemp,3,Operators.DEC,3, Operators.DEC,1, selectedValue)).toBe(Values.VALUE_X)
    //   expect(getValueInCell(boardTemp,3,Operators.DEC,3, Operators.DEC,2, selectedValue)).toBe(null)
    // })
    //
    // test("Выход за пределы массива", () => {
    //   let selectedValue =  Values.VALUE_X
    //   expect(getValueInCell(arr,3,Operators.DEC,3, Operators.DEC,5, selectedValue)).toBe(null)
    //   expect(getValueInCell(arr,1,Operators.DEC,2, Operators.DEC,5, selectedValue)).toBe(null)
    //   expect(getValueInCell(arr,55,Operators.DEC,55, Operators.DEC,100, selectedValue)).toBe(null)
    // })
  })
})
