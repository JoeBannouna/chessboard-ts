import { returnPositionFromId } from '../utils/chessUtils.js';
import { isSomethingInTheWayDirect } from '../utils/isSomethingInTheWay/direct.js';

const rookLogic: PieceLogicFunc = (currentId, targetId) => {
  const currentPos = returnPositionFromId(currentId);
  const targetPos = returnPositionFromId(targetId);

  const nothingIsIntheWay = isSomethingInTheWayDirect(currentPos, targetPos);

  // Move only if moved in a direct way, and nothing in the way blocking
  return (currentPos.x == targetPos.x || currentPos.y == targetPos.y) && nothingIsIntheWay;
}

export default rookLogic;