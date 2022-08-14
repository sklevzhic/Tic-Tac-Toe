import {getInformationTemplate} from "../components/information";
import {getCurrentFigure} from "../components/board";
import {screen} from "@testing-library/dom";
import '@testing-library/jest-dom'

describe("render information", () => {

  it('should get the template information', function () {
    let template = getInformationTemplate(23, 5, getCurrentFigure(23))
    document.body.appendChild(template)
    expect(screen.getByText("Счетчик ходов: 23")).toBeInTheDocument()
    expect(screen.getByText("Текущий ход: 0")).toBeInTheDocument()
    expect(screen.getByText("Победная серия: 5")).toBeInTheDocument()
  });
})
