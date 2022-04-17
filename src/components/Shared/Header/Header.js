import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <nav className="bg-[#9090905e] z-10 shadow-sm absolute w-full shadow-gray-400">
            <div className="container px-6 py-3 mx-auto">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Link className="text-2xl font-bold text-gray-900 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" to="/">Travel Master</Link>
                        </div>

                        {/* <!-- Mobile menu button --> */}
                        <div className="flex md:hidden">
                            <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
                    <div className="items-center md:flex">
                        <div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
                            <Link className="my-1 text-sm leading-5 text-gray-900 font-semibold transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0" to="/">Home</Link>
                            <Link className="my-1 text-sm leading-5 text-gray-900 font-semibold transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0" to="/checkout">Checkout</Link>
                            <Link className="my-1 text-sm leading-5 text-gray-900 font-semibold transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0" to="blogs">Blogs</Link>
                            <Link className="my-1 text-sm leading-5 text-gray-900 font-semibold transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0" to="about">About</Link>
                        </div>

                        <div className="flex items-center py-2 -mx-1 md:mx-0">
                            <Link className="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform hover:bg-gray-500 rounded-md bg-blue-600 md:mx-2 md:w-auto" to="login">Login</Link>

                        </div>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Header;