// Import the boardState
import './boardState.js';

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

// Renders a piece
// @ts-expect-error
export const renderPiece = ({ id, url, type }: Piece): string => {
  // An if statement to skip the first value of the boardState array
  if (id !== undefined) {
    // If the url property exists, the piece is not empty.. else return as an empty piece
    if (url) {
      return ` has${type}"><piece class="piece ${type}Piece"><img src="${url}"></piece>`;
    }
    return ' empty"><piece class="piece"></piece>';
  }
};

// Renders a square
export const renderSquare = (id: number, piece: Piece): string => {
  // Return a square if the piece exists
  const pieceHtml = renderPiece(piece);
  if (pieceHtml) return `<square id="square-${id}" class="square ${blackOrWhite(id)}${pieceHtml}</square>`;

  // Otherwise return nothing
  return '';
};
