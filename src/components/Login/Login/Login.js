import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from '../../../firebase.init';
import Toast from '../../Shared/Toast/Toast';


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const [success, setSuccess] = useState(false)
    const [message, setMessage] = useState('')

    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        signinError,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );


    if (user) {
        navigate(from, { replace: true })
    }
    if (loading) {
        console.log('loading...')
    }

    const formSubmit = data => {
        const { email, password } = data;
        setEmail(email)
        console.log(email, password)

        signInWithEmailAndPassword(email, password)
    }
    if (sending) {
        console.warn('sending');
        return;
    }


    const handleResetPass = async () => {
        if (!email) {
            console.log('give email');
            setSuccess(true)
            setMessage('false')
            return
        }
        setSuccess(false)
        await sendPasswordResetEmail(email).then(setMessage('success'))
        console.log('reset pass sent')
    }

    return (
        <div className="w-full max-w-sm p-6 m-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-24">
            <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">Login</h1>



            <form onSubmit={handleSubmit(formSubmit)} onBlur={e => setEmail(e.target.value)} className="mt-6">
                <div>
                    <label htmlFor="username" className="block text-sm text-gray-800 dark:text-gray-200">Email</label>
                    <input {...register("email", { required: true })} type="email"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    {errors.email && <p><small className='text-red-500'>&diams; This field is Required</small></p>}
                </div>

                <div className="mt-4">
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                        <p onClick={handleResetPass} className="cursor-pointer text-xs text-gray-600 dark:text-gray-400 hover:underline">Forget Password?</p>
                    </div>

                    <input {...register("password", { required: true })} type="password"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    {errors.email && <p><small className='text-red-500'>&diams; This Field is Required</small></p>}
                </div>

                <div className="mt-6">
                    <button
                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                        Login
                    </button>
                </div>
            </form>

            <SocialLogin></SocialLogin>

            <p className="mt-8 text-xs font-light text-center text-gray-400"> Don't have an account? <Link to={'/signup'}
                className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Create One</Link>
            </p>
            {
                success ? <Toast message={message}></Toast> : ''
            }
        </div>
    );
};

export default Login;