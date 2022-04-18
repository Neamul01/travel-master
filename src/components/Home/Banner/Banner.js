import React from 'react';
import image from '../../../images/sundarban.jpg'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Banner = () => {
    return (

        <header>

            <div className="w-full bg-center bg-cover h-screen" style={{ backgroundImage: `url(${image})` }}>
                <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                    <div className="text-center">

                        <h1 className="text-2xl mt-10 mb-4 tracking-wide font-semibold text-white uppercase lg:text-5xl"
                            style={{ lineHeight: '5rem' }}>Travel the most Beautiful places in Bangladesh <br /> with <span className="text-blue-400">Travel Master</span>
                        </h1>
                        <KeyboardArrowDownIcon className='text-white mt-0' style={{ fontSize: '4rem' }} />

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Banner;