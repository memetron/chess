import Piece from './piece';
import isOccupied from "../helpers/squareOccupied";

export default class Pawn extends Piece {
    constructor(player: number) {
        super(player, (player === 1 ?
            "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg" :
            "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg"));
    }

    listValidMoves(squares: Piece[][], i: number, j: number, ignoreKing: boolean): number[][] {
        let moves: number[][] = [];
        if (this.player === 2) {
            if (isOccupied(squares, i + 1, j, this.player, ignoreKing) === 0) {
                moves.push([i + 1, j]);
                if (this.firstMove && isOccupied(squares, i + 2, j, this.player, ignoreKing) === 0) moves.push([i + 2, j]);
            }
            if (isOccupied(squares, i + 1, j + 1, this.player, ignoreKing) === 1) moves.push([i + 1, j + 1]);
            if (isOccupied(squares, i + 1, j - 1, this.player, ignoreKing) === 1) moves.push([i + 1, j - 1]);
        } else if (this.player === 1) {
            if (isOccupied(squares, i - 1, j, this.player, ignoreKing) === 0) {
                moves.push([i - 1, j]);
                if (this.firstMove && isOccupied(squares, i - 2, j, this.player, ignoreKing) === 0) moves.push([i - 2, j]);
            }
            if (isOccupied(squares, i - 1, j + 1, this.player, ignoreKing) === 2) moves.push([i - 1, j + 1]);
            if (isOccupied(squares, i - 1, j - 1, this.player, ignoreKing) === 2) moves.push([i - 1, j - 1]);
        }
        return moves;
    }

    generateCoveredSquares(squares: Piece[][], i: number, j: number) {
        console.log(this.player===2?[[i+1,j+1], [i+1,j-1]]:[[i-1,j+1], [i-1,j-1]]);
        this.coveredSquares = this.player===2?[[i+1,j+1], [i+1,j-1]]:[[i-1,j+1], [i-1,j-1]];
    }
}