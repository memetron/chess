import Piece from './piece';

export default class King extends Piece {
    constructor(player: number) {
        super(player, (player === 1 ?
            "/assets/White/king.png" :
            "/assets/Black/king.png"));
    }


    listValidMoves(squares: Piece[][], i: number, j: number): number[][] {
        return [];
    }
}