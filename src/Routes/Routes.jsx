import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import All from "../Pages/All";
import Zara from "../Pages/Zara";
import Adidas from "../Pages/Adidas";
import Nike from "../Pages/Nike";

export const Routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
                children: [
                    {
                        path: '/all',
                        element: <All />
                    },
                    {
                        path: '/zara',
                        element: <Zara />
                    },
                    {
                        path: 'adidas',
                        element: <Adidas />
                    },
                    {
                        path: '/nike',
                        element: <Nike />
                    }
                ]
            },
            {

            }
        ]
    },
]);