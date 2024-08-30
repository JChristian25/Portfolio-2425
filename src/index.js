import React from 'react';
import ReactDOM from 'react-dom/client';
import './input.css';
import reportWebVitals from './reportWebVitals';

import Hero from './App';
import Nav from './components/Nav';
import Notif from './components/Notification-Footer';
import Footer from './components/Footer';

import { SpeedInsights } from "@vercel/speed-insights/react"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Hero />
    <Notif />
    <Footer />
    <SpeedInsights />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
