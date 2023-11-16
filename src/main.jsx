import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';
import ShowCars from './components/Booking/ShowCars.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/malgam/",
    element: <App />,
  },
  {
    path: '/showcars',
    element: <ShowCars />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
