/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root.jsx';
import Classes from './components/Classes/Classes.jsx';
import Teacher from './components/Teacher/Teacher.jsx';
import Profile from './components/Profile/Profile.jsx';
import TeacherInfo from './components/TeacherInfo/TeacherInfo.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Profile></Profile>,
        loader: () => fetch('home.json')
      },

      {
        path: '/teacher',
        element: <Teacher></Teacher>,
        loader: () => fetch('teachers.json')
      },
      {
        path: '/info/:id',
        element: <TeacherInfo></TeacherInfo>,
        loader: ({ params }) => fetch(`teachers.json${params.id}`)
      },
      {
        path: '/classes',
        element: <Classes></Classes>
      },
      {
        path: 'about',
        element: <div>About</div>
      },
      {
        path: 'page',
        element: <div>Page</div>
      },
      {
        path: 'blogs',
        element: <div>Blogs</div>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
