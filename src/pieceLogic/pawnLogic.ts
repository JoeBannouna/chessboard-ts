import { returnPositionFromId } from '../utils/chessUtils.js';
import { isSomethingInTheWayDirect } from '../utils/isSomethingInTheWay/direct.js';

const pawnLogic: PieceLogicFunc = (currentId, targetId) => {
  const currentPos = returnPositionFromId(currentId);
  const targetPos = returnPositionFromId(targetId);

  const currentPieceState = boardState[currentId] as Pawn;
  const targetPieceState = boardState[targetId] as Piece;

  const isEating = typeof targetPieceState.id !== null && ![currentPieceState.type, undefined].includes(targetPieceState.type);

  // EATING
  if (isEating) {
    return Math.abs(currentPos.x - targetPos.x) == 1 && currentPos.y - targetPos.y == 1;
  }

  // NOT EATING
  else {
    // Move one step to the front
    const movedOneBlock = currentPos.x == targetPos.x && currentPos.y - targetPos.y == 1;

    // IF FIRST MOVE IS DONE ONLY 1 STEPS ARE ALLOWED
    if (currentPieceState.firstMoveDone) {
      return movedOneBlock;
    }

    // IF FIRST MOVE IS YET TO BE DONE BOTH 1 STEP AND 2 STEPS ARE ALLOWED
    else {
      // Move 2 steps to the front
      const movedTwoBlocks = currentPos.x == targetPos.x && currentPos.y - targetPos.y == 2;

      // If it moved 2 moves, test if there is anything in its way
      const nothingIsIntheWay = movedTwoBlocks ? isSomethingInTheWayDirect(currentPos, targetPos) : true;

      // CAN MOVE IF MOVED 1 OR 2 STEPS AND NO OBJECT IN THE WAY
      const canMove = (movedTwoBlocks || movedOneBlock) && nothingIsIntheWay;

      // Declare that the first move has been done for this piece
      if (canMove) boardState[currentId] = { ...currentPieceState, firstMoveDone: true };

      return canMove;
    }
  }
};

export default pawnLogic;
