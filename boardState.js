import { returnIdFromPosition, returnPositionFromId } from './chessUtils.js';
import { isSomethingInTheWayDirect } from './isSomethingInTheWay.js';

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
    canMove: (currentId, targetId) => {
      const currentPos = returnPositionFromId(currentId);
      const targetPos = returnPositionFromId(targetId);

      const nothingIsIntheWay = isSomethingInTheWayDirect(currentPos, targetPos);

      // Move only if moved in a direct way, and nothing in the way blocking
      return (currentPos.x == targetPos.x || currentPos.y == targetPos.y) && nothingIsIntheWay;
    },
  },
  H: {
    name: 'Knight',
    canMove: (currentId, targetId) => {
      const currentPos = returnPositionFromId(currentId);
      const targetPos = returnPositionFromId(targetId);

      // Movement of the knight must always have 2 steps on an axis, and one step on the other axis
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

      // EATING
      if (eating) {
        return Math.abs(currentPos.x - targetPos.x) == 1 && currentPos.y - targetPos.y == 1;
      }

      // NOT EATING
      else {
        // Move one step to the front
        const movedOneBlock = currentPos.x == targetPos.x && currentPos.y - targetPos.y == 1;

        // IF FIRST MOVE IS DONE ONLY 1 STEPS ARE ALLOWED
        if (boardState[currentId].firstMoveDone) {
          return movedOneBlock;
        }

        // IF FIRST MOVE IS YET TO BE DONE BOTH 1 STEP AND 2 STEPS ARE ALLOWED
        else {
          // Move 2 steps to the front
          const movedTwoBlocks = currentPos.x == targetPos.x && currentPos.y - targetPos.y == 2;

          // If it moved 2 moves, test if there is anything in its way
          const nothingIsIntheWay = movedTwoBlocks ? isSomethingInTheWayDirect(currentPos, targetPos) : true;

          // CAN MOVE IF MOVED 1 OR 2 STEPS AND NO OBJECT IN THE WAY
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
