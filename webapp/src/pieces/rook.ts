import Piece from './piece';

export default class Rook extends Piece {
    constructor(player: number) {
        super(player, (player === 1?
            "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg" :
            "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg"));
    }
    isValidMove(squares: Piece[][], src: number[], dest: number[]): boolean {
        return false;
    }
}