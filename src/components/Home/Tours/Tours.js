import React from 'react';
import sundarban1 from '../../../images/sundarban1.jpg'
import bandarban from '../../../images/bandarban.jpg';
import coxBazar from '../../../images/cox-bazar.jpg';

const Tours = () => {
    return (

        <section className="bg-white dark:bg-gray-900">
            <div className="h-[32rem] bg-gray-100 dark:bg-gray-800">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Latest Tours</h1>

                    <div className="flex justify-center mx-auto mt-6">
                        <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                    </div>

                    <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
                        I travel every weeks or every day. When a team made we go to tour.
                        <br />
                        Here are some latest Tour.
                    </p>
                </div>
            </div>

            <div className="container px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96 pointer">
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
                    <div className="flex flex-col  w-96 h-96 items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700 relative  cursor-pointer"
                        style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.619)), url(${sundarban1})`, backgroundSize: 'cover' }}>

                        <div className=' absolute bottom-6 text-center'>
                            <h1 className="mt-4 text-2xl font-semibold text-white capitalize dark:text-white">Sundarban</h1>
                            <p className="mt-2 text-gray-300 capitalize dark:text-gray-300">Last week</p>
                        </div>
                    </div>

                    <div className="flex flex-col  w-96 h-96 items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700 relative  cursor-pointer"
                        style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.619)), url(${bandarban})`, backgroundSize: 'cover' }}>

                        <div className=' absolute bottom-6 text-center'>
                            <h1 className="mt-4 text-2xl font-semibold text-white capitalize dark:text-white">Bandarban</h1>
                            <p className="mt-2 text-gray-300 capitalize dark:text-gray-300">Before Last two week</p>
                        </div>
                    </div>

                    <div className="flex flex-col  w-96 h-96 items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700 relative cursor-pointer"
                        style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.619)), url(${coxBazar})`, backgroundSize: 'cover' }}>

                        <div className=' absolute bottom-6 text-center'>
                            <h1 className="mt-4 text-2xl font-semibold text-white capitalize dark:text-white">Cox's Bazar</h1>
                            <p className="mt-2 text-gray-300 capitalize dark:text-gray-300">Last Month</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tours;