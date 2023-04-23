import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 

import { Cursos } from './routs/cursos';
import { Home } from './routs/home';
import { Menu } from './routs/menu';
import { Reservaciones} from './routs/reservaciones'
import Error from './routs/assets/error';

const router = createBrowserRouter([
  {
    path: '/',
    element : <Home/>,
    errorElement: <Error/>
  },
  {
    path: '/about',
    element: <h1> about </h1>,
  },
  {
    path: '/reservaciones',
    element: <Reservaciones/>,
  },
  {
    path: '/menu',
    element: <Menu/>
  },
  {
    path: '/cursos',
    element: <Cursos/>,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <RouterProvider router={router}/>  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
