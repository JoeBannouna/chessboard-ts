import { returnPositionFromId } from '../utils/chessUtils.js';
const knightLogic = (currentId, targetId) => {
    const currentPos = returnPositionFromId(currentId);
    const targetPos = returnPositionFromId(targetId);
    // Movement of the knight must always have 2 steps on an axis, and one step on the other axis
    const movePos = [Math.abs(currentPos.x - targetPos.x), Math.abs(currentPos.y - targetPos.y)];
    return movePos.includes(1) && movePos.includes(2);
};
export default knightLogic;
