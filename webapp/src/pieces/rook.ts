import Piece from './piece';

export default class Rook extends Piece {
    constructor(player: number) {
        super(player, (player === 1?
            "/assets/White/rook.png" :
            "/assets/Black/rook.png"));
    }
    isValidMove(squares: Piece[][], src: number[], dest: number[]): boolean {
        return false;
    }
}