import {screen} from "@testing-library/dom";
import '@testing-library/jest-dom'
import {getModalTemplate} from "../components/modal";
import {getCurrentFigure} from "../components/board";

describe("test", () => {
  let container = getModalTemplate(getCurrentFigure(23), jest.fn)
  document.body.appendChild(container)

  it('should get the template modal', function () {
    expect(screen.getByText("Победа 0")).toBeInTheDocument()
    expect(screen.getByText("Начать новую игру")).toBeInTheDocument()
  });

  it('should get win phrase in the modal', function () {
    expect(screen.getByText("Победа 0")).toBeInTheDocument()
  });

  it('should get button new game in the modal', function () {
    expect(screen.getByText("Победа 0")).toBeInTheDocument()
  });
})
