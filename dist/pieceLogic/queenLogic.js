import { returnPositionFromId } from '../chessUtils.js';
import { isSomethingInTheWayDiagonal } from '../isSomethingInTheWay/diagonal.js';
import { isSomethingInTheWayDirect } from '../isSomethingInTheWay/direct.js';
const queenLogic = (currentId, targetId) => {
    const currentPos = returnPositionFromId(currentId);
    const targetPos = returnPositionFromId(targetId);
    // Diagonal movement
    const canMoveDiagonal = Math.abs(currentPos.x - targetPos.x) == Math.abs(currentPos.y - targetPos.y);
    const moveDiagonal = canMoveDiagonal && isSomethingInTheWayDiagonal(currentPos, targetPos);
    // Direct movement
    const canMoveDirect = currentPos.x == targetPos.x || currentPos.y == targetPos.y;
    const moveDirect = canMoveDirect && isSomethingInTheWayDirect(currentPos, targetPos);
    // Move only if in a diagonal direction
    return moveDiagonal || moveDirect;
};
export default queenLogic;
