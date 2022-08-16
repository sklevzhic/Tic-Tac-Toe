import {Figures} from "./figures";

export interface IBoard {
  isStart: boolean,
  size: number,
  winSeriesInGame: number,
  step: number,
  cells: string[][],
  newSize: number,
  newWinSeries: number
  users: {
    name: string,
    win: number,
    figure: Figures
  }[]
}
