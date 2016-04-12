import React, {Component} from 'react';
import HelloWorld from './components/hello-world';

export default class BasicComponent extends Component {
    render() {
        return (
            <h1>
                <HelloWorld text="Hello, World!" />
            </h1>
        );
    }
}
