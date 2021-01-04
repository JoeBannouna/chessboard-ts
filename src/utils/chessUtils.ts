// Import the boardState
import '../board/boardState.js';

// Return position using id
export const returnPositionFromId = (id: number): SquarePosition => {
  let y = 1;
  while (id / 8 > 1) {
    id -= 8;
    y++;
  }
  return { x: +id, y };
};

// Return ID using position
export const returnIdFromPosition = (position: SquarePosition): number => position.x + position.y * 8 - 8;

// Decides if a square should be black or white
export const blackOrWhite = (id: number): PieceTypes => {
  const yEven = returnPositionFromId(id).y % 2 === 0 ? 0 : 1;
  const white = (id - yEven) % 2 === 0;
  return white ? 'white' : 'black';
};