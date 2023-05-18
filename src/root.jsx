import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Template from './Components/Template';
import Error404 from './Components/Pages/Error404';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Template></Template>,
        children: [
            {
                path: "/",
                element: <div>Hello world!</div>
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
