import Piece from './piece';

export default class Pawn extends Piece {
    firstMove: boolean = true;

    constructor(player: number) {
        super(player, (player === 1 ?
            "/assets/White/pawn.png" :
            "/assets/Black/pawn.png"));
    }

    isValidMove(squares: Piece[][], src: number[], dest: number[]): boolean {
        let path: number[][] = this.getPath(src, dest);
        if (path.length === 0) return false;
        let valid: boolean = true;
        path.forEach((element) => {
            if (squares[element[0]][element[1]]) {
                if (squares[element[0]][element[1]].player === this.player) valid = false;
                else if (element[1] === src[1]) valid = false;
            } else {
                if (element[1] !== src[1]) valid = false;
            }
        })
        if (!valid) return false;
        this.firstMove = false;
        return true;
    }

    private getPath(src: number[], dest: number[]) {
        if (this.player === 2) {
            if (dest[0] - src[0] === 1 && Math.abs(src[1] - dest[1]) <= 1) {
                return [dest];
            } else if (this.firstMove && dest[0] - src[0] === 2 && src[1] - dest[1] === 0) {
                return [[src[0] + 1, src[1]], dest];
            }
            return [];
        } else {
            if (dest[0] - src[0] === -1 && Math.abs(src[1] - dest[1]) <= 1) {
                return [dest];
            } else if (this.firstMove && dest[0] - src[0] === -2 && src[1] - dest[1] === 0) {
                return [[src[0] - 1, src[1]], dest];
            }
            return [];
        }
    }
}