// src/index.js
import './index.css';  // ← ВАЖНО! Эта строка должна быть
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
console.log("BOOT: index.js loaded");
console.log("BOOT: rendering App");


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);