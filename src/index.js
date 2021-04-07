import React from 'react';
import ReactDOM from 'react-dom';
// måsklamrar pga. senaste sättet typa funktioner
import { App } from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
