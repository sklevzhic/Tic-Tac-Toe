import {checkElementsInLine} from "./checkElementsInLine";

describe("count values", () => {
  test("пустой масссив", () => {
    expect(checkElementsInLine([], 3, "X")).toBeFalsy()
  })
  test("правильный 1", () => {
    expect(checkElementsInLine(["X", "X", "X", "X", "X", null,"0", null, null], 5, "X")).toBeTruthy()
  })
  test("правильный 2", () => {
    expect(checkElementsInLine(["0", null, "X", "X", "X", "X", "X","X", null, null,"0", null], 5, "X")).toBeTruthy()
  })
  test("правильный 3", () => {
    expect(checkElementsInLine(["X", "X", "X", null,"0", null, null,"X", "X", "X", "X", "X",], 5, "X")).toBeTruthy()
  })
  test("правильный 4", () => {
    expect(checkElementsInLine(["0", "0", "0", "0", "0", null, null, null], 5, "0")).toBeTruthy()
  })
  test("неправильный 1", () => {
    expect(checkElementsInLine(["0", "0", "0","X", "0", "0", null, null, null], 5, "0")).toBeFalsy()
  })
  test("неправильный 2", () => {
    expect(checkElementsInLine(["0", "0", null,"0","X", "0", "0",  null, null], 5, "0")).toBeFalsy()
  })
  test("неправильный 3", () => {
    expect(checkElementsInLine(["0", "0", null, "0", "X", "0", "0",  null, null], 5, "0")).toBeFalsy()
  })

})
