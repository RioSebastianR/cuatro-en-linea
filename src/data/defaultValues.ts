import { TeamEnum } from "../components/board/TeamEnum";

export const columnCount = 7;
export const rowsCount = 6;
export const columns = [...Array(columnCount).keys()];
export const rows = [...Array(rowsCount).keys()];

export const totalCells = columnCount * rowsCount;
export const headerSelectors: number[] = [...Array(columnCount).keys()];

export interface BoardValue {
  team?: TeamEnum;
  row: number;
  column: number;
  isWinnerCombo?: boolean;
}

const defaultValues: BoardValue[] = [];
rows.forEach((row) => {
  columns.forEach((column) => {
    defaultValues.push({ row, column, isWinnerCombo: false });
  });
});

export { defaultValues };
