// Types of a piece wether its empty or not
declare type PresentPiece = { id: string; type: PieceTypes; url: string };
declare type EmptyPiece = { id: null; name: 'Empty' | 'THIS VALUE DOESNT MATTER', type?: undefined };

// Declare type for a piece object
declare type Piece = PresentPiece | EmptyPiece;

interface Pawn extends PresentPiece {
  // Wether the first move is done
  // Becomes true when the first move for the pawn is done
  firstMoveDone?: boolean,

  // If the first move becomes true this will also be true just for one turn
  // It will turn to false the next turn again as the player cant perform the en passent anymore
  enPassant?: boolean,
}

type PieceType = Pawn;

type AllPieceTypes = PieceType | Piece;