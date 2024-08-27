import React from 'react';
import ReactDOM from 'react-dom/client';
import './input.css';
import reportWebVitals from './reportWebVitals';


import Hero from './Hero';
import Nav from './Nav';
import About from './About';
import Proj from './PandR';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Hero />
    <About />
    <Proj />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
