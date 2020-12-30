import { returnPositionFromId } from '../chessUtils.js';

const kingLogic = (currentId, targetId) => {
  const currentPos = returnPositionFromId(currentId);
  const targetPos = returnPositionFromId(targetId);

  return Math.abs(currentPos.x - targetPos.x) <= 1 && Math.abs(currentPos.y - targetPos.y) <= 1;
}

export default kingLogic;