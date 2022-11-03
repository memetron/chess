import React from 'react';
import '../index.css';
import Board from './board';
import initialiseChessBoard from '../helpers/initializer';
import Piece from "../pieces/piece";

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
                            squares={this.state.squares}
                            onClick={(i, j) => this.handleClick(i, j)}
                        />
                    </div>
                </div>
            </div>


        );
    }

    handleClick(i: number, j: number) {
        const squares: Piece[][] = this.state.squares.slice();
        if (!this.state.isPieceSelected && squares[i][j] && squares[i][j].player === this.state.player) {
            this.setState({
                selectedI: i,
                selectedJ: j,
                isPieceSelected: true,
                validMoves: squares[i][j].listValidMoves(squares, i, j)
            });
            squares[i][j].style = {...squares[i][j].style, backgroundColor: "RGB(111,143,114)"};
        } else {
            if (this.state.isPieceSelected) { // piece is selected and tile is clicked
                if (i === this.state.selectedI && j === this.state.selectedJ) {
                    // same piece as before
                    squares[this.state.selectedI][this.state.selectedJ].style = {
                        ...squares[this.state.selectedI][this.state.selectedJ].style,
                        backgroundColor: ""
                    };
                    this.setState({
                        isPieceSelected: false
                    })

                } else {
                    // new tile is clicked
                    if (moveInArray(this.state.validMoves, i, j)) {
                        // valid move
                        squares[this.state.selectedI][this.state.selectedJ].firstMove = false;
                        squares[i][j] = squares[this.state.selectedI][this.state.selectedJ];
                        squares[this.state.selectedI][this.state.selectedJ].style = {
                            ...squares[this.state.selectedI][this.state.selectedJ].style,
                            backgroundColor: ""
                        };
                        delete squares[this.state.selectedI][this.state.selectedJ];
                        this.setState({
                            squares: squares,
                            isPieceSelected: false,
                            player: this.state.player === 1 ? 2 : 1
                        });
                    }
                    // if (squares[this.state.selectedI][this.state.selectedJ].isValidMove(squares, [this.state.selectedI, this.state.selectedJ], [i, j])) {
                    //     // valid move
                    //     squares[i][j] = squares[this.state.selectedI][this.state.selectedJ];
                    //     squares[this.state.selectedI][this.state.selectedJ].style = {
                    //         ...squares[this.state.selectedI][this.state.selectedJ].style,
                    //         backgroundColor: ""
                    //     };
                    //     delete squares[this.state.selectedI][this.state.selectedJ];
                    //     this.setState({
                    //         squares: squares,
                    //         isPieceSelected: false,
                    //         player: this.state.player === 1 ? 2 : 1
                    //     });
                    // }
                }
            }
        }

    }
}

function moveInArray(moves: number[][], i: number, j: number) {
    for (let x = 0; x < moves.length; x++) {
        if (moves[x][0] === i && moves[x][1] === j) {
            return true;
        }
    }
    return false;
}