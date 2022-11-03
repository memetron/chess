import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player: number) {
        super(player, (player === 1?
            "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg" :
            "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg"));
    }
    isValidMove(squares: Piece[][], src: number[], dest: number[]): boolean {
        return false;
    }
}