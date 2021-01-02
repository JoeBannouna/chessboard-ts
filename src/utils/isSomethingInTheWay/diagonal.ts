import { returnIdFromPosition } from '../chessUtils.js';

// Return if something is in the way between 2 positions diagonally
export const isSomethingInTheWayDiagonal = (currentPos: SquarePosition, targetPos: SquarePosition) => {
  const { x: curX, y: curY } = currentPos;
  const { x: tarX, y: tarY } = targetPos;

  const currXBigger = curX > tarX;
  const currYBigger = curY > tarY;

  const add = (num: number) => +num + 1;
  const sub = (num: number) => +num - 1;

  // Create the function that will either add or subtract 1 from each axis looping throgh the blocks in between
  const func = {
    x: currXBigger ? sub : add,
    y: currYBigger ? sub : add,
  };

  return isSomethingInTheWayDiagonalAxis(currentPos, targetPos, func);
};

// Loop through all the blocks between the current pos and target pos in the Y or X axis and return if they are empty or not
const isSomethingInTheWayDiagonalAxis = (currentPos: SquarePosition, targetPos: SquarePosition, func: DiagonalMathFunc) => {
  const blocksBetween = getBlocksBetweenDiagonal(currentPos, targetPos, func);

  // loop through every position checking if its an empty block, if yes return true, else false
  const resultArr = blocksBetween.find(position => boardState[returnIdFromPosition(position)].id != null);
  const nothingInTheWay = typeof resultArr == 'undefined' ? true : false;

  return nothingInTheWay;
};

// Get blocks in between 2 positions diagonally
const getBlocksBetweenDiagonal = (currentPos: SquarePosition, targetPos: SquarePosition, func: DiagonalMathFunc) => {
  // Declare the current state
  const state = { ...currentPos };

  // Create an array of positions between the original and target positions
  let blocksBetween: SquarePosition[] = [];

  while (state.x !== targetPos.x) {
    state.x = func.x(state.x);
    state.y = func.y(state.y);

    const { x, y } = state;
    blocksBetween.push({ x, y });
  }

  // Remove the last element as its not "in between" the current and target position
  blocksBetween.pop();

  // Return the blocks id's
  return blocksBetween;
};
