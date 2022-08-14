import {fireEvent, getByText, screen} from "@testing-library/dom";
import '@testing-library/jest-dom'
import {initialCells, start} from "../index";

describe("start", () => {
  document.body.innerHTML = ""
  start()
  it("should render sidebar", () => {
    expect(screen.getByText(/Начать новую игру/i)).toBeInTheDocument()
    expect(screen.getByText("Размер сетки")).toBeInTheDocument()
    expect(screen.getByText("Информация")).toBeInTheDocument()
    expect(screen.getByText(/Счетчик ходов: 0/)).toBeInTheDocument()
  })
  it("should render board", () => {
    expect(document.body.querySelectorAll(".cells__row").length).toBe(3)
    expect(document.body.querySelectorAll(".cell").length).toBe(9)
    expect(document.body.querySelectorAll(".cell__0").length).toBe(0)
    expect(document.body.querySelectorAll(".cell__X").length).toBe(0)
    expect(document.body.querySelectorAll(".disable").length).toBe(0)

  })
  it("should change values in inputs", () => {
    let size = screen.getByLabelText("Размер сетки") as HTMLInputElement
    let winSeries = screen.getByLabelText("Победная серия") as HTMLInputElement
    expect(size.value).toBe("3")
    expect(winSeries.value).toBe("3")

    fireEvent.change(size, {target: {value: '23'}})
    fireEvent.change(winSeries, {target: {value: '5'}})
    expect(size.value).toBe("23")
    expect(winSeries.value).toBe("5")
    fireEvent.change(winSeries, {target: {value: '28'}})
    expect(winSeries.value).toBe("23")


    fireEvent.change(size, {target: {value: '1'}})
    fireEvent.change(winSeries, {target: {value: '1'}})
    expect(size.value).toBe("3")
    expect(winSeries.value).toBe("3")

    fireEvent.change(size, {target: {value: '56'}})
    fireEvent.change(winSeries, {target: {value: '56'}})
    expect(size.value).toBe("55")
    expect(winSeries.value).toBe("55")
  })
  it("should create new game with new sizes", () => {
    let size = screen.getByLabelText("Размер сетки") as HTMLInputElement
    let winSeries = screen.getByLabelText("Победная серия") as HTMLInputElement
    let button = screen.getByText("Начать") as HTMLButtonElement
    expect(document.body.querySelectorAll(".cells__row").length).toBe(3)
    expect(document.body.querySelectorAll(".cell").length).toBe(9)
    fireEvent.change(size, {target: {value: '10'}})
    fireEvent.change(winSeries, {target: {value: '4'}})
    fireEvent.click(button)
    expect(document.body.querySelectorAll(".cells__row").length).toBe(10)
    expect(document.body.querySelectorAll(".cell").length).toBe(100)

  })
  it("should click to cell", () => {
    let size = screen.getByLabelText("Размер сетки") as HTMLInputElement
    let winSeries = screen.getByLabelText("Победная серия") as HTMLInputElement
    let button = screen.getByText("Начать") as HTMLButtonElement
    fireEvent.change(size, {target: {value: '10'}})
    fireEvent.change(winSeries, {target: {value: '4'}})
    fireEvent.click(button)


    fireEvent.click(document.querySelectorAll(".cell")[1])
    fireEvent.click(document.querySelectorAll(".cell")[1])
    expect(screen.getByText(/Счетчик ходов: 1/)).toBeInTheDocument()
    expect(document.body.querySelectorAll(".cell__X").length).toBe(1)
    expect(document.body.querySelectorAll(".disable").length).toBe(1)
    fireEvent.click(document.querySelectorAll(".cell")[2])
    expect(screen.getByText(/Счетчик ходов: 2/)).toBeInTheDocument()
    expect(document.body.querySelectorAll(".cell__0").length).toBe(1)
    expect(document.body.querySelectorAll(".disable").length).toBe(2)
    fireEvent.click(document.querySelectorAll(".cell")[11])
    expect(screen.getByText(/Счетчик ходов: 3/)).toBeInTheDocument()
    expect(document.body.querySelectorAll(".cell__X").length).toBe(2)
    expect(document.body.querySelectorAll(".disable").length).toBe(3)
    fireEvent.click(document.querySelectorAll(".cell")[12])
    expect(screen.getByText(/Счетчик ходов: 4/)).toBeInTheDocument()
    expect(document.body.querySelectorAll(".cell__0").length).toBe(2)
    expect(document.body.querySelectorAll(".disable").length).toBe(4)

    fireEvent.click(document.querySelectorAll(".cell")[21])
    expect(screen.getByText(/Счетчик ходов: 5/)).toBeInTheDocument()
    expect(document.body.querySelectorAll(".cell__X").length).toBe(3)
    expect(document.body.querySelectorAll(".disable").length).toBe(5)
    fireEvent.click(document.querySelectorAll(".cell")[22])
    expect(screen.getByText(/Счетчик ходов: 6/)).toBeInTheDocument()
    expect(document.body.querySelectorAll(".cell__0").length).toBe(3)
    expect(document.body.querySelectorAll(".disable").length).toBe(6)

  })
  it("should show the win", () => {
    let size = screen.getByLabelText("Размер сетки") as HTMLInputElement
    let winSeries = screen.getByLabelText("Победная серия") as HTMLInputElement
    let button = screen.getByText("Начать") as HTMLButtonElement
    fireEvent.change(size, {target: {value: '10'}})
    fireEvent.change(winSeries, {target: {value: '4'}})
    fireEvent.click(button)


    fireEvent.click(document.querySelectorAll(".cell")[1])
    fireEvent.click(document.querySelectorAll(".cell")[1])
    expect(screen.getByText(/Счетчик ходов: 1/)).toBeInTheDocument()
    expect(document.body.querySelectorAll(".cell__X").length).toBe(1)
    expect(document.body.querySelectorAll(".disable").length).toBe(1)
    fireEvent.click(document.querySelectorAll(".cell")[2])
    expect(screen.getByText(/Счетчик ходов: 2/)).toBeInTheDocument()
    expect(document.body.querySelectorAll(".cell__0").length).toBe(1)
    expect(document.body.querySelectorAll(".disable").length).toBe(2)
    fireEvent.click(document.querySelectorAll(".cell")[11])
    expect(screen.getByText(/Счетчик ходов: 3/)).toBeInTheDocument()
    expect(document.body.querySelectorAll(".cell__X").length).toBe(2)
    expect(document.body.querySelectorAll(".disable").length).toBe(3)
    fireEvent.click(document.querySelectorAll(".cell")[12])
    expect(screen.getByText(/Счетчик ходов: 4/)).toBeInTheDocument()
    expect(document.body.querySelectorAll(".cell__0").length).toBe(2)
    expect(document.body.querySelectorAll(".disable").length).toBe(4)

    fireEvent.click(document.querySelectorAll(".cell")[21])
    expect(screen.getByText(/Счетчик ходов: 5/)).toBeInTheDocument()
    expect(document.body.querySelectorAll(".cell__X").length).toBe(3)
    expect(document.body.querySelectorAll(".disable").length).toBe(5)
    fireEvent.click(document.querySelectorAll(".cell")[22])
    expect(screen.getByText(/Счетчик ходов: 6/)).toBeInTheDocument()
    expect(document.body.querySelectorAll(".cell__0").length).toBe(3)
    expect(document.body.querySelectorAll(".disable").length).toBe(6)

    fireEvent.click(document.querySelectorAll(".cell")[31])
    expect(screen.getByText(/Счетчик ходов: 7/)).toBeInTheDocument()
    expect(document.body.querySelectorAll(".cell__X").length).toBe(4)
    expect(document.body.querySelectorAll(".disable").length).toBe(7)

    expect(screen.getByText("Победа")).toBeInTheDocument()
  })
  it("should start new game after win", () => {
    let size = screen.getByLabelText("Размер сетки") as HTMLInputElement
    let winSeries = screen.getByLabelText("Победная серия") as HTMLInputElement
    let button = screen.getByText("Начать") as HTMLButtonElement
    fireEvent.change(size, {target: {value: '10'}})
    fireEvent.change(winSeries, {target: {value: '4'}})
    fireEvent.click(button)


    fireEvent.click(document.querySelectorAll(".cell")[1])
    fireEvent.click(document.querySelectorAll(".cell")[1])
    expect(screen.getByText(/Счетчик ходов: 1/)).toBeInTheDocument()
    expect(document.body.querySelectorAll(".cell__X").length).toBe(1)
    expect(document.body.querySelectorAll(".disable").length).toBe(1)
    fireEvent.click(document.querySelectorAll(".cell")[2])
    expect(screen.getByText(/Счетчик ходов: 2/)).toBeInTheDocument()
    expect(document.body.querySelectorAll(".cell__0").length).toBe(1)
    expect(document.body.querySelectorAll(".disable").length).toBe(2)
    fireEvent.click(document.querySelectorAll(".cell")[11])
    expect(screen.getByText(/Счетчик ходов: 3/)).toBeInTheDocument()
    expect(document.body.querySelectorAll(".cell__X").length).toBe(2)
    expect(document.body.querySelectorAll(".disable").length).toBe(3)
    fireEvent.click(document.querySelectorAll(".cell")[12])
    expect(screen.getByText(/Счетчик ходов: 4/)).toBeInTheDocument()
    expect(document.body.querySelectorAll(".cell__0").length).toBe(2)
    expect(document.body.querySelectorAll(".disable").length).toBe(4)

    fireEvent.click(document.querySelectorAll(".cell")[21])
    expect(screen.getByText(/Счетчик ходов: 5/)).toBeInTheDocument()
    expect(document.body.querySelectorAll(".cell__X").length).toBe(3)
    expect(document.body.querySelectorAll(".disable").length).toBe(5)
    fireEvent.click(document.querySelectorAll(".cell")[22])
    expect(screen.getByText(/Счетчик ходов: 6/)).toBeInTheDocument()
    expect(document.body.querySelectorAll(".cell__0").length).toBe(3)
    expect(document.body.querySelectorAll(".disable").length).toBe(6)

    fireEvent.click(document.querySelectorAll(".cell")[31])
    expect(screen.getByText(/Счетчик ходов: 7/)).toBeInTheDocument()
    expect(document.body.querySelectorAll(".cell__X").length).toBe(4)
    expect(document.body.querySelectorAll(".disable").length).toBe(7)

    expect(screen.getByText("Победа")).toBeInTheDocument()
    let buttonModal = screen.getAllByRole("button")[1]
    fireEvent.click(buttonModal)

    expect(screen.getByText(/Счетчик ходов: 0/)).toBeInTheDocument()
  })
})
