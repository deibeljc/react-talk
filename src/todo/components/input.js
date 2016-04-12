import React from 'react';

export default class Input extends React.Component {
    render() {
        return (
            <header className="header">
                <h1>basic todos</h1>
                <input
                    className="new-todo"
                    onChange={this.props.onChange}
                    onKeyPress={this.props.onSubmit}
                    placeholder="What needs to be done?"
                    value={this.props.value} />
            </header>
        )
    }
}