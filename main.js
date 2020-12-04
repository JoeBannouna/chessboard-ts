import { renderSquare } from './chessUtils.js';
import { turnSquareGreen} from './dragging.js';

const board = document.getElementById('board');

window.renderBoard = () => {
  const boardSquares = boardState.map((piece, index) => renderSquare(index + 1));
  board.innerHTML = boardSquares.join('');

  document.querySelectorAll('.square:not(.empty) .piece').forEach(square => square.onclick = () => turnSquareGreen(square));
}

renderBoard();