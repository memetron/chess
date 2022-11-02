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
    sourceSelection: number;
    status: string;
    turn: string;
}
export default class Game extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            squares: initialiseChessBoard(),
            player: 1,
            sourceSelection: -1,
            status: '',
            turn: 'white'
        }
    }
    render() {
        return (
            <div>
                <div className="game">
                    <div className="game-board">
                        <Board
                            squares = {this.state.squares}
                            onClick = {(i, j) => this.handleClick(i, j)}
                        />
                    </div>
                </div>
            </div>


        );
    }
    handleClick(i: number, j: number) {

    }
}
