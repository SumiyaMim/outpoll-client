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
import PrivateRoute from "../routes/PrivateRoute";
import MyProfile from "../pages/MyProfile";
import AddSurvey from "../pages/Dashboard/AddSurvey";
import ManageSurveys from "../pages/Dashboard/ManageSurveys";
import UpdateSurvey from "../pages/Dashboard/UpdateSurvey";
import Pricing from "../pages/Pricing";
import ManageUsers from "../pages/Dashboard/ManageUsers";
import MySurveys from "../pages/Dashboard/MySurveys";
import SurveyResponses from "../pages/Dashboard/SurveyResponses";
import DashboardLayout from "../layout/DashboardLayout";
import SurveyorRoute from "./SurveyorRoute";
import AdminRoute from "./AdminRoute";
import Feedback from "../pages/Dashboard/Feedback";
import Payment from "../pages/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory";

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
                loader: ({params}) => fetch(`https://outpoll-server.vercel.app/surveys/${params.id}`)
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
                path: '/pricing',
                element: <Pricing></Pricing>
            },   
            {
                path: '/my-profile',
                element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            },   
            {
                path: 'payment',
                element: <PrivateRoute><Payment></Payment></PrivateRoute>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: 'add-survey',
                element: <SurveyorRoute><AddSurvey></AddSurvey></SurveyorRoute>
            },   
            {
                path: 'my-surveys',
                element: <SurveyorRoute><MySurveys></MySurveys></SurveyorRoute>
            },   
            {
                path: 'feedback',
                element: <SurveyorRoute><Feedback></Feedback></SurveyorRoute>
            },   
            {
                path: 'manage-surveys',
                element: <AdminRoute><ManageSurveys></ManageSurveys></AdminRoute>
            },   
            {
                path: 'manage-users',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },   
            {
                path: 'payment-History',
                element: <AdminRoute><PaymentHistory></PaymentHistory></AdminRoute>
            },   
            {
                path: 'survey-responses',
                element: <SurveyResponses></SurveyResponses>
            },   
            {
                path: 'update-survey/:id',
                element: <SurveyorRoute><UpdateSurvey></UpdateSurvey></SurveyorRoute>,
                loader: ({params}) => fetch(`https://outpoll-server.vercel.app/surveys/${params.id}`)
            },   
        ]
    }
])

export default router;
