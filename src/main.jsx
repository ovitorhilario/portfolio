import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/root.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainHome from './components/organisms/Main/Home/index.jsx';
import MainAbout from './components/organisms/Main/About/index.jsx';
import MainApps from './components/organisms/Main/Apps/index.jsx';
import MainContact from './components/organisms/Main/Contact/index.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <MainHome />
      },
      {
        path: '/about',
        element: <MainAbout />
      },
      {
        path: '/apps',
        element: <MainApps />
      },
      {
        path: '/contact',
        element: <MainContact />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
