import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ReactGA from "react-ga4";
ReactGA.initialize("G-J8N2RKC7FV");

const root = ReactDOM.createRoot(document.getElementById('root'));

ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
