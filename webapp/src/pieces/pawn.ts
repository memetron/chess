import Piece from './piece';
import isOccupied from "../helpers/squareOccupied";

export default class Pawn extends Piece {
    constructor(player: number) {
        super(player, (player === 1 ?
            "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg" :
            "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg"));
    }

    listValidMoves(squares: Piece[][], i: number, j: number): number[][] {
        let moves: number[][] = new Array();
        if (this.player === 2) {
            if (isOccupied(squares, i + 1, j) === 0) {
                moves.push([i + 1, j]);
                if (this.firstMove && isOccupied(squares, i + 2, j) === 0) moves.push([i + 2, j]);
            }
            if (isOccupied(squares, i + 1, j + 1) === 1) moves.push([i + 1, j + 1]);
            if (isOccupied(squares, i + 1, j - 1) === 1) moves.push([i + 1, j - 1]);
        } else if (this.player === 1) {
            if (isOccupied(squares, i - 1, j) === 0) {
                moves.push([i - 1, j]);
                if (this.firstMove && isOccupied(squares, i - 2, j) === 0) moves.push([i - 2, j]);
            }
            if (isOccupied(squares, i - 1, j + 1) === 2) moves.push([i - 1, j + 1]);
            if (isOccupied(squares, i - 1, j - 1) === 2) moves.push([i - 1, j - 1]);
        }
        return moves;
    }

}