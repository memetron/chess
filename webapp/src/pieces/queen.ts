import Piece from './piece';
import addMovesInDirection from "./addMovesInDirection";

export default class Queen extends Piece {
    constructor(player: number) {
        super(player, (player === 1?
            "/assets/White/queen.png" :
            "/assets/Black/queen.png"));
    }

    listValidMoves(squares: Piece[][], i: number, j: number, ignoreKing: boolean): number[][] {
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
            moves = addMovesInDirection(squares, moves, [i, j], element, this.player, ignoreKing);
        });
        return moves
    }
}