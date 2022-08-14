import {screen} from "@testing-library/dom";
import '@testing-library/jest-dom'
import {renderSidebar} from "../components/sidebar";
import {IBoard} from "../types/IBoard";
import {initialCells} from "../index";

let boardValues: IBoard = {
  "size": 3,
  "winSeriesInGame": 3,
  "step": 0,
  "cells": initialCells(3),
  "newSize": 3,
  "newWinSeries": 3
}
describe("sidebar", () => {
  let container1 = renderSidebar(boardValues, jest.fn)
  document.body.innerHTML = ""
  document.body.appendChild(container1)
  it("should renders settings and information", () => {
    expect(screen.getByText("Начать новую игру")).toBeInTheDocument()
    expect(screen.getByText("Размер сетки")).toBeInTheDocument()
    expect(screen.getByText("Информация")).toBeInTheDocument()
    expect(screen.getByText(/Счетчик ходов:/)).toBeInTheDocument()
  })

})

