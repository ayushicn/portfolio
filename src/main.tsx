import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// DM Sans — primary sans-serif for all typography
import '@fontsource-variable/dm-sans';

// Global styles (order matters)
import './styles/tokens.css';
import './styles/reset.css';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
