import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import { Home } from './View/Home/Home';
import { About } from './View/About us/About';


const routes=createBrowserRouter([

  {
    path : '/' ,
    element: <Home/>
  },
  {
    path : '/About',
    element: <About/>
  }

  // {
  //   path : '/Info/:id' ,
  //   element: <Info/>
  // },
  ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<>
< RouterProvider router={routes} />
</>

);