import React from 'react';
import Input from './components/input';
import TodoItem from './components/todo-item';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            input: ""
        }
    };

    onChange = (event) => {
        this.setState({
            input: event.target.value
        })
    };

    deleteTodo = (ID) => {
        this.setState({
            todos: this.state.todos.filter((item) => {
                return item.props.id !== ID;
            })
        });
    };

    onSubmit = (event) => {
        if (event.key == 'Enter') {
            const ID = this.state.todos.length + 1;
            this.setState({
                todos: this.state.todos.concat([<TodoItem id={ID} key={ID} label={this.state.input} deleteTodo={this.deleteTodo} />]),
                input: ""
            });
        }
    };

    render() {
        return (
            <div>
                <Input value={this.state.input} onSubmit={this.onSubmit} onChange={this.onChange} />
                <ul className="todo-list">
                    {this.state.todos.map((todo) => {
                        return todo;
                    })}
                </ul>
            </div>
        )
    }
}