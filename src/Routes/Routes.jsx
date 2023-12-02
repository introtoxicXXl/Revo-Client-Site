import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";

export const Routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
        ]
    },
]);