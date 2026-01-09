import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './component/Root/Root.jsx';
import Home from './component/Home/Home.jsx';
import Register from './component/Register/Register.jsx';
import Login from './component/Login/Login.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    Component:Root,
    children:[
      {index:true,Component:Home},
      {path:'register',Component:Register},
      {path:'login',Component:Login}
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
