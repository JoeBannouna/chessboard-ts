// Import the boardState
import { } from './boardState.js';

// Return position using id
export const returnPositionFromId = id => {
  id = parseFloat(id);
  let y = 1;
  while (id / 8 > 1) {
    id = id - 8;
    y++;
  }
  return { y: y, x: id };
};

// Return ID using position
export const returnIdFromPosition = position => (position[0] + (position[1]) * 8) - 8;

// Decides if a square should be black or white
export const blackOrWhite = id => {
  const yEven = returnPositionFromId(id).y % 2 === 0;
  const white = (id - !yEven) % 2 === 0;
  return white ? 'white' : 'black';
};

// Renders a piece
export const renderPiece = id => {
  if (boardState[id]) {
    const {url, type} = boardState[id];
    return url ? ` has${type}"><piece class="piece ${type}Piece"><img src="${url}"></piece>` : ' empty"><piece class="piece"></piece>';
  }
};

// Renders a square
export const renderSquare = id => `<square id="square-${id}" class="square ${blackOrWhite(id)}${renderPiece(id)}</square>`;
