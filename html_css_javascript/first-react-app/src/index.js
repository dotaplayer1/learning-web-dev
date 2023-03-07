import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { Footer } from './components/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
        <Header />
        <Section />
        <Footer />
    </React.StrictMode>
);