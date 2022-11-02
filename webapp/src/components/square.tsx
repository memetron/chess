import React, {CSSProperties} from 'react';
import '../index.css';

interface props {
    onClick: () => void;
    shade: string;
    style: CSSProperties;
}

export default class Square extends React.Component<props> {
    render() {
        return (
            <button className={"square " + this.props.shade}
                    onClick={this.props.onClick}
                    style={this.props.style}>
            </button>
        );
    }
}