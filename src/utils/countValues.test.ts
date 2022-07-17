import {countValues} from "./countValues";

describe("count values", () => {
  test("пустой масссив", () => {
    expect(countValues([], 3, "X")).toBeFalsy()
  })
  test("правильный 1", () => {
    expect(countValues(["X", "X", "X", "X", "X", null,"0", null, null], 5, "X")).toBeTruthy()
  })
  test("правильный 2", () => {
    expect(countValues(["0", null, "X", "X", "X", "X", "X","X", null, null,"0", null], 5, "X")).toBeTruthy()
  })
  test("правильный 3", () => {
    expect(countValues(["X", "X", "X", null,"0", null, null,"X", "X", "X", "X", "X",], 5, "X")).toBeTruthy()
  })
  test("правильный 4", () => {
    expect(countValues(["0", "0", "0", "0", "0", null, null, null], 5, "0")).toBeTruthy()
  })
  test("неправильный 1", () => {
    expect(countValues(["0", "0", "0","X", "0", "0", null, null, null], 5, "0")).toBeFalsy()
  })
  test("неправильный 2", () => {
    expect(countValues(["0", "0", null,"0","X", "0", "0",  null, null], 5, "0")).toBeFalsy()
  })
  test("неправильный 3", () => {
    expect(countValues(["0", "0", null, "0", "X", "0", "0",  null, null], 5, "0")).toBeFalsy()
  })

})
