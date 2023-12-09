import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/Scroll/ScrollToTop';
import React from 'react';
const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <ScrollToTop>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </ScrollToTop>
  </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
