import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';
import ShowCars from './components/Booking/ShowCars.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/booking',
    element: <ShowCars />
  },
], {
  basename: '/malgam'
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
