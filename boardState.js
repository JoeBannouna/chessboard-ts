export const pieces = {
  R: {
    id: 'R', 
    name: 'Rook',
    url: 'https://icons-for-free.com/iconfiles/png/512/checkmate+chess+figure+game+rook+icon-1320086877598773860.png',
  },
  H: {
    id: 'H', 
    name: 'Knight',
    url: 'https://img.pngio.com/chess-chess-game-chess-knight-chess-piece-game-icon-knight-png-chess-512_512.png',
  },
  B: {
    id: 'B', 
    name: 'Bishop',
    url: 'https://img.icons8.com/ios/452/bishop.png',
  },
  Q: {
    id: 'Q', 
    name: 'Queen',
    url: 'https://media.discordapp.net/attachments/459109304683724812/783952635710668840/PinClipart.com_chess-clipart_18696.png?width=463&height=435',
  },
  K: {
    id: 'K', 
    name: 'King',
    url: 'https://b.kisscc0.com/20180815/pqe/kisscc0-chess-piece-king-queen-chess-endgame-chess-tile-king-3-5b7475ee1ff7c2.709007571534359022131.png',
  },
  P: {
    id: 'P', 
    name: 'Pawn',
    url: 'https://icons-for-free.com/iconfiles/png/512/checkmate+chess+figure+game+pawn+icon-1320086877317510354.png',
  },
  E: {
    id: null, 
    name: 'Empty',
  },
}

const { R, H, B, Q, K, P, E } = pieces;

window.boardState = [
  R, H, B, Q, K, B, H, R, 
  P, P, P, P, P, P, P, P,
  E, E, E, E, E, E, E, E,
  E, E, E, E, E, E, E, E,
  E, E, E, E, E, E, E, E,
  E, E, E, E, E, E, E, E,
  P, P, P, P, P, P, P, P,
  R, H, B, Q, K, B, H, R, 
];
