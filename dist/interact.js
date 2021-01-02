// @ts-ignore
import interact from 'https://cdn.interactjs.io/v1.10.1/interactjs/index.js';
import { dragMoveListener, dropzoneSettings, resetPiecePosition } from './dragging.js';
import './boardState.js';
window.turn = '';
window.whitePieces = interact('.square:not(.empty) .piece.whitePiece');
window.blackPieces = interact('.square:not(.empty) .piece.blackPiece');
const config = {
    // keep the element within the area of it's parent
    modifiers: [
        interact.modifiers.restrictRect({
            restriction: 'board',
            endOnly: true,
        }),
    ],
    listeners: {
        move: dragMoveListener,
        end: resetPiecePosition,
    },
};
// DROPZONES
interact('.hasblack, .empty').dropzone({
    accept: '.whitePiece',
    ...dropzoneSettings,
});
interact('.haswhite, .empty').dropzone({
    accept: '.blackPiece',
    ...dropzoneSettings,
});
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
