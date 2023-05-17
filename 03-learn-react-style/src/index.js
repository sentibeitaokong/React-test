import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './01-内联样式/App';
// import App from './02-普通css/App';
// import App from './03-css_modules/App';
import App from './04-style_components/app/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
