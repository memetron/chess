import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player: number) {
        super(player, (player === 1?
            "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg" :
            "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg"));
    }

    isValidMove(squares: Piece[][], src: number[], dest: number[]): boolean {
        return false;
    }
}