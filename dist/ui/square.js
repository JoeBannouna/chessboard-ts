import { blackOrWhite } from '../utils/chessUtils.js';
// Renders a piece
// @ts-expect-error
export const renderPiece = ({ id, url, type }) => {
    // An if statement to skip the first value of the boardState array
    if (id !== undefined) {
        // If the url property exists, the piece is not empty.. else return as an empty piece
        if (url) {
            return ` has${type}"><piece class="piece ${type}Piece"><img src="${url}"></piece>`;
        }
        return ' empty"><piece class="piece"></piece>';
    }
};
// Renders a square
export const renderSquare = (id, piece) => {
    // Return a square if the piece exists
    const pieceHtml = renderPiece(piece);
    if (pieceHtml)
        return `<square id="square-${id}" class="square ${blackOrWhite(id)}${pieceHtml}</square>`;
    // Otherwise return nothing
    return '';
};
