import Cell from "../models/Cell";
import {Operators, Values} from "../types/values";

export function getValueInCell(array: Cell[][],x:number, xOperator: string,  y:number,yOperator: string, i: number, currentValue: Values):Values | null {
  let x1 = xOperator === Operators.DEC ? x-i : x+i
  let y1 = yOperator === Operators.DEC ? y-i : y+i

  let a = x1 >= 0
  let b = y1 >= 0
  let c = x1 < array.length
  let d = y1 < array.length
  let condition = (a && b && c && d) ? array[x1][y1].value === currentValue : false

  return condition ? array[x1][y1].value : null
}
