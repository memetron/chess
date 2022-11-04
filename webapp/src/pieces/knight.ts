import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player: number) {
        super(player, (player === 1?
            "/assets/White/knight.png" :
            "/assets/Black/knight.png"));
    }

    isValidMove(squares: Piece[][], src: number[], dest: number[]): boolean {
        return false;
    }
}