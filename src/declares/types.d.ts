// Declare a type for the square position object
declare type SquarePosition = { x: number; y: number };

// Declare the type for possible pieces
declare type PieceTypes = 'white' | 'black';

// Declare the type for possible turns
declare type TurnTypes = PieceTypes | '';

// Type for pieces set like black or white
declare type PieceSet = {
  R: Piece;
  H: Piece;
  B: Piece;
  Q: Piece;
  K: Piece;
  P: Piece;
};

// The "canMove" function that takes in a current and target pos, and returns if the piece can be moved
declare type PieceLogicFunc = (currentPosId: number, targetPosId: number) => boolean;

// BoardState array
declare type BoardState = AllPieceTypes[];

// A type for a math function that is used in detecting the in between blocks in a diagonal moving piece
declare type DiagonalMathFunc = {
  x: (num: number) => number;
  y: (num: number) => number;
};

// An axis type
declare type Axis = 'y' | 'x';