import React from 'react';


const Blogs = () => {
    return (
        <div className='mt-24 px-10'>
            <button className=''>
                hello</button>
            <div className='w-full bg-gray-100 rounded-sm p-16'>
                <div className='bg-white px-16 py-16 rounded-lg'>
                    <h2 className="text-3xl text-blue-500 font-semibold before:content-['1.'] before:text-4xl before:text-gray-700"> Deference Between Authentication and Authorization.</h2>
                    <p className='mt-4 ml-10 pr-32'>
                        Authenticetion is a process where check a person is user or not. When need to permit a user to log in a system then check Authentication and if he user give access.It is the first steep to using a system. On the other hand Authorization is a process to give access or permission a user what kind of data they can access. Authorization uses to give permission a user to use preserved system or function in a applicaion. It is used to classified user.
                    </p>
                </div>

                <div className='bg-white px-16 pt-2 pb-14 rounded-lg my-4'>
                    <h2 className='pt-1 text-3xl text-blue-500 font-semibold mt-12 before:content-["2."] before:text-4xl before:text-gray-700' > Why are you using "Firebase"? What other options do you have to implement Authentication?</h2>
                    <p className='mt-4 ml-10'>
                        I am using Firebase because it is easy to use and I can host in it easily using CLI. There are many other third party Authenticarion providers in my case I will implement using any Authentication provider because I can read and understand their docs and I can search for a helpfull resource for it.Here are some third party Authenticetion providers name:" 1. Okta 2.Auth0  3.Frontegg 4.OneLogin 5.Pingldentity 6.WorkOs 7.SecureOuth 8.LoginRadious  9.FusionAuth 10.Keycloak "
                    </p>
                </div>

                <div className='bg-white px-16 pt-5 pb-10 rounded-lg'>
                    <h2 className='pt-1 text-3xl text-blue-500 font-semibold mt-12 before:content-["3."] before:text-4xl before:text-gray-700' > What other services does "Firebase" provide other then othenticetion.</h2>
                    <div className='mt-4 ml-10'>
                        <span className='text-lg'>Firebase provides a couple of things other then othentication. </span>
                        <ol type="1" className='mt-2'>
                            <li>1. Cloud Store</li>
                            <li>2. Crashlytics</li>
                            <li>3. Firebase Database</li>
                            <li>4. Hosting</li>
                            <li>5. Cloud Messaging</li>
                            <li>6. A/B Testing</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;