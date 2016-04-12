import React from 'react';
import './NoPageFound.scss';

export default class NoPageFound extends React.Component {
    render() {
        return (
            <div className="no-page">
                <h1>
                    No Page Found.
                </h1>
                Instead try one of these demos!
                <ul className="example-list">
                    <li><a href="/basic">Basic Components</a></li>
                    <li><a href="/todo">Simple Todo App</a></li>
                    <li><a href="/chat">Real Time Chat App</a></li>
                </ul>
            </div>
        );
    }
}