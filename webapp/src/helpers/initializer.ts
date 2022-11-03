import Bishop from '../pieces/bishop';
import King from '../pieces/king';
import Knight from '../pieces/knight';
import Pawn from '../pieces/pawn';
import Queen from '../pieces/queen';
import Rook from '../pieces/rook';

export default function initializer(){
    const squares = Array(8);
    for(let i = 0; i < 8; i++) {
        squares[i] = new Array(8);
    }

    for(let i = 0; i < 8; i++){
        squares[1][i] = new Pawn(2);
        squares[6][i] = new Pawn(1);
    }
    squares[0][0] = new Rook(2);
    squares[0][7] = new Rook(2);
    squares[7][0] = new Rook(1);
    squares[7][7] = new Rook(1);

    squares[0][1] = new Knight(2);
    squares[0][6] = new Knight(2);
    squares[7][1] = new Knight(1);
    squares[7][6] = new Knight(1);

    squares[0][2] = new Bishop(2);
    squares[0][5] = new Bishop(2);
    squares[7][2] = new Bishop(1);
    squares[7][5] = new Bishop(1);

    squares[0][3] = new Queen(2);
    squares[0][4] = new King(2);

    squares[7][3] = new Queen(1);
    squares[7][4] = new King(1);

    return squares;
}