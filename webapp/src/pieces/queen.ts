import Piece from './piece';

export default class Queen extends Piece {
    constructor(player: number) {
        super(player, (player === 1?
            "/assets/White/queen.png" :
            "/assets/Black/queen.png"));
    }
    isValidMove(squares: Piece[][], src: number[], dest: number[]): boolean {
        return false;
    }
}