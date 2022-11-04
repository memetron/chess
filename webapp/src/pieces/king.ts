import Piece from './piece';

export default class King extends Piece {
    constructor(player: number) {
        super(player, (player === 1 ?
            "/assets/White/king.png" :
            "/assets/Black/king.png"));
            "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg" :
            "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg"));
        this.isKing = true;
    }


    listValidMoves(squares: Piece[][], i: number, j: number, ignoreKing: boolean): number[][] {
        let offsets: number[][] = [
            [0, 1],
            [1, 0],
            [1, 1],
            [0, -1],
            [-1, 0],
            [-1, -1],
            [1, -1],
            [-1, 1]
        ];
        let moves: number[][] = []
        offsets.forEach((element) => {
            let dest = [i + element[0], j + element[1]];
            if (dest[0] > -1 && dest[0] < 8 && dest[1] > -1 && dest[1] < 8) {
                let valid = true;
                if (squares[dest[0]][dest[1]] && squares[dest[0]][dest[1]].player === this.player) valid = false;
                else {
                    for (let i = 0; i < 8; i++) {
                        for (let j = 0; j < 8; j++) {
                            if (squares[i][j] && squares[i][j].player !== this.player
                                && coordInArray(squares[i][j].coveredSquares, dest[0], dest[1])) {
                                console.log(squares[i][j]);
                                valid = false;
                            }
                        }
                    }
                }
                if (valid) moves.push(dest);
            }
        })
        return moves;
    }

    generateCoveredSquares(squares: Piece[][], i: number, j: number) {
        let offsets: number[][] = [
            [0, 1],
            [1, 0],
            [1, 1],
            [0, -1],
            [-1, 0],
            [-1, -1],
            [1, -1],
            [-1, 1]
        ];
        let moves: number[][] = [];
        offsets.forEach((element) => {
            moves.push([i + element[0]], [j + element[1]]);
        })
        return moves;
    }
}