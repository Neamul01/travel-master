import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);

    const location = useLocation();

    console.log(user)
    if (loading) {
        return <div className='mt-32 h-[80vh]'>
            <Loading></Loading>
        </div>
    }

    if (error) {
        return console.log(error)
    }

    if (!user) {
        return <Navigate to={'/login'} state={{ from: location }} replace />
    }
    return children;
};

export default RequireAuth;