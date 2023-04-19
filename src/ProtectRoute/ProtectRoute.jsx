import React, { useContext } from 'react';
import { userProvider } from '../AuthProvider/AuthProvider';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Spinner from '../pages/Home/Spinner/Spinner';

const ProtectRoute = ({children}) => {
    const {user,loader} = useContext(userProvider);
    const location = useLocation();
    if(loader){
        return <Spinner></Spinner>
    }
    
   else if(user){
        return children
    }

   
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default ProtectRoute;