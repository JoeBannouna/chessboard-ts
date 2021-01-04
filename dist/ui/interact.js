// @ts-ignore
import interact from 'https://cdn.interactjs.io/v1.10.1/interactjs/index.js';
import '../board/boardState.js';
import { movePiece } from './dragging.js';
export const dropzoneSettings = {
    overlap: 0.35,
    ondrop: movePiece,
    ondragenter: event => event.target.children[0].classList.add('yellow'),
    ondragleave: event => event.target.children[0].classList.remove('yellow'),
    ondropdeactivate: event => event.target.children[0].classList.remove('yellow'),
};
window.turn = '';
window.whitePieces = interact('.square:not(.empty) .piece.whitePiece');
window.blackPieces = interact('.square:not(.empty) .piece.blackPiece');
// DROPZONES
interact('.hasblack, .empty').dropzone({
    accept: '.whitePiece',
    ...dropzoneSettings,
});
interact('.haswhite, .empty').dropzone({
    accept: '.blackPiece',
    ...dropzoneSettings,
});
