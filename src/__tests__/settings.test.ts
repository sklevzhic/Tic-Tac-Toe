import {renderSettingsNewGame} from "../components/settings";
import {screen} from "@testing-library/dom";
import '@testing-library/jest-dom'

describe("template settings", () => {
  let container = renderSettingsNewGame(7, 5, jest.fn)
  document.body.appendChild(container)
  it('should render the template settings', function () {
    expect(screen.getByText(/Начать новую игру/i)).toBeVisible()
    expect(screen.getByText(/Размер сетки/i)).toBeVisible()
    expect(screen.getByText(/Победная серия/i)).toBeVisible()
    expect(screen.getByText("Начать")).toBeVisible()
    expect(screen.getAllByRole("spinbutton").length).toBe(2)
  });

  it("should get default values in template", () => {
    let size = screen.getAllByRole("spinbutton")[0] as HTMLInputElement
    expect(size.value).toBe("7")
    expect(size.min).toBe("3")
    expect(size.max).toBe("55")
    let newWinSeries = screen.getAllByRole("spinbutton")[1] as HTMLInputElement
    expect(newWinSeries.value).toBe("5")
    expect(newWinSeries.min).toBe("3")
    expect(newWinSeries.max).toBe("55")
  })

})
