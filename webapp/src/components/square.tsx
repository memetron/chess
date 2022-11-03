import '../index.css';
import {Marker} from "./marker";
import Piece from '../pieces/piece'
import React from "react";

interface props {
    onClick: () => void;
    shade: string;
    marked: boolean;
    style: {} | null;
    piece: Piece;
}

export default class Square extends React.Component<props> {
    render() {
        return (
            <button className={"square " + this.props.shade}
                    onClick={this.props.onClick}
                    style={{
                        ...(this.props.style ? this.props.style : {}),
                        alignContent: "center",
                        justifyContent: "center"
                    }}>
                {this.props.marked ? <Marker></Marker> : null}
            </button>
        );
    }
}