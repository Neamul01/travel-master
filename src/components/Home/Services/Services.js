import React from 'react';
import tiger from '../../../images/one-day.jpg';
import twoDay from '../../../images/two-day.jpg';
import week from '../../../images/week.jpg';

const Services = () => {
    return (

        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-center text-gray-800  capitalize lg:text-4xl dark:text-white">  Services</h1>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
                    <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                        <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                            <img className=' rounded-full' src={tiger} alt="" />
                        </span>

                        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Day Tour</h1>

                        <p className="text-gray-500 dark:text-gray-300">
                            I can go with you to guide for one day tour .You will get a hole day service and the most atractive places that can cover in a day.Let's Checkout.
                        </p>

                        <div className='flex justify-between items-center w-full px-4'>
                            <p className='text-gray-800 font-bold'>Price:</p>
                            <button className="  -mx-1 text-sm py-2 px-4 rounded-md text-gray-200 bg-blue-500 capitalize transition-colors duration-200 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                <span className="mx-1">Checkout</span>
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                        <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                            <img className=' rounded-full' src={twoDay} alt="" />
                        </span>

                        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Two Day Tour</h1>

                        <p className="text-gray-500 dark:text-gray-300">
                            I will go with you to guide for a 2 day tour. It will cover some distant travel that cab be cover in two day, with hotel.Lets Check it out.
                        </p>

                        <div className='flex justify-between items-center w-full px-4'>
                            <p className='text-gray-800 font-bold'>Price:</p>
                            <button className="  -mx-1 text-sm py-2 px-4 rounded-md text-gray-200 bg-blue-500 capitalize transition-colors duration-200 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                <span className="mx-1">Checkout</span>
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                        <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500" >
                            <img className=' rounded-full' src={week} alt="" />
                        </span>

                        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Week Tour</h1>

                        <p className="text-gray-500 dark:text-gray-300">
                            I will go for a week tour to guide you. It will cover all places near cox's bazar , also I will provide you hotel if you want.Let's check it out.
                        </p>

                        <div className='flex justify-between items-center w-full px-4'>
                            <p className='text-gray-800 font-bold'>Price:</p>
                            <button className="  -mx-1 text-sm py-2 px-4 rounded-md text-gray-200 bg-blue-500 capitalize transition-colors duration-200 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                <span className="mx-1">Checkout</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;