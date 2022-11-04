import Piece from './piece';
import addMovesInDirection from "./addMovesInDirection";

export default class Queen extends Piece {
    constructor(player: number) {
        super(player, (player === 1 ?
            "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg" :
            "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg"));
    }

    listValidMoves(squares: Piece[][], i: number, j: number): number[][] {
        let moves: number[][] = [];
        let offsets = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1],
            [1, 1],
            [1, -1],
            [-1, 1],
            [-1, -1]
        ]
        offsets.forEach((element) => {
            moves = addMovesInDirection(squares, moves, [i, j], element, this.player);
        });
        return moves
    }
}