import { TeamEnum } from "../components/board/TeamEnum";

export interface BoardValue {
  team?: TeamEnum;
  index: number;
}

export const defaultValues: BoardValue[] = [...Array(42).keys()].map((i) => ({
  team: undefined,
  index: i,
}));
