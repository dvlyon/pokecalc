import React from 'react';
import ReactDOM from 'react-dom/client';
import { TeraRaidCalc } from './components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <TeraRaidCalc />
  </React.StrictMode>
);
