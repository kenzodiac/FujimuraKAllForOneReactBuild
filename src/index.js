// - Kenneth Fujimura
// - Date Revised: 2/12/2023
// - "All For One React Rebuild"
// - This is a project where we rebuilt our "All For One" website of 9 mini challenge pages, but this time in React/Bootstrap/JSX. 

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
