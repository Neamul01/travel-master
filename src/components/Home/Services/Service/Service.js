import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Service = ({ service }) => {
    const { img, name, description, price, id } = service;
    return (
        <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                <img className=' rounded-full' src={img} alt="" />
            </span>

            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">{name}</h1>

            <p className="text-gray-500 dark:text-gray-300">
                {description}
            </p>

            <div className='flex justify-between items-center w-full px-4'>
                <p className='text-gray-800 font-bold'>Price: ${price}</p>
                <Link to={`/checkout`} className="  -mx-1 text-sm py-2 px-4 rounded-md text-gray-200 bg-blue-500 hover:bg-blue-700 capitalize transition-colors duration-200 transform dark:text-blue-400 hover:underline hover:text-gray-100 dark:hover:text-blue-500">
                    <span className="mx-1">Checkout</span>
                </Link>
            </div>

            <Outlet />
        </div>
    );
};

export default Service;