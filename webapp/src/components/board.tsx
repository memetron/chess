import React from 'react';

import '../index.css';
import Square from './square';
import Piece from '../pieces/piece';

interface props {
    squares: Piece[][];
    onClick: (i: number, j: number) => void;
}

export default class Board extends React.Component<props> {
    renderSquare(i: number, j: number, squareShade: string) {
        return <Square
            piece={this.props.squares[i][j]}
            style={this.props.squares[i][j] ? this.props.squares[i][j].style : null}
            shade={squareShade}
            onClick={() => this.props.onClick(i, j)}
        />
    }

    render() {
        const board = [];
        for(let i = 0; i < 8; i++){
            const squareRows = [];
            for(let j = 0; j < 8; j++){
                const squareShade = (isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j))? "light-square" : "dark-square";
                squareRows.push(this.renderSquare(i, j, squareShade));
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