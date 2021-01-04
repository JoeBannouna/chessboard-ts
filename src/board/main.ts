import '../ui/interact.js';
import { returnPositionFromId } from '../utils/chessUtils.js';
import { turnSquareGreen } from '../ui/dragging.js';
import { reverseTheBoard, switchTurn } from '../utils/interact.js';
import { renderSquare } from '../ui/square.js';

const board = document.getElementById('board');

window.renderBoard = () => {
  reverseTheBoard();

  const boardSquares = boardState.map((piece, index) => {
    
    return renderSquare(index, piece);
  });
  board.innerHTML = boardSquares.join('');

  document.querySelectorAll('.square:not(.empty) .piece').forEach((square: HTMLElement) => (square.onclick = () => turnSquareGreen([square])));

  // For testing purposes only
  document.querySelectorAll('.square').forEach((square: HTMLElement) => (square.onclick = () => console.log(returnPositionFromId(+square.id.substr(7)))));

  switchTurn();
};

reverseTheBoard();
renderBoard();
