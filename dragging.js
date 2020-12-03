export const movePiece = ({ relatedTarget, target }) => {
  // Declare block id's
  const targetId = target.id.substring(7);
  const originalId = relatedTarget.parentElement.id.substring(7);

  // SWAP 2 BLOCKS
  const passVal = boardState[originalId - 1];
  boardState[originalId - 1] = boardState[targetId - 1];
  boardState[targetId - 1] = passVal;

  // Render the board
  renderBoard();
};

export const dragMoveListener = event => {
  var target = event.target;
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

  // translate the element
  target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

  // update the posiion attributes
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
};

export const resetPiecePosition = ({ target }) => {
  target.style.transform = 'translate(0, 0)';
  target.setAttribute('data-x', 0);
  target.setAttribute('data-y', 0);
};
