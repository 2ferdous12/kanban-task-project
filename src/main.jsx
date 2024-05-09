import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './root';
import Marketing from './sitebar/marketing';
import Roadmap from './sitebar/roadmap';
import Newbord from './sitebar/newbord';
import Mainhome from './homesection/mainhome';
import ColumnSection from './component/columnSection';
import Board from './homesection/board';
import DeleteBord from './component/deleteBord';
import Mainbord from './homesection/mainbord';
import Modal from './component/modal';
import UpdateTask from './component/updateTask';
import ViewTask from './component/viewTask';
import UpdateBoard from './component/updateBoard';



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
        path: "/mainbord",
        element: <Mainbord></Mainbord>,
      
      },
      {
        path: "/board",
        element: <Board></Board>,
        loader: () => fetch('http://localhost:9000/users')
      },
      {
        path: "/viewTask/:id",
        element: <ViewTask></ViewTask>,
        loader: ({params}) =>fetch(`http://localhost:9000/use/${params.id}`)
      },
      {
        path: "/updateTask/:id",
        element: <UpdateTask></UpdateTask>,
        loader: ({params}) =>fetch(`http://localhost:9000/use/${params.id}`)
      },
      {
        path: "/updateBoard/:id",
        element: <UpdateBoard></UpdateBoard>,
        loader: ({params}) =>fetch(`http://localhost:9000/users/${params.id}`)
      },
      {
        path: "/deleteBord",
        element: <DeleteBord></DeleteBord>,
      },
      {
        path: "/modal",
        element: <Modal></Modal>,
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
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
