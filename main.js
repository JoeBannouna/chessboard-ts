import { renderSquare } from './chessUtils.js';

const board = document.getElementById('board');

window.renderBoard = () => {
  const boardSquares = boardState.map((piece, index) => renderSquare(index + 1));
  board.innerHTML = boardSquares.join('');
}

renderBoard();