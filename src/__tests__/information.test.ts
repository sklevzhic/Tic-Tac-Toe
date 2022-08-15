import {screen} from "@testing-library/dom";
import '@testing-library/jest-dom'
import {initialCells} from "../index";
import {IBoard} from "../types/IBoard";
import {renderInformation} from "../components/information";

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

describe("render information", () => {
  it('should get the template information', function () {
    let template = renderInformation(boardValues, jest.fn)
    document.body.appendChild(template)
    expect(screen.getByText("Счетчик ходов: 15")).toBeInTheDocument()
    expect(screen.getByText("Победная серия: 7")).toBeInTheDocument()
    expect(screen.getByText("Player X [2 : 0] Player 0")).toBeInTheDocument()
  });
})
