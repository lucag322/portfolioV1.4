import React from 'react'
import * as ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
    RouterProvider,
  useLocation
} from "react-router-dom";
import Project from './components/Project/Project'
import Home from './components/home/Home'
import AllProject from './components/allProject/allProject'
import Test from './components/test/test'
import ErrorPage from './components/Error/Error';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
        element: <Home />,
    errorElement: <ErrorPage />,
    },
    {
        path: "/project/:id",
        element: <Project />,
    },
    {
        element: <AllProject />,
        path: "/allProject",
  },
  {
    element: <Test />,
    path: "/test",
  }

]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
            <RouterProvider router={router} />
  </React.StrictMode>
)

