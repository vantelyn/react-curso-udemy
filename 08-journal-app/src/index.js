import React from 'react';
import ReactDOM from 'react-dom/client';
import { JouranlApp } from './JouranlApp';
import './styles/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <JouranlApp />
  </React.StrictMode>
);
