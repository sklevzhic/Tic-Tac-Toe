import {renderCell, renderCells} from "../components/board";

describe("board", () => {

  it('should get cells template', function () {
    let wrapper = renderCells([["","",""],["","",""],["","",""]])
    expect(wrapper.classList[0]).toBe("cells__wrapper")
    expect(wrapper.children.length).toBe(3)
    expect(wrapper.children[0].classList[0]).toBe("cells__row")
    expect(wrapper.children[0].children.length).toBe(3)
  });

  it('should render the cell', function () {
    expect(renderCell(1,1, "").classList[0]).toBe("cell")
    expect(renderCell(1,1, "").getAttribute("data-x")).toBe("1")
    expect(renderCell(3,1, "").getAttribute("data-x")).toBe("3")
    expect(renderCell(1,3, "").getAttribute("data-y")).toBe("3")
    expect(renderCell(3,4, "").getAttribute("data-y")).toBe("4")
  });

})
