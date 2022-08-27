import {screen} from "@testing-library/dom";
import '@testing-library/jest-dom'
import {initialCells} from "../index";
import {IBoard} from "../types/IBoard";
import {renderInformation} from "../components/information";
import {Figures} from "../types/figures";

let boardValues: IBoard = {
  "size": 3,
  "winSeriesInGame": 7,
  "step": 15,
  "cells": initialCells(3),
  "newSize": 3,
  "newWinSeries": 3,
  "users": [
    {name: "Player", win: 2, figure: Figures.FIGUREX},
    {name: "Player", win: 0, figure: Figures.FIGURE0},
  ]
}

describe("render information", () => {
  it('should get the template information', function () {
    let template = renderInformation(boardValues)
    document.body.appendChild(template)
    expect(screen.getByText("Счетчик ходов: 15")).toBeInTheDocument()
    expect(screen.getByText("Победная серия: 7")).toBeInTheDocument()
    expect(screen.getByText("Player X [2 : 0] Player 0")).toBeInTheDocument()
  });
})
