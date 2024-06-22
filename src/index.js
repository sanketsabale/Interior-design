import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import { Home } from './View/Home/Home';
import { About } from './View/About us/About';
import { Services } from './View/Services/Services';
import { Scardinfo } from './View/Services/Scardinfo';
import { Login } from './View/Login/Login';


const routes=createBrowserRouter([

  {
    path : '/' ,
    element: <Home/>
  },
  {
    path : '/About',
    element: <About/>
  },
  {
    path : '/Services',
    element: <Services/>
  },
  {
    path : '/Scardinfo/:id' ,
    element: <Scardinfo/>
  },
  {
    path : '/Login' ,
    element: <Login/>
  }
  ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<>
< RouterProvider router={routes} />
</>

);