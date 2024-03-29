/* eslint-disable no-unused-vars */
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Spinner from '../components/shared/Spinner';

const PrivateRoute = ({children}) => {

    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <Spinner/>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/signin" state={location.pathname}></Navigate>;

}

export default PrivateRoute
