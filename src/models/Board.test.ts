import {initialBord} from "./Board";

describe("проверка инициализации доски", () => {
  test("проверка инициализации строк", () => {
    expect(initialBord(5).length).toBe(5)
  })
  test("проверка инициализации столбцов", () => {
    expect(initialBord(5)[0].length).toBe(5)
    expect(initialBord(5)[1].length).toBe(5)
    expect(initialBord(5)[2].length).toBe(5)
    expect(initialBord(5)[3].length).toBe(5)
    expect(initialBord(5)[4].length).toBe(5)
    expect(initialBord(5)[5]).toBeUndefined()
  })

  test("проверка несуществующего столбца", () => {
    expect(initialBord(5)[4].length).toBe(5)
    expect(initialBord(5)[5]).toBeUndefined()
  })

  test("проверка несуществующей строки", () => {
    expect(initialBord(5).length).toBe(5)
    expect(initialBord(5).length).not.toBe(4)
    expect(initialBord(5).length).not.toBe(6)

  })

})



