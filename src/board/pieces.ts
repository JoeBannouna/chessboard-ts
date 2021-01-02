import bishopLogic from '../pieceLogic/bishopLogic.js';
import kingLogic from '../pieceLogic/kingLogic.js';
import knightLogic from '../pieceLogic/knightLogic.js';
import pawnLogic from '../pieceLogic/pawnLogic.js';
import rookLogic from '../pieceLogic/rookLogic.js';
import queenLogic from '../pieceLogic/queenLogic.js';

const returnType = (type: PieceTypes): PieceSet => ({
  R: { id: 'R', type, url: `./assets/chess-set/${type}/rook.png` },
  H: { id: 'H', type, url: `./assets/chess-set/${type}/knight.png` },
  B: { id: 'B', type, url: `./assets/chess-set/${type}/bishop.png` },
  Q: { id: 'Q', type, url: `./assets/chess-set/${type}/queen.png` },
  K: { id: 'K', type, url: `./assets/chess-set/${type}/king.png` },
  P: { id: 'P', type, url: `./assets/chess-set/${type}/pawn.png` },
});

// The type of the piece, wether its a rook, a king, a pawn etc..
interface PieceType {
  name: string;
  canMove: PieceLogicFunc;
}

interface PawnPiece extends PieceType {
  firstMoveDone?: boolean;
}

interface Pieces {
  black: PieceSet;
  white: PieceSet;
  R: PieceType;
  H: PieceType;
  B: PieceType;
  Q: PieceType;
  K: PieceType;
  P: PawnPiece;
  E: EmptyPiece;
}

const pieces: Pieces = {
  black: returnType('black'),
  white: returnType('white'),
  R: {
    name: 'Rook',
    canMove: rookLogic,
  },
  H: {
    name: 'Knight',
    canMove: knightLogic,
  },
  B: {
    name: 'Bishop',
    canMove: bishopLogic,
  },
  Q: {
    name: 'Queen',
    canMove: queenLogic,
  },
  K: {
    name: 'King',
    canMove: kingLogic,
  },
  P: {
    name: 'Pawn',
    canMove: pawnLogic,
  },
  E: {
    id: null,
    name: 'Empty',
  },
};

export default pieces;
