import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import '@fontsource/dosis';
import '@fontsource/mukta';
import '@fontsource/montserrat';

import './index.scss';

import App from './app.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);