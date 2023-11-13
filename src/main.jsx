import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter >
);
