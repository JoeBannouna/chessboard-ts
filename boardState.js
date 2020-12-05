import { returnIdFromPosition, returnPositionFromId } from './chessUtils.js';

export const pieces = {
  black: {
    R: {
      id: 'R',
      url: './assets/chess-set/black/rook.png',
      type: 'black',
    },
    H: {
      id: 'H',
      url: './assets/chess-set/black/knight.png',
      type: 'black',
    },
    B: {
      id: 'B',
      url: './assets/chess-set/black/bishop.png',
      type: 'black',
    },
    Q: {
      id: 'Q',
      url: './assets/chess-set/black/queen.png',
      type: 'black',
    },
    K: {
      id: 'K',
      url: './assets/chess-set/black/king.png',
      type: 'black',
    },
    P: {
      id: 'P',
      url: './assets/chess-set/black/pawn.png',
      type: 'black',
    },
  },
  white: {
    R: {
      id: 'R',
      url: './assets/chess-set/white/rook.png',
      type: 'white',
    },
    H: {
      id: 'H',
      url: './assets/chess-set/white/knight.png',
      type: 'white',
    },
    B: {
      id: 'B',
      url: './assets/chess-set/white/bishop.png',
      type: 'white',
    },
    Q: {
      id: 'Q',
      url: './assets/chess-set/white/queen.png',
      type: 'white',
    },
    K: {
      id: 'K',
      url: './assets/chess-set/white/king.png',
      type: 'white',
    },
    P: {
      id: 'P',
      url: './assets/chess-set/white/pawn.png',
      type: 'white',
    },
  },
  R: {
    name: 'Rook',
    canMove: (currentId, targetId) => true,
  },
  H: {
    name: 'Knight',
    canMove: (currentId, targetId) => {
      const currentPos = returnPositionFromId(currentId);
      const targetPos = returnPositionFromId(targetId);

      const movePos = [Math.abs(currentPos.x - targetPos.x), Math.abs(currentPos.y - targetPos.y)];
      return movePos.includes(1) && movePos.includes(2);
    },
  },
  B: {
    name: 'Bishop',
    canMove: (currentId, targetId) => true,
  },
  Q: {
    name: 'Queen',
    canMove: (currentId, targetId) => true,
  },
  K: {
    name: 'King',
    canMove: (currentId, targetId) => {
      const currentPos = returnPositionFromId(currentId);
      const targetPos = returnPositionFromId(targetId);

      return Math.abs(currentPos.x - targetPos.x) <= 1 && Math.abs(currentPos.y - targetPos.y) <= 1;
    },
  },
  P: {
    name: 'Pawn',
    canMove: (currentId, targetId) => {
      const currentPos = returnPositionFromId(currentId);
      const targetPos = returnPositionFromId(targetId);
      const eating = typeof boardState[targetId].type == 'string' && boardState[targetId].type != boardState[currentId].type;
      let nothingIsIntheWay = true;

      if (eating) {
        return Math.abs(currentPos.x - targetPos.x) == 1 && currentPos.y - targetPos.y == 1;
      } else {
        const movedOneBlock = currentPos.x == targetPos.x && currentPos.y - targetPos.y == 1;
        if (boardState[currentId].firstMoveDone) {
          return movedOneBlock;
        } else {
          const movedTwoBlocks = currentPos.x == targetPos.x && currentPos.y - targetPos.y == 2;
          if (movedTwoBlocks) nothingIsIntheWay = boardState[returnIdFromPosition([currentPos.x, targetPos.y + 1])].name == 'Empty';

          const canMove = (movedTwoBlocks || movedOneBlock) && nothingIsIntheWay;

          // Declare that the first move has been done for this piece
          if (canMove) boardState[currentId] = { ...boardState[currentId], firstMoveDone: true };

          return canMove;
        }
      }
    },
  },
  E: {
    id: null,
    name: 'Empty',
  },
};

const { black, white, E } = pieces;

window.boardState = [
  'THIS VALUE DOESNT MATTER',
  black.R,
  black.H,
  black.B,
  black.Q,
  black.K,
  black.B,
  black.H,
  black.R,
  black.P,
  black.P,
  black.P,
  black.P,
  black.P,
  black.P,
  black.P,
  black.P,
  E,
  E,
  E,
  E,
  E,
  E,
  E,
  E,
  E,
  E,
  E,
  E,
  E,
  E,
  E,
  E,
  E,
  E,
  E,
  E,
  E,
  E,
  E,
  E,
  E,
  E,
  E,
  E,
  E,
  E,
  E,
  E,
  white.P,
  white.P,
  white.P,
  white.P,
  white.P,
  white.P,
  white.P,
  white.P,
  white.R,
  white.H,
  white.B,
  white.Q,
  white.K,
  white.B,
  white.H,
  white.R,
];
