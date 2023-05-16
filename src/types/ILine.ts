import type { ActionsForCoordinate } from "./actionsForCoordinate";

export interface ILines {
    [key: string]: ILine;
}

export interface ILine {
    x: ActionsForCoordinate;
    y: ActionsForCoordinate;
    arr: string[];
}
