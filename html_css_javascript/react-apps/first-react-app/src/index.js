import React from 'react';
import ReactDOM from 'react-dom/client';
import { Clock } from './components/Clock';
import { Toggle } from './components/Toggle';

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

const link = <a href="https://www.reactjs.org"> link </a>;

const parentDivWithChildren = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
    </div>
);

// function tick() {
//     const timeElement = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     root.render(timeElement);
// }

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

function multipleWelcomes() {
    return (
        <div>
            <Welcome name="1" />
            <Welcome name="2" />
            <Welcome name="3" />
        </div>
    )
}

// function Clock(props) {
//     return (
//         <div>
//             <h1>asdf</h1>
//             <h2>It is {props.date.toLocaleTimeString()}.</h2>
//         </div>
//     );
// }

// function tick2() {
//     root.render(<Clock date={new Date()} />);
// }

function printHelloWorld() {
    console.log("Hello world");
}

function Form() {
    function handleSubmit(e) {
        e.preventDefault();
        console.log("You clicked submit.");
    }
    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
    );

}

root.render(
    <Toggle />
);