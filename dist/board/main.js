import { renderSquare, returnPositionFromId } from '../utils/chessUtils.js';
import { turnSquareGreen } from '../ui/dragging.js';
import { reverseTheBoard, switchTurn } from '../ui/interact.js';
const board = document.getElementById('board');
window.renderBoard = () => {
    reverseTheBoard();
    const boardSquares = boardState.map((piece, index) => renderSquare(index, piece));
    board.innerHTML = boardSquares.join('');
    document.querySelectorAll('.square:not(.empty) .piece').forEach((square) => (square.onclick = () => turnSquareGreen([square])));
    // For testing purposes only
    document.querySelectorAll('.square').forEach((square) => (square.onclick = () => console.log(returnPositionFromId(+square.id.substr(7)))));
    switchTurn();
};
reverseTheBoard();
renderBoard();
