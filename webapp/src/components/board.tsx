import React from 'react';

import '../index.css';
import Square from './square';
import Piece from '../pieces/piece';
import coordInArray from "../helpers/coordInArray";

interface props {
    squares: Piece[][];
    moves: number[][];
    onClick: (i: number, j: number) => void;
}

export default class Board extends React.Component<props> {
    renderSquare(i: number, j: number, squareShade: string, marked: boolean) {
        return <Square
            piece={this.props.squares[i][j]}
            style={this.props.squares[i][j] ? this.props.squares[i][j].style : null}
            shade={squareShade}
            marked={marked}
            onClick={() => this.props.onClick(i, j)}
        />
    }

    render() {
        const board = [];
        const shades: string[][] = [];
        for(let i = 0; i < 8; i++){
            shades.push([]);
            for(let j = 0; j < 8; j++){
                shades[i].push(
                    (isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j))? "light-square" : "dark-square"
                );
            }
        }
        for(let i = 0; i < 8; i++){
            const squareRows = [];
            for(let j = 0; j < 8; j++){
                squareRows.push(this.renderSquare(i, j, shades[i][j], coordInArray(this.props.moves, i, j)));
            }
            board.push(<div className="board-row">{squareRows}</div>)
        }

        return (
            <div>
                {board}
            </div>
        );
    }
}
function isEven(num: number){
    return num % 2 === 0
}
