import Piece from './piece';
import addMovesInDirection from "./addMovesInDirection";

export default class Rook extends Piece {
    constructor(player: number) {
        super(player, (player === 1?
            "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg" :
            "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg"));
    }

    listValidMoves(squares: Piece[][], i: number, j: number): number[][] {
        let moves: number[][] = [];
        let offsets = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1]
        ]
        offsets.forEach((element) => {
            moves = addMovesInDirection(squares, moves, [i, j], element, this.player);
        });
        return moves
    }
}