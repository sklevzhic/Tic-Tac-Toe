import {screen} from "@testing-library/dom";
import '@testing-library/jest-dom'
import {renderSidebar} from "../components/sidebar";
import {IBoard} from "../types/IBoard";

let boardValues: IBoard = {
  "isStart": true,
  "isFinish": false,
  "size": 9,
  "winSeriesInGame": 7,
  "step": 15,
  "cells": [
    [
      "", "", "X", "0", "", "", "",
      "",
      ""
    ],
    [
      "",
      "",
      "",
      "X",
      "0",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "",
      "",
      "",
      "X",
      "0",
      "",
      "",
      ""
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "X",
      "0",
      "",
      ""
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "X",
      "0",
      ""
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "X",
      "0",
      "X",
      ""
    ],
    [
      "",
      "",
      "",
      "",
      "X",
      "0",
      "",
      "",
      ""
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ]
  ],
  "newSize": 9,
  "newWinSeries": 7,
  "users": [
    {
      "name": "Player X",
      "win": 2
    },
    {
      "name": "Player 0",
      "win": 0
    }
  ]
}
describe("sidebar", () => {
  let container1 = renderSidebar(boardValues, jest.fn)
  document.body.innerHTML = ""
  document.body.appendChild(container1)
  it("should renders settings and information", () => {
    expect(screen.getByText("Информация")).toBeInTheDocument()
    expect(screen.getByText("Начать новую игру")).toBeInTheDocument()
  })

})

