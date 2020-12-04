import { returnPositionFromId } from './chessUtils.js';
import { pieces } from './boardState.js';

// Turn a square green
export const turnSquareGreen = target => {
  document.querySelectorAll('.green').forEach(square => square.classList.remove('green'));
  target.parentElement.classList.add('green');
};

// Move a piece with dragging animation
const move = (target, x, y) => {
  // translate the element
  target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

  // update the posiion attributes
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
};

// Swapping 2 blocks on a board (moving)
export const movePiece = ({ relatedTarget, target }) => {
  // Declare block id's
  const targetId = target.id.substring(7);
  const originalId = relatedTarget.parentElement.id.substring(7);

  // // IF THE THING CAN BE MOVED
  // console.log(returnPositionFromId(originalId), returnPositionFromId(targetId));
  // console.log(boardState[originalId])
  // return;

  // SWAP 2 BLOCKS
  // const passVal = boardState[originalId];
  boardState[targetId] = boardState[originalId];
  boardState[originalId] = pieces.E;

  // Render the board
  renderBoard();
};

// Dragging animations
export const dragMoveListener = event => {
  const { target } = event;
  // keep the dragged position in the data-x/data-y attributes
  const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
  const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

  move(target, x, y);

  turnSquareGreen(target);
};

// Helper function to reset position of animation
export const resetPiecePosition = ({ target }) => {
  move(target, 0, 0);
};
