import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(<App/>,document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 严格模式
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
