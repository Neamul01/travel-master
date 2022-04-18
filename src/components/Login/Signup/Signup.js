import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        creatingError,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, varificationError] = useSendEmailVerification(auth);
    console.log(user)

    if (user) {
        return navigate(from, { replace: true })
    }
    if (loading) {
        return <Loading></Loading>
    }


    const formSubmit = async data => {
        const { name, email, password, confirmPassword } = data;

        if (password !== confirmPassword) {
            setError("Password didn't match")
            return;
        }

        await createUserWithEmailAndPassword(email, password)
        await sendEmailVerification();
    }

    return (
        <div className="w-full max-w-sm p-6 m-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-24">
            <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">Sign Up</h1>

            <form onSubmit={handleSubmit(formSubmit)} className="mt-6">
                <div>
                    <label htmlFor="username" className="block text-sm text-gray-800 dark:text-gray-200">Name</label>
                    <input {...register('name', { required: true })} type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    {errors.name && <p><small className="text-red-500">&diams; This Field is Required.</small></p>}
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm mt-4 text-gray-800 dark:text-gray-200">Email</label>
                    </div>
                    <input {...register('email', { required: true })} type="email"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    {errors.email && <p><small className="text-red-500">&diams; This Field is Required.</small></p>}
                </div>

                <div className="mt-4">
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                    </div>

                    <input {...register('password', { required: true })} type="password"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    {errors.password && <p><small className="text-red-500">&diams; This Field is Required.</small></p>}
                </div>

                <div className="mt-4">
                    <div className="flex items-center justify-between">
                        <label htmlFor="confirm-password" className="block text-sm text-gray-800 dark:text-gray-200">Confirm Password</label>
                    </div>

                    <input {...register('confirmPassword', { required: true })} type="password"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    {errors.confirmPassword && <p><small className="text-red-500">&diams; This Field is Required.</small></p>}
                    {error && <p><small className="text-red-500">&diams; {error}</small></p>}
                </div>


                <div className="mt-6">
                    <button
                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                        Login
                    </button>
                </div>
            </form>

            <p><small>{error?.message}</small></p>

            <div><SocialLogin></SocialLogin></div>

            <p className="mt-8 text-xs font-light text-center text-gray-400"> Already have an account? <Link to={'/login'}
                className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Login</Link>
            </p>

        </div>
    );
};

export default Signup;