import React from 'react';

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

            <div className="container px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96">
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
                    <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700">
                        <img className="object-cover w-full rounded-xl aspect-square" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">arthur melo</h1>

                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">design director</p>
                    </div>

                    <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700">
                        <img className="object-cover w-full rounded-xl aspect-square" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Pamela Anderson</h1>

                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">Lead Developer</p>
                    </div>

                    <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700">
                        <img className="object-cover w-full rounded-xl aspect-square" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">John Doe</h1>

                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">Full stack developer</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tours;