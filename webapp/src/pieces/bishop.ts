import Piece from './piece';
import addMovesInDirection from "./addMovesInDirection";

export default class Bishop extends Piece {
    constructor(player: number) {
        super(player, (player === 1?
            "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg" :
            "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg"));
    }

    listValidMoves(squares: Piece[][], i: number, j: number, ignoreKing: boolean): number[][] {
        let moves: number[][] = [];
        let offsets = [
            [1, 1],
            [1, -1],
            [-1, 1],
            [-1, -1]
        ]
        offsets.forEach((element) => {
            moves = addMovesInDirection(squares, moves, [i, j], element, this.player, ignoreKing);
        });
        return moves
    }
}