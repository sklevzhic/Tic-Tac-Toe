import {Operators, Values } from "../types/values"
import { getValueInCell } from "./getValueInCell"

let arr = [
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

describe("Проверка значения в ячейке", () => {
  // test("пустой масссив", () => {
  //   expect(getValueInCell([[]],5,Operators.INC,2,Operators.DEC,1,Values.VALUE_0)).toBeFalsy()
  // })
  //
  // test("Проверка выбранного значения", () => {
  //   expect(getValueInCell(arr,4,Operators.INC,0, Operators.DEC,0, Values.VALUE_0)).toBe(Values.VALUE_0)
  //   expect(getValueInCell(arr,4,Operators.INC,0, Operators.DEC,0, Values.VALUE_0)).not.toBe(Values.VALUE_X)
  //   expect(getValueInCell(arr,4,Operators.INC,0, Operators.DEC,0, Values.VALUE_0)).not.toBe(null)
  // })
  //
  // test("Проверка схожества выбранного значения и стоящего рядом на диагонали", () => {
  //   let selectedValue =  Values.VALUE_X
  //   expect(getValueInCell(arr,3,Operators.DEC,3, Operators.DEC,0, selectedValue)).toBe(Values.VALUE_X)
  //   expect(getValueInCell(arr,3,Operators.DEC,3, Operators.DEC,1, selectedValue)).toBe(Values.VALUE_X)
  //   expect(getValueInCell(arr,3,Operators.DEC,3, Operators.DEC,1, selectedValue)).not.toBe(Values.VALUE_0)
  //   expect(getValueInCell(arr,3,Operators.DEC,3, Operators.DEC,1, selectedValue)).not.toBe(null)
  //   expect(getValueInCell(arr,3,Operators.DEC,3, Operators.DEC,2, selectedValue)).toBe(null)
  //   expect(getValueInCell(arr,3,Operators.INC,3, Operators.INC,1, selectedValue)).not.toBe(Values.VALUE_X)
  //   expect(getValueInCell(arr,3,Operators.INC,3, Operators.INC,1, selectedValue)).toBe(null)
  // })
  //
  // test("Выход за пределы массива", () => {
  //   let selectedValue =  Values.VALUE_X
  //   expect(getValueInCell(arr,3,Operators.DEC,3, Operators.DEC,5, selectedValue)).toBe(null)
  //   expect(getValueInCell(arr,1,Operators.DEC,2, Operators.DEC,5, selectedValue)).toBe(null)
  //   expect(getValueInCell(arr,55,Operators.DEC,55, Operators.DEC,100, selectedValue)).toBe(null)
  // })

})
