import React from 'react';
import ReactDOM from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

function formatName(user) {
    return user.firstName + " " + user.lastName;
}

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>
    } else {
        return <h1>Hello, Stranger.</h1>
    }
}

const user = {
    firstName: "John",
    lastName: "Smith"
};

const element = <a href="https://www.reactjs.org"> link </a>;

const parentDivWithChildren = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
    </div>
);

function tick() {
    const timeElement = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    root.render(timeElement);
}

setInterval(tick, 1000);