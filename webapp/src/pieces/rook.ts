import Piece from './piece';
import isOccupied from "../helpers/squareOccupied";

export default class Rook extends Piece {
    constructor(player: number) {
        super(player, (player === 1?
            "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg" :
            "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg"));
    }

    listValidMoves(squares: Piece[][], i: number, j: number): number[][] {
        let moves = [];
        let iOffset: number;
        let jOffset: number;

        // going up
        iOffset = 1;
        jOffset = 0;
        while (i + iOffset < 8 && isOccupied(squares, i + iOffset, j + jOffset) === 0) {
            moves.push([i + iOffset, j + jOffset]);
            iOffset += 1;
        }
        if (i + iOffset < 8 && isOccupied(squares, i + iOffset, j + jOffset) === (this.player===1?2:1)) {
            moves.push([i + iOffset, j + jOffset]);
        }
        // going down
        iOffset = -1;
        jOffset = 0;
        while (i + iOffset > -1 && isOccupied(squares, i + iOffset, j + jOffset) === 0) {
            moves.push([i + iOffset, j + jOffset]);
            iOffset -= 1;
        }
        if (i + iOffset > -1 && isOccupied(squares, i + iOffset, j + jOffset) === (this.player===1?2:1)) {
            moves.push([i + iOffset, j + jOffset]);
        }
        // going right
        iOffset = 0;
        jOffset = 1;
        while (j + jOffset < 8 && isOccupied(squares, i + iOffset, j + jOffset) === 0) {
            moves.push([i + iOffset, j + jOffset]);
            jOffset += 1;
        }
        if (j + jOffset < 8 && isOccupied(squares, i + iOffset, j + jOffset) === (this.player===1?2:1)) {
            moves.push([i + iOffset, j + jOffset]);
        }
        // going down
        iOffset = 0;
        jOffset = -1;
        while (j + jOffset > -1 && isOccupied(squares, i + iOffset, j + jOffset) === 0) {
            moves.push([i + iOffset, j + jOffset]);
            jOffset -= 1;
        }
        if (j + jOffset > -1 && isOccupied(squares, i + iOffset, j + jOffset) === (this.player===1?2:1)) {
            moves.push([i + iOffset, j + jOffset]);
        }
        return moves
    }
}