import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../pages/Error";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Privacy from "../pages/Privacy";
import Help from "../pages/Help";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },   
            {
                path: '/about',
                element: <About></About>
            },   
            {
                path: '/contact',
                element: <Contact></Contact>
            },   
            {
                path: '/privacy',
                element: <Privacy></Privacy>
            },   
            {
                path: '/Help',
                element: <Help></Help>
            },   
        ]
    }
])

export default router;
