import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './root';
// import Home from './homesection/home';
import Marketing from './sitebar/marketing';
import Roadmap from './sitebar/roadmap';
import Newbord from './sitebar/newbord';
import Mainhome from './homesection/mainhome';
import ColumnSection from './component/columnSection';
import Sitebar from './sitebar/sitebar';
import Board from './homesection/board';
import DeleteBord from './component/deleteBord';
import Mainbord from './homesection/mainbord';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/columnSection",
        element: <ColumnSection></ColumnSection>,
        loader: () => fetch('http://localhost:9000/use')
      },
      {
        path: "/",
        element: <Mainhome></Mainhome>,
      },
      
      {
        path: "/sitebar",
        element: <Sitebar></Sitebar>,
      },
      {
        path: "/mainbord",
        element: <Mainbord></Mainbord>,
     
      },
      {
        path: "/board",
        element: <Board></Board>,
        loader: () => fetch('http://localhost:9000/users')
        
      },
      {
        path: "/deleteBord",
        element: <DeleteBord></DeleteBord>,
        loader: () => fetch('http://localhost:9000/users')
      },
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
