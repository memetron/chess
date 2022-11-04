import Piece from './piece';
import isOccupied from "../helpers/squareOccupied";

export default class Bishop extends Piece {
    constructor(player: number) {
        super(player, (player === 1?
            "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg" :
            "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg"));
    }


    listValidMoves(squares: Piece[][], i: number, j: number, ignoreKing: boolean): number[][] {
        let moves: number[][] = [];
        let candidateOffsets = [
            [1, 2],
            [2, 1],
            [-1, 2],
            [2, -1],
            [-2, 1],
            [1, -2],
            [-1, -2],
            [-2, -1]
        ];

        for (let x = 0; x < candidateOffsets.length; x++) {
            let candidateI = i + candidateOffsets[x][0];
            let candidateJ = j + candidateOffsets[x][1];
            // verifies move would be inbounds
            if (!(candidateI < 0 || candidateJ < 0 || candidateI > 7 || candidateJ > 7)) {
                // tile not occupied by same player
                if (isOccupied(squares, candidateI, candidateJ, this.player, ignoreKing) !== this.player) {
                    moves.push([candidateI, candidateJ]);
                }
            }
        }
        return moves;
    }
}