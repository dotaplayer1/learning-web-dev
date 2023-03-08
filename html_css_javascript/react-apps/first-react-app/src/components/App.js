import React, { Component } from 'react';
import MyComponent from './MyComponent';

export class App extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <MyComponent title='Hello world' />
            </div>
        );
    }
}
