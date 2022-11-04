import Piece from "../pieces/piece";

// returns team if square is occupied, else returns 0
export default function isOccupied(squares: Piece[][], i: number, j: number) {
    if (squares[i][j]) {
        return squares[i][j].player;
    }
    return 0;
}