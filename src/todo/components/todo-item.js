import React from 'react';

export default class TodoItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }

    deleteTodo = () => {
        return this.props.deleteTodo(this.props.id);
    };

    onCheckedChange = (event) => {
        this.setState({
            checked: event.target.checked
        });
    };

    render() {
        return (
            <li className={this.state.checked ? "completed" : ""}>
                <div className="view">
                    <input className="toggle" type="checkbox" onChange={this.onCheckedChange} checked={this.state.checked} />
                    <label>{this.props.label}</label>
                    <button onClick={this.deleteTodo} className="destroy"></button>
                </div>
            </li>
        );
    }
}