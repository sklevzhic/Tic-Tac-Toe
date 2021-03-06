import {Values} from "../types/values";

export function getCurrentValue(step: number): Values {
  return step % 2 ? Values.VALUE_0 : Values.VALUE_X
}
