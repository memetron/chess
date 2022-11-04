import Piece from './piece';

export default class King extends Piece {
    constructor(player: number) {
        super(player, (player === 1 ?
            "/assets/White/king.png" :
            "/assets/Black/king.png"));
    }

    isValidMove(squares: Piece[][], src: number[], dest: number[]): boolean {
        return false;
    }
}