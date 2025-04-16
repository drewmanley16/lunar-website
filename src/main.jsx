import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // ✅ Confirm App.jsx exists in src/
import './index.css'; // optional global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
