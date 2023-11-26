import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../pages/Error";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Privacy from "../pages/Privacy";
import Help from "../pages/Help";
import Surveys from "../pages/Surveys";
import SurveyDetails from "../components/survey/SurveyDetails";
import Dashboard from "../layout/Dashboard";
import PrivateRoute from "../routes/PrivateRoute";
import MyProfile from "../pages/MyProfile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },   
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },   
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },   
            {
                path: '/surveys',
                element: <Surveys></Surveys>
            },   
            {
                path: '/survey-details/:id', 
                element: <SurveyDetails></SurveyDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/surveys/${params.id}`)
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
            {
                path: '/my-profile',
                element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            },   
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    }
])

export default router;
