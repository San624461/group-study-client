import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading} = useContext(AuthContext)

const location = useLocation()
console.log(location);

     if(loading){
     return   <span className="loading loading-spinner text-error"></span>
     }
    if (!user) {
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }


    return children;
};

export default PrivateRoute;