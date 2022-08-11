export interface IBoard {
  size: number,
  winSeriesInGame: number,
  step: number,
  cells: string[][],
  newSize: number,
  newWinSeries: number
}
