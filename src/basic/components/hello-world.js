import React from 'react';

export default class Hello extends React.Component {
    render() {
        return (
            <span>{this.props.text}</span>
        )
    }
}