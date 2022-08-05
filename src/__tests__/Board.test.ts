// import {
//   checkValuesInHorizontal,
//   checkValuesInMainDiagonal,
//   checkValuesInSecondaryDiagonal,
//   checkValuesInVertical,
//   checkWin,
//   checkWinSeriesInLine,
//   getCurrentValue,
//   initialBoard
// } from "../models/Board";
// import {Figures} from "../types/values";
//
let boardWithoutWinMock: any = []
//   [
//     {
//       "x": 0,
//       "y": 0,
//       "value": null,
//       "id": 5417
//     },
//     {
//       "x": 1,
//       "y": 0,
//       "value": null,
//       "id": 6175
//     },
//     {
//       "x": 2,
//       "y": 0,
//       "value": null,
//       "id": 2253
//     },
//     {
//       "x": 3,
//       "y": 0,
//       "value": null,
//       "id": 1182
//     },
//     {
//       "x": 4,
//       "y": 0,
//       "value": null,
//       "id": 9293
//     },
//     {
//       "x": 5,
//       "y": 0,
//       "value": null,
//       "id": 6235
//     },
//     {
//       "x": 6,
//       "y": 0,
//       "value": null,
//       "id": 1291
//     },
//     {
//       "x": 7,
//       "y": 0,
//       "value": null,
//       "id": 7299
//     }
//   ],
//   [
//     {
//       "x": 0,
//       "y": 1,
//       "value": null,
//       "id": 8840
//     },
//     {
//       "x": 1,
//       "y": 1,
//       "value": "0",
//       "id": 4963
//     },
//     {
//       "x": 2,
//       "y": 1,
//       "value": "X",
//       "id": 8436
//     },
//     {
//       "x": 3,
//       "y": 1,
//       "value": "0",
//       "id": 1522
//     },
//     {
//       "x": 4,
//       "y": 1,
//       "value": null,
//       "id": 197
//     },
//     {
//       "x": 5,
//       "y": 1,
//       "value": null,
//       "id": 6022
//     },
//     {
//       "x": 6,
//       "y": 1,
//       "value": null,
//       "id": 636
//     },
//     {
//       "x": 7,
//       "y": 1,
//       "value": null,
//       "id": 8943
//     }
//   ],
//   [
//     {
//       "x": 0,
//       "y": 2,
//       "value": null,
//       "id": 2457
//     },
//     {
//       "x": 1,
//       "y": 2,
//       "value": "X",
//       "id": 2050
//     },
//     {
//       "x": 2,
//       "y": 2,
//       "value": null,
//       "id": 6146
//     },
//     {
//       "x": 3,
//       "y": 2,
//       "value": "X",
//       "id": 8012
//     },
//     {
//       "x": 4,
//       "y": 2,
//       "value": "0",
//       "id": 3966
//     },
//     {
//       "x": 5,
//       "y": 2,
//       "value": null,
//       "id": 7478
//     },
//     {
//       "x": 6,
//       "y": 2,
//       "value": null,
//       "id": 6276
//     },
//     {
//       "x": 7,
//       "y": 2,
//       "value": null,
//       "id": 9582
//     }
//   ],
//   [
//     {
//       "x": 0,
//       "y": 3,
//       "value": "0",
//       "id": 7374
//     },
//     {
//       "x": 1,
//       "y": 3,
//       "value": "X",
//       "id": 7393
//     },
//     {
//       "x": 2,
//       "y": 3,
//       "value": null,
//       "id": 9279
//     },
//     {
//       "x": 3,
//       "y": 3,
//       "value": "X",
//       "id": 8088
//     },
//     {
//       "x": 4,
//       "y": 3,
//       "value": "X",
//       "id": 3958
//     },
//     {
//       "x": 5,
//       "y": 3,
//       "value": "0",
//       "id": 9371
//     },
//     {
//       "x": 6,
//       "y": 3,
//       "value": null,
//       "id": 5872
//     },
//     {
//       "x": 7,
//       "y": 3,
//       "value": null,
//       "id": 4868
//     }
//   ],
//   [
//     {
//       "x": 0,
//       "y": 4,
//       "value": "0",
//       "id": 5870
//     },
//     {
//       "x": 1,
//       "y": 4,
//       "value": "X",
//       "id": 3983
//     },
//     {
//       "x": 2,
//       "y": 4,
//       "value": null,
//       "id": 1898
//     },
//     {
//       "x": 3,
//       "y": 4,
//       "value": "0",
//       "id": 2868
//     },
//     {
//       "x": 4,
//       "y": 4,
//       "value": "0",
//       "id": 5886
//     },
//     {
//       "x": 5,
//       "y": 4,
//       "value": null,
//       "id": 326
//     },
//     {
//       "x": 6,
//       "y": 4,
//       "value": null,
//       "id": 372
//     },
//     {
//       "x": 7,
//       "y": 4,
//       "value": null,
//       "id": 6882
//     }
//   ],
//   [
//     {
//       "x": 0,
//       "y": 5,
//       "value": null,
//       "id": 652
//     },
//     {
//       "x": 1,
//       "y": 5,
//       "value": null,
//       "id": 1308
//     },
//     {
//       "x": 2,
//       "y": 5,
//       "value": "X",
//       "id": 8414
//     },
//     {
//       "x": 3,
//       "y": 5,
//       "value": "X",
//       "id": 309
//     },
//     {
//       "x": 4,
//       "y": 5,
//       "value": null,
//       "id": 8340
//     },
//     {
//       "x": 5,
//       "y": 5,
//       "value": null,
//       "id": 5268
//     },
//     {
//       "x": 6,
//       "y": 5,
//       "value": null,
//       "id": 4534
//     },
//     {
//       "x": 7,
//       "y": 5,
//       "value": null,
//       "id": 3782
//     }
//   ],
//   [
//     {
//       "x": 0,
//       "y": 6,
//       "value": null,
//       "id": 5275
//     },
//     {
//       "x": 1,
//       "y": 6,
//       "value": null,
//       "id": 2553
//     },
//     {
//       "x": 2,
//       "y": 6,
//       "value": null,
//       "id": 6256
//     },
//     {
//       "x": 3,
//       "y": 6,
//       "value": null,
//       "id": 1408
//     },
//     {
//       "x": 4,
//       "y": 6,
//       "value": null,
//       "id": 5328
//     },
//     {
//       "x": 5,
//       "y": 6,
//       "value": null,
//       "id": 5162
//     },
//     {
//       "x": 6,
//       "y": 6,
//       "value": null,
//       "id": 6937
//     },
//     {
//       "x": 7,
//       "y": 6,
//       "value": null,
//       "id": 2700
//     }
//   ],
//   [
//     {
//       "x": 0,
//       "y": 7,
//       "value": null,
//       "id": 4875
//     },
//     {
//       "x": 1,
//       "y": 7,
//       "value": null,
//       "id": 1709
//     },
//     {
//       "x": 2,
//       "y": 7,
//       "value": null,
//       "id": 5571
//     },
//     {
//       "x": 3,
//       "y": 7,
//       "value": null,
//       "id": 8002
//     },
//     {
//       "x": 4,
//       "y": 7,
//       "value": null,
//       "id": 2099
//     },
//     {
//       "x": 5,
//       "y": 7,
//       "value": null,
//       "id": 3357
//     },
//     {
//       "x": 6,
//       "y": 7,
//       "value": null,
//       "id": 2146
//     },
//     {
//       "x": 7,
//       "y": 7,
//       "value": null,
//       "id": 2552
//     }
//   ]
// ]
// //  0 1 2 3 4 5 6 7 = x
// //0 * * * * * * * *
// //1 * 0 X 0 * * * *
// //2 * X * X 0 * * *
// //3 0 X * X X 0 * *
// //4 0 X * 0 0 * * *
// //5 * * X X * * * *
// //6 * * * * * * * *
// //7 * * * * * * * *
// //=
// //y
//
//
// describe(("Utils Board"), () => {
//   describe("should get the current figure", () => {
//     test("should get a value X", () => {
//       expect(getCurrentValue(0)).toBe("0")
//       expect(getCurrentValue(2)).toBe("0")
//       expect(getCurrentValue(4)).toBe("0")
//       expect(getCurrentValue(6)).toBe("0")
//       expect(getCurrentValue(8)).toBe("0")
//       expect(getCurrentValue(10)).toBe("0")
//       expect(getCurrentValue(12)).toBe("0")
//     })
//     test("should get a value Y", () => {
//       expect(getCurrentValue(1)).toBe("X")
//       expect(getCurrentValue(3)).toBe("X")
//       expect(getCurrentValue(5)).toBe("X")
//       expect(getCurrentValue(7)).toBe("X")
//       expect(getCurrentValue(9)).toBe("X")
//       expect(getCurrentValue(11)).toBe("X")
//       expect(getCurrentValue(13)).toBe("X")
//
//     })
//   })
//   describe("should be initialize the board ", () => {
//     test("should get the right array length", () => {
//       expect(initialBoard(3).length).toBe(3)
//       expect(initialBoard(5).length).toBe(5)
//       expect(initialBoard(8).length).toBe(8)
//       expect(initialBoard(55).length).toBe(55)
//     })
//     test("should get the number of elements in the row", () => {
//       expect(initialBoard(3).map(el => el.length)).toEqual(Array(3).fill(3))
//       expect(initialBoard(55).map(el => el.length)).toEqual(Array(55).fill(55))
//     })
//   })
//   describe("should check elements of the line on availability win series", () => {
//     test("пустой масссив", () => {
//       expect(checkWinSeriesInLine([], 3, "X")).toBeFalsy()
//     })
//     test("правильный 1", () => {
//       expect(checkWinSeriesInLine(["X", "X", "X", "X", "X", null, "0", null, null], 5, "X")).toBeTruthy()
//     })
//     test("правильный 2", () => {
//       expect(checkWinSeriesInLine(["0", null, "X", "X", "X", "X", "X", "X", null, null, "0", null], 5, "X")).toBeTruthy()
//     })
//     test("правильный 3", () => {
//       expect(checkWinSeriesInLine(["X", "X", "X", null, "0", null, null, "X", "X", "X", "X", "X",], 5, "X")).toBeTruthy()
//     })
//     test("правильный 4", () => {
//       expect(checkWinSeriesInLine(["0", "0", "0", "0", "0", null, null, null], 5, "0")).toBeTruthy()
//     })
//     test("неправильный 1", () => {
//       expect(checkWinSeriesInLine(["0", "0", "0", "X", "0", "0", null, null, null], 5, "0")).toBeFalsy()
//     })
//     test("неправильный 2", () => {
//       expect(checkWinSeriesInLine(["0", "0", null, "0", "X", "0", "0", null, null], 5, "0")).toBeFalsy()
//     })
//     test("неправильный 3", () => {
//       expect(checkWinSeriesInLine(["0", "0", null, "0", "X", "0", "0", null, null], 5, "0")).toBeFalsy()
//     })
//   })
//   describe("Should get values values from the line", () => {
//     test("should get values from the vertical", () => {
//       expect(checkValuesInVertical(boardWithoutWinMock, 4, {"x": 4, "y": 0, "value": Figures.VALUE_X, "id": 5478}))
//         .toEqual([null, null, "0", "X"])
//
//       expect(checkValuesInVertical(boardWithoutWinMock, 4, {"x": 2, "y": 2, "value": Figures.VALUE_X, "id": 5478}))
//         .toEqual([null, "X", null, null, null, "X"])
//
//       expect(checkValuesInVertical(boardWithoutWinMock, 4, {"x": 7, "y": 7, "value": Figures.VALUE_X, "id": 5478}))
//         .toEqual([null, null, null, null])
//
//       expect(checkValuesInVertical(boardWithoutWinMock, 4, {"x": 3, "y": 3, "value": Figures.VALUE_X, "id": 5478}))
//         .toEqual([null, "0", "X", "X", "0", "X", null])
//
//     })
//     test("should get values from the horizontal", () => {
//       expect(checkValuesInHorizontal(boardWithoutWinMock, 4, {"x": 4, "y": 4, "value": Figures.VALUE_X, "id": 5478}))
//         .toEqual(["X", null, "0", "0", null, null, null])
//       expect(checkValuesInHorizontal(boardWithoutWinMock, 4, {"x": 0, "y": 0, "value": Figures.VALUE_X, "id": 5478}))
//         .toEqual([null, null, null, null])
//       expect(checkValuesInHorizontal(boardWithoutWinMock, 4, {"x": 0, "y": 3, "value": Figures.VALUE_X, "id": 5478}))
//         .toEqual(["0", "X", null, "X"])
//       expect(checkValuesInHorizontal(boardWithoutWinMock, 4, {"x": 7, "y": 3, "value": Figures.VALUE_X, "id": 5478}))
//         .toEqual([ "X","0", null, null])
//     })
//     test("should get values from the main diagonal", () => {
//       expect(checkValuesInMainDiagonal(boardWithoutWinMock, 4, {"x": 4, "y": 4, "value": Figures.VALUE_X, "id": 5478}))
//         .toEqual(["0", null, "X", "0", null, null, null])
//       expect(checkValuesInMainDiagonal(boardWithoutWinMock, 4, {"x": 0, "y": 0, "value": Figures.VALUE_X, "id": 5478}))
//         .toEqual([null, "0", null, "X"])
//       expect(checkValuesInMainDiagonal(boardWithoutWinMock, 4, {"x": 7, "y": 3, "value": Figures.VALUE_X, "id": 5478}))
//         .toEqual([null, null, null, null])
//       expect(checkValuesInMainDiagonal(boardWithoutWinMock, 4, {"x": 7, "y": 0, "value": Figures.VALUE_X, "id": 5478}))
//         .toEqual([null])
//       expect(checkValuesInMainDiagonal(boardWithoutWinMock, 4, {"x": 0, "y": 7, "value": Figures.VALUE_X, "id": 5478}))
//         .toEqual([null])
//     })
//     test("should get values from the secondary diagonal", () => {
//       expect(checkValuesInSecondaryDiagonal(boardWithoutWinMock, 4, {"x": 4, "y": 4, "value": Figures.VALUE_X, "id": 5478}))
//         .toEqual([null, null, "X", "0", "0", null, null])
//       expect(checkValuesInSecondaryDiagonal(boardWithoutWinMock, 4, {"x": 0, "y": 0, "value": Figures.VALUE_X, "id": 5478}))
//         .toEqual([null])
//       expect(checkValuesInSecondaryDiagonal(boardWithoutWinMock, 4, {"x": 7, "y": 7, "value": Figures.VALUE_X, "id": 5478}))
//         .toEqual([null])
//       expect(checkValuesInSecondaryDiagonal(boardWithoutWinMock, 4, {"x": 7, "y": 0, "value": Figures.VALUE_X, "id": 5478}))
//         .toEqual(["X", null, null, null])
//       expect(checkValuesInSecondaryDiagonal(boardWithoutWinMock, 4, {"x": 1, "y": 1, "value": Figures.VALUE_X, "id": 5478}))
//         .toEqual([ null, "0", null])
//       expect(checkValuesInSecondaryDiagonal(boardWithoutWinMock, 4, {"x": 5, "y": 3, "value": Figures.VALUE_X, "id": 5478}))
//         .toEqual([ null,"X","0", "0", null, null])
//     })
//   })
//
//   describe("should check win", () => {
//     test("win", () => {
//       expect(checkWin(boardWithoutWinMock,3,{"x": 4, "y": 3, "value": Figures.VALUE_X, "id": 5478}, Figures.VALUE_X)).toBeTruthy()
//       expect(checkWin(boardWithoutWinMock,3,{"x": 3, "y": 2, "value": Figures.VALUE_X, "id": 5478}, Figures.VALUE_X)).toBeTruthy()
//       expect(checkWin(boardWithoutWinMock,3,{"x": 1, "y": 2, "value": Figures.VALUE_X, "id": 5478}, Figures.VALUE_X)).toBeTruthy()
//       expect(checkWin(boardWithoutWinMock,3,{"x": 4, "y": 2, "value": Figures.VALUE_0, "id": 5478}, Figures.VALUE_0)).toBeTruthy()
//
//     })
//     test("lose", () => {
//       expect(checkWin(boardWithoutWinMock,4,{"x": 4, "y": 0, "value": Figures.VALUE_X, "id": 5478}, Figures.VALUE_X)).toBeFalsy()
//       expect(checkWin(boardWithoutWinMock,4,{"x": 1, "y": 1, "value": Figures.VALUE_X, "id": 5478}, Figures.VALUE_X)).toBeFalsy()
//       expect(checkWin(boardWithoutWinMock,4,{"x": 1, "y": 2, "value": Figures.VALUE_X, "id": 5478}, Figures.VALUE_X)).toBeFalsy()
//       expect(checkWin(boardWithoutWinMock,4,{"x": 3, "y": 5, "value": Figures.VALUE_X, "id": 5478}, Figures.VALUE_X)).toBeFalsy()
//     })
//   })
// })
