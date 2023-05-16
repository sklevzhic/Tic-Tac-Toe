import { renderCell, renderCells } from "../components/board";

describe("board", () => {
    it('should get cells template', function() {
        const wrapper = renderCells([ [ "", "", "" ], [ "", "", "" ], [ "", "", "" ] ]);

        expect(wrapper.classList[0]).toBe("cells__wrapper");

        const THREE_ROWS = 3;
        const THREE_COLUMNS = 3;

        expect(wrapper.children.length).toBe(THREE_COLUMNS);
        expect(wrapper.children[0].classList[0]).toBe("cells__row");
        expect(wrapper.children[0].children.length).toBe(THREE_ROWS);
    });

    it('should render the cell', function() {
        const X1 = 1;
        const X3 = 3;
        const Y1 = 1;
        const Y3 = 3;
        const Y4 = 4;

        expect(renderCell(X1, Y1, "").classList[0]).toBe("cell");
        expect(renderCell(X1, Y1, "").dataset.x).toBe("1");
        expect(renderCell(X3, Y1, "").dataset.x).toBe("3");
        expect(renderCell(X1, Y3, "").dataset.y).toBe("3");
        expect(renderCell(X3, Y4, "").dataset.y).toBe("4");
    });
});
