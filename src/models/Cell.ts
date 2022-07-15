import {Values} from "../types/values";

class Cell {
  readonly x: number;
  readonly y: number;
  value: Values | null
  id: number

  constructor(value: Values | null , x: number, y: number) {
    this.x = x
    this.y = y
    this.value = null
    this.id = Math.floor(Math.random() * (10000 - 1 + 1)) + 1; // случайное от 1 до 10000
  }

  generateHTML() {

  }

}

export default Cell
