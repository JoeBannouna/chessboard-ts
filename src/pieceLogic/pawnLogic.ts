import { returnPositionFromId } from '../utils/chessUtils.js';
import { isSomethingInTheWayDirect } from '../utils/isSomethingInTheWay/direct.js';

const pawnLogic: PieceLogicFunc = (currentId, targetId) => {
  // PUBLIC VARS
  const currentPos = returnPositionFromId(currentId);
  const targetPos = returnPositionFromId(targetId);

  const currentPieceState = boardState[currentId] as Pawn;
  const targetPieceState = boardState[targetId] as Piece;

  const isEating = typeof targetPieceState.id !== null && ![currentPieceState.type, undefined].includes(targetPieceState.type);

  // FUNCTIONS
  const firstMove = (movedOneBlock: boolean) => {
    // IF FIRST MOVE IS YET TO BE DONE BOTH 1 STEP AND 2 STEPS ARE ALLOWED

    // Move 2 steps to the front
    const movedTwoBlocks = currentPos.x == targetPos.x && currentPos.y - targetPos.y == 2;

    // If it moved 2 moves, test if there is anything in its way
    const nothingIsIntheWay = movedTwoBlocks ? isSomethingInTheWayDirect(currentPos, targetPos) : true;

    // CAN MOVE IF MOVED 1 OR 2 STEPS AND NO OBJECT IN THE WAY
    const canMove = (movedTwoBlocks || movedOneBlock) && nothingIsIntheWay;

    // Declare that the first move has been done for this piece
    if (canMove) {
      // Declare the first move as DONE for the piece
      boardState[currentId] = { ...currentPieceState, firstMoveDone: true } as Pawn;

      // Enable the ability to be eaten by un passent
      if (movedTwoBlocks) boardState[currentId] = { ...currentPieceState, enPassant: true } as Pawn;
      else boardState[currentId] = { ...currentPieceState, enPassant: false } as Pawn;
    }

    return canMove;
  };

  // LOGIC HERE

  // eating
  if (isEating) {
    boardState[currentId] = { ...currentPieceState, enPassant: false } as Pawn;
    return Math.abs(currentPos.x - targetPos.x) == 1 && currentPos.y - targetPos.y == 1;
  }

  // not eating
  else {
    // Move one step to the front
    const movedOneBlock = currentPos.x == targetPos.x && currentPos.y - targetPos.y == 1;

    // any move that is not eating
    if (currentPieceState.firstMoveDone) {
      boardState[currentId] = { ...currentPieceState, enPassant: false } as Pawn;
      return movedOneBlock;
    }

    // First move
    else {
      const canMove = firstMove(movedOneBlock);
      return canMove;
    }
  }
};

export default pawnLogic;
