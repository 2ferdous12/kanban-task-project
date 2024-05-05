import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './root';
// import Home from './homesection/home';
import Marketing from './sitebar/marketing';
import Roadmap from './sitebar/roadmap';
import Newbord from './sitebar/newbord';
import Mainhome from './homesection/mainhome';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      // {
      //   path: "/",
      //   element: <Home></Home>
      // },
      {
        path: "/roadmap",
        element: <Roadmap></Roadmap>
      },
      // },

      {
        path: "/marketing",
        element: <Marketing></Marketing>
      },
    
      {
        path: "/newbord",
        element: <Newbord></Newbord>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
