import Piece from './piece';
import isOccupied from "../helpers/squareOccupied";

export default function addMovesInDirection(squares: Piece[][], existingMoves: number[][], src: number[], dir: number[], player: number, ignoreKing: boolean) {
    let moves = existingMoves.slice();
    let iOffset = dir[0];
    let jOffset = dir[1];
    while (src[0] + iOffset < 8 && src[0] + iOffset > -1 && src[1] + jOffset < 8 && src[1] + jOffset > -1
    && isOccupied(squares, src[0]+ iOffset, src[1]+ jOffset, player, ignoreKing) === 0) {
        moves.push([src[0]+ iOffset, src[1]+ jOffset]);
        iOffset += dir[0];
        jOffset += dir[1];
    }
    if (src[0] + iOffset < 8 && src[0] + iOffset > -1 && src[1] + jOffset < 8 && src[1] + jOffset > -1
        && isOccupied(squares, src[0]+ iOffset, src[1]+ jOffset, player, ignoreKing) === (player===1?2:1)) {
        moves.push([src[0]+ iOffset, src[1]+ jOffset]);
    }
    return moves;
}
