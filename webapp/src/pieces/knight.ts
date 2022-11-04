import Piece from './piece';
import isOccupied from "../helpers/squareOccupied";

export default class Bishop extends Piece {
    constructor(player: number) {
        super(player, (player === 1?
            "/assets/White/knight.png" :
            "/assets/Black/knight.png"));
    }


    listValidMoves(squares: Piece[][], i: number, j: number): number[][] {
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
                if (isOccupied(squares, candidateI, candidateJ) !== this.player) {
                    moves.push([candidateI, candidateJ]);
                }
            }
        }
        return moves;
    }
}