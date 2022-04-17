import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init'
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, user, loading, facebookError] = useSignInWithFacebook(auth);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pahtname || '/';

    if (user || googleUser) {
        navigate(from, { replace: true })
    }

    const handleGoogleSignin = () => {
        signInWithGoogle()
    }

    const handleFacebookLonin = () => {
        signInWithFacebook()
    }

    return (
        <div>
            <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                <p className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 ">or login with Social Media</p>

                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
            </div>

            <div className="flex items-center mt-6 -mx-2">
                <button onClick={handleGoogleSignin} type="button"
                    className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                    <GoogleIcon />

                    <span className="hidden mx-2 sm:inline">Sign in with Google</span>
                </button>

                <button onClick={handleFacebookLonin}
                    className="p-1 mx-2 text-sm font-medium text-gray-500 transition-colors duration-200 transform bg-gray-300 rounded-md hover:bg-gray-200">
                    <FacebookIcon className='text-gray-700' style={{ fontSize: '1.8rem' }} />
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;