import { renderSettingsNewGame } from "../components/settings";
import { screen } from "@testing-library/dom";
import '@testing-library/jest-dom';

describe("template settings", () => {
    const NEW_SIZE = 7;
    const NEW_WIN_SERIES = 5;
    const container = renderSettingsNewGame(NEW_SIZE, NEW_WIN_SERIES, jest.fn);

    document.body.append(container);
    it('should render the template settings', function() {
        expect(screen.getByText(/начать новую игру/i)).toBeVisible();
        expect(screen.getByText(/размер сетки/i)).toBeVisible();
        expect(screen.getByText(/победная серия/i)).toBeVisible();
        expect(screen.getByText("Начать")).toBeVisible();

        const  SPIN_BUTTONS_LENGTH = 2;

        expect(screen.getAllByRole("spinbutton").length).toBe(SPIN_BUTTONS_LENGTH);
    });

    it("should get default values in template", () => {
        const size = screen.getAllByRole("spinbutton")[0] as HTMLInputElement;

        expect(size.value).toBe("7");
        expect(size.min).toBe("3");
        expect(size.max).toBe("55");

        const newWinSeries = screen.getAllByRole("spinbutton")[1] as HTMLInputElement;

        expect(newWinSeries.value).toBe("5");
        expect(newWinSeries.min).toBe("3");
        expect(newWinSeries.max).toBe("55");
    });
});
