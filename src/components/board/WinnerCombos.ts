const WINNER_ROW_COMBOS: number[][] = [
  [0, 1, 2, 3],
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
  [4, 5, 6, 7],
];

const getRowValidator = (add: number): number[][] => {
  return WINNER_ROW_COMBOS.map((item) => {
    const [a, b, c, d] = item;
    return [a + add, b + add, c + add, d + add];
  });
};

const getHorizontalWinners = (): number[][] => {
  return [
    // ROW 1
    ...WINNER_ROW_COMBOS,
    // ROW 2
    ...getRowValidator(6),
    // ROW 3
    ...getRowValidator(6 * 2),
    // ROW 4
    ...getRowValidator(6 * 3),
    // ROW 5
    ...getRowValidator(6 * 4),
    // ROW 6
    ...getRowValidator(6 * 5),
  ];
};

const WINNER_COLUMN_COMBOS: number[][] = [
  [0, 7, 14, 21],
  [7, 14, 21, 28],
  [14, 21, 28, 35],
];

const getColumnValidator = (add: number): number[][] => {
  return WINNER_COLUMN_COMBOS.map((item) => {
    const [a, b, c, d] = item;
    return [a + add, b + add, c + add, d + add];
  });
};

const getVerticalWinners = (): number[][] => {
  return [
    // COLUMN 1
    ...WINNER_COLUMN_COMBOS,
    // COLUMN 2
    ...getColumnValidator(1),
    // COLUMN 3
    ...getColumnValidator(2),
    // COLUMN 4
    ...getColumnValidator(3),
    // COLUMN 5
    ...getColumnValidator(4),
    // COLUMN 6
    ...getColumnValidator(5),
    // COLUMN 7
    ...getColumnValidator(6),
  ];
};

const WINNER_DIAGONAL_COMBOS: number[][] = [
  // DIAG right-to-left, top-to-bottom
  // DIAG 1
  [0, 8, 16, 24],
  [8, 16, 24, 32],
  [16, 24, 32, 40],
  // DIAG 2
  [1, 9, 17, 25],
  [9, 17, 25, 33],
  [17, 25, 33, 41],
  // DIAG 3
  [2, 10, 18, 26],
  [10, 18, 26, 34],
  // DIAG 4
  [3, 11, 19, 27],
  // DIAG -1
  [7, 15, 23, 31],
  [15, 23, 31, 39],
  // DIAG -2
  [14, 22, 30, 38],
  // DIAG left-to-right, bottom-to-top
  // DIAG 4
  [21, 15, 9, 3],
  // DIAG 5
  [28, 22, 16, 10],
  [22, 16, 10, 4],
  // DIAG 6
  [35, 29, 23, 17],
  [29, 23, 17, 11],
  [23, 17, 11, 5],
  // DIAG 7
  [36, 30, 24, 18],
  [30, 24, 18, 12],
  [24, 18, 12, 6],
  // DIAG 8
  [37, 31, 25, 19],
  [31, 25, 19, 13],
  // DIAG 9
  [38, 32, 26, 20],
];

const getDiagonalValidator = (add: number): number[][] => {
  return WINNER_DIAGONAL_COMBOS.map((item) => {
    const [a, b, c, d] = item;
    return [a + add, b + add, c + add, d + add];
  });
};

const getDiagonalWinners = (): number[][] => {
  return [
    // COLUMN 1
    ...WINNER_DIAGONAL_COMBOS,
    // COLUMN 2
    ...getDiagonalValidator(1),
    // COLUMN 3
    ...getDiagonalValidator(2),
    // COLUMN 4
    ...getDiagonalValidator(3),
    // COLUMN 5
    ...getDiagonalValidator(4),
    // COLUMN 6
    ...getDiagonalValidator(5),
    // COLUMN 7
    ...getDiagonalValidator(6),
  ];
};

export const WINNER_COMBOS = [
  ...getHorizontalWinners(),
  ...getVerticalWinners(),
  ...getDiagonalWinners(),
];
