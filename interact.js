import interact from 'https://cdn.interactjs.io/v1.10.1/interactjs/index.js';
import { dragMoveListener, movePiece, resetPiecePosition } from './dragging.js';

const piece = interact('.piece');

piece.draggable({
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

interact('.empty').dropzone({
  overlap: 0.35,
  ondrop: movePiece,
});
