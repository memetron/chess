import Piece from "../pieces/piece";

// returns team if square is occupied, else returns 0
export default function isOccupied(squares: Piece[][], i: number, j: number, player: number, ignoreKing: boolean) {
    if (squares[i][j]) {
        if (squares[i][j].isKing && squares[i][j].player !== player) return 0;
        return squares[i][j].player;
    }
    return 0;
}