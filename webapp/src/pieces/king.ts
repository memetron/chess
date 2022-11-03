import Piece from './piece';

export default class King extends Piece {
    constructor(player: number) {
        super(player, (player === 1 ?
            "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg" :
            "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg"));
    }

    isValidMove(squares: Piece[][], src: number[], dest: number[]): boolean {
        return false;
    }
}