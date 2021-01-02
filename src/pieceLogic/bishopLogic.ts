import { returnPositionFromId } from '../utils/chessUtils.js';
import { isSomethingInTheWayDiagonal } from '../utils/isSomethingInTheWay/diagonal.js';

const bishopLogic: PieceLogicFunc = (currentId, targetId) => {
  const currentPos = returnPositionFromId(currentId);
  const targetPos = returnPositionFromId(targetId);

  const nothingIsIntheWay = isSomethingInTheWayDiagonal(currentPos, targetPos);

  // Move only if in a diagonal direction
  return (Math.abs(currentPos.x - targetPos.x) == Math.abs(currentPos.y - targetPos.y)) && nothingIsIntheWay;
};

export default bishopLogic;
