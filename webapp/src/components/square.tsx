import '../index.css';

import Piece from '../pieces/piece'
import React from "react";

interface props {
    onClick: () => void;
    shade: string;
    style: {} | null;
    piece: Piece;
}

export default class Square extends React.Component<props> {
    render() {
        return (
            <button className={"square " + this.props.shade}
                    onClick={this.props.onClick}
                    style={this.props.style?this.props.style:{}}>
            </button>
        );
    }
}