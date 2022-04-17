import React from 'react';
import image from '../../../images/sundarban.jpg'

const Banner = () => {
    return (

        <header>

            <div className="w-full bg-center bg-cover h-screen" style={{ backgroundImage: `url(${image})` }}>
                <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">Build Your new <span className="text-blue-400 underline">Saas</span></h1>
                        <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Start project</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Banner;