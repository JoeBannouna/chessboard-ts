import interact from 'https://cdn.interactjs.io/v1.10.1/interactjs/index.js';
import { dragMoveListener, movePiece, resetPiecePosition } from './dragging.js';

interact('.square:not(.empty) .piece').draggable({
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
});

interact('.hasblack, .empty').dropzone({
  overlap: 0.35,
  accept: '.whitePiece',
  ondrop: movePiece,
  ondragenter: event => event.target.children[0].classList.add('yellow'),
  ondragleave: event => event.target.children[0].classList.remove('yellow'),
  ondropdeactivate: event => event.target.children[0].classList.remove('yellow'),
});

interact('.haswhite, .empty').dropzone({
  overlap: 0.35,
  accept: '.blackPiece',
  ondrop: movePiece,
  ondragenter: event => event.target.children[0].classList.add('yellow'),
  ondragleave: event => event.target.children[0].classList.remove('yellow'),
  ondropdeactivate: event => event.target.children[0].classList.remove('yellow'),
});