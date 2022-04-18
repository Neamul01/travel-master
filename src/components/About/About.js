import React from 'react';
import me from '../../images/Noman.jpg'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const About = () => {
    return (

        <section className="bg-white mt-20 dark:bg-gray-800">
            <div className="container px-6 py-8 mx-auto">
                <div className="items-center lg:flex">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Md Neamul Haque</h2>

                        <p className="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
                            Hi I am Neamul , Student and learning <span className="font-bold text-blue-600 dark:text-blue-400">Web Development</span> . My future 4-6 month plan is I will get a good level skill in web development and get a remote job either part time or full time. Then I will try to get more skills in web development. In this time I am feeling I have to learn massive thing about Web development but for the short time I am learning only course modules.After finishing the <span className="font-bold text-blue-600 dark:text-blue-400">Programming Hero Web Development Course</span>  I will start descovering Web Development in my way, Inshallah.
                        </p>

                        <div className="flex items-center mt-12 -mx-2">

                            <a className="mx-2" href="https://web.facebook.com/neamul.haque.1614" target={"_blanck"} aria-label="Facebook">
                                <FacebookOutlinedIcon />
                            </a>

                            <a className="mx-2" href="https://www.linkedin.com/in/md-neamul-haque-noman-8a6948217/" target={'_blank'} aria-label="Linkden">
                                <LinkedInIcon />
                            </a>

                            <a className="mx-2" href="https://github.com/Neamul01" target={'_blank'} aria-label="Github">
                                <GitHubIcon />
                            </a>
                        </div>
                    </div>

                    <div className="mt-8 lg:mt-0 lg:w-1/2">
                        <div className="flex items-center justify-center lg:justify-end">
                            <div className="max-w-lg">
                                <img className="object-cover object-center w-96 h-[30rem] rounded-3xl shadow" src={me} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;