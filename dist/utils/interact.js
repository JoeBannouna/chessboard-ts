// @ts-ignore
import interact from 'https://cdn.interactjs.io/v1.10.1/interactjs/index.js';
import { config } from '../ui/dragging.js';
export const switchTurn = () => {
    const makeBlackTurn = () => {
        blackPieces.draggable({ ...config, enabled: true });
        whitePieces.draggable({ ...config, enabled: false });
        return 'black';
    };
    const makeWhiteTurn = () => {
        whitePieces.draggable({ ...config, enabled: true });
        blackPieces.draggable({ ...config, enabled: false });
        return 'white';
    };
    window.turn = window.turn == 'white' ? makeBlackTurn() : makeWhiteTurn();
};
export const reverseTheBoard = () => {
    // Reverse the board
    const doesntMatter = boardState.shift();
    boardState.reverse();
    boardState.unshift(doesntMatter);
};
export default interact;
