import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../images/sundarban.jpg'

const Banner = () => {
    return (

        <header>

            <div className="w-full bg-center bg-cover h-screen" style={{ backgroundImage: `url(${image})` }}>
                <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                    <div className="text-center">

                        <h1 className="text-2xl mb-10 tracking-wide font-semibold text-white uppercase lg:text-6xl"
                            style={{ lineHeight: '7rem' }}>Travel the most Beautiful places in the <br /> world with <span className="text-blue-400 underline">Travel Master</span></h1>
                        <Link to={'/checkout'} className="w-full px-8 py-4 text-lg font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">see journey</Link>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Banner;