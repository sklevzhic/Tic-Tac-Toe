import { Values } from "../types/values"
import { getCurrentValue } from "./getCurrentValue"

test("проверка текущего хода", () => {
  expect(getCurrentValue(16)).toBe(Values.VALUE_X)
  expect(getCurrentValue(15)).toBe(Values.VALUE_0)
  expect(getCurrentValue(14)).toBe(Values.VALUE_X)
  expect(getCurrentValue(13)).toBe(Values.VALUE_0)
})
