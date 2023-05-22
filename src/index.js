import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter } from 'react-router-dom';
import App from './App';
import FilmsProvider from './context/FIlmsProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FilmsProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </FilmsProvider>,
);
