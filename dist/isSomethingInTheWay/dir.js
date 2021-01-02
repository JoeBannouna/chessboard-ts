import { returnIdFromPosition } from '../chessUtils.js';
// Return if something is in the way between 2 positions directly
export const isSomethingInTheWayDirect = (currentPos, targetPos) => {
    const { x: curX, y: curY } = currentPos;
    const { x: tarX, y: tarY } = targetPos;
    if (curX == tarX)
        return isSomethingInTheWayDirectAxis(currentPos, targetPos, 'y');
    if (curY == tarY)
        return isSomethingInTheWayDirectAxis(currentPos, targetPos, 'x');
};
// Get blocks in between 2 positions horizontally or vertically
const getBlocksBetween = (currentPos, targetPos, moveAxis) => {
    const { x: curX, y: curY } = currentPos;
    const { x: tarX, y: tarY } = targetPos;
    // Declare the axis
    const axisIsX = moveAxis == 'x';
    const axis = (x, y) => (axisIsX ? x : y);
    // Define all the variables
    const curVar = axis(curX, curY);
    const tarVar = axis(tarX, tarY);
    const fixedAxis = axis(curY, curX);
    const [biggerVal, smallerVal] = curVar > tarVar ? [curVar, tarVar] : [tarVar, curVar];
    // Create an array of positions between the original and target positions
    let blocksBetween = [];
    // If the fixed axis is Y, i Shouls be X, and vice versa..
    for (let i = smallerVal + 1; i < biggerVal; i++)
        blocksBetween.push(axis([i, fixedAxis], [fixedAxis, i]));
    return blocksBetween;
};
// Loop through all the blocks between the current pos and target pos in the Y or X axis and return if they are empty or not
const isSomethingInTheWayDirectAxis = (currentPos, targetPos, axis) => {
    const blocksBetween = getBlocksBetween(currentPos, targetPos, axis);
    // loop through every position checking if its an empty block, if yes return true, else false
    const resultArr = blocksBetween.find(position => boardState[returnIdFromPosition(position)].id != null);
    const nothingInTheWay = typeof resultArr == 'undefined' ? true : false;
    return nothingInTheWay;
};
