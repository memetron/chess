import React from 'react';
import '../index.css';
import Board from './board';
import initialiseChessBoard from '../helpers/initializer';
import Piece from "../pieces/piece";
import coordInArray from "../helpers/coordInArray";

interface Props {

}

interface State {
    squares: Piece[][];
    player: number;
    isPieceSelected: boolean;
    selectedI: number;
    selectedJ: number;
    status: string;
    turn: string;
    validMoves: number[][];
}

export default class Game extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            squares: initialiseChessBoard(),
            player: 1,
            isPieceSelected: false,
            selectedI: 0,
            selectedJ: 0,
            status: '',
            turn: 'white',
            validMoves: []
        }
    }

    render() {
        return (
            <div>
                <div className="game">
                    <div className="game-board">
                        <Board
                            moves={this.state.validMoves}
                            squares={this.state.squares}
                            onClick={(i, j) => this.handleClick(i, j)}
                        />
                    </div>
                </div>
            </div>


        );
    }

    handleClick(i: number, j: number): void {
        const squares: Piece[][] = this.state.squares.slice();
        if (!this.state.isPieceSelected && squares[i][j] && squares[i][j].player === this.state.player) {
            this.selectPiece(squares, i, j);
        } else {
            if (this.state.isPieceSelected) { // piece is selected and tile is clicked
                if (i === this.state.selectedI && j === this.state.selectedJ) {
                    // same piece as before
                    this.deselectPiece(squares);
                } else {
                    // new tile is clicked
                    if (coordInArray(this.state.validMoves, i, j)) {
                        // valid move
                        this.executeMove(squares, [this.state.selectedI, this.state.selectedJ],[i, j]);
                    }
                }
            }
        }
    }

    selectPiece(squares: Piece[][], i:number, j:number): void {
        this.setState({
            selectedI: i,
            selectedJ: j,
            isPieceSelected: true,
            validMoves: squares[i][j].listValidMoves(squares, i, j, false)
        });
        squares[i][j].addHighlight();
    }

    deselectPiece(squares: Piece[][]): void {
        squares[this.state.selectedI][this.state.selectedJ].removeHighlight()
        this.setState({
            isPieceSelected: false,
            validMoves: []
        })
    }

    executeMove(squares: Piece[][], src: number[], dest: number[]): void {
        // move square
        squares[src[0]][src[1]].firstMove = false;
        squares[dest[0]][dest[1]] = squares[src[0]][src[1]];
        delete squares[src[0]][src[1]];
        squares[dest[0]][dest[1]].generateCoveredSquares(squares,dest[0],dest[1]);
        // update game state
        squares[dest[0]][dest[1]].removeHighlight();
        this.setState({
            squares: squares,
            isPieceSelected: false,
            player: this.state.player === 1 ? 2 : 1,
            validMoves: []
        });
    }
}

