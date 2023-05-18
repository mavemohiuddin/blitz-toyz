import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Template from './Components/Template';
import Error404 from './Components/Pages/Error404';
import Home from './Components/Pages/Home';
import AllToys from './Components/Pages/AllToys';
import MyToys from './Components/Pages/MyToys';
import AddToy from './Components/Pages/AddToy';
import Blog from './Components/Pages/Blog';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Template></Template>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/alltoyz",
                element: <AllToys></AllToys>
            },
            {
                path: "/mytoyz",
                element: <MyToys></MyToys>
            },
            {
                path: "/addtoy",
                element: <AddToy></AddToy>
            },
            {
                path: "/blogz",
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: "/*",
        element: <Error404></Error404>
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
