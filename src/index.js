import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DarkModeObserver from './utils/DarkModeObserver';
import IsMenuOpenObserver from './utils/isMenuOpenObserver';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeObserver>
      <IsMenuOpenObserver>
          <App />
      </IsMenuOpenObserver> 
    </DarkModeObserver>
  </React.StrictMode>
);


