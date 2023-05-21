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
import Login from './Components/Pages/Login';
import Signup from './Components/Pages/Signup';
import AuthProvider from './Components/Utility/AuthProvider';
import PrivateRoute from './Components/Utility/PrivateRoute';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import SingleProduct from './Components/Pages/SingleProduct';
import UpdateToy from './Components/Pages/UpdateToy';

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
                element: <AllToys></AllToys>,
                // loader: ()=>fetch("https://blitz-toyz-server-mavemohiuddin.vercel.app/all-toys")
            },
            {
                path: "/mytoyz",
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: "/addtoy",
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path: "/toy/:id",
                element: <PrivateRoute><SingleProduct></SingleProduct></PrivateRoute>
            },
            {
                path: "/update-toy/:id",
                element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>
            },
            {
                path: "/blogz",
                element: <Blog></Blog>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
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
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>,
)
