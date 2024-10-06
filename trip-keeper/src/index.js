import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AddTrip from './components/AddTrip';
import './styles/index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/add-trip",
    element: <AddTrip />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);