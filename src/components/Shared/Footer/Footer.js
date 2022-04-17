import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (

        <footer className="flex flex-col items-center justify-center px-6 py-4 mt-12 bg-white dark:bg-gray-800 sm:flex-row">


            <p className="py-2 text-gray-800 mx-2 dark:text-white sm:py-0">All rights reserved &copy;Travel Master</p>

            <div className="flex -mx-2">

                <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
                    aria-label="Facebook">
                    <FacebookOutlinedIcon />
                </a>

                <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Github">
                    <GitHubIcon />
                </a>
            </div>
        </footer>
    );
};

export default Footer;