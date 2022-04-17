import React from 'react';
import Service from './Service/Service';

const Services = () => {
    const serviceElements = [
        {
            id: 1,
            name: 'Day Tour',
            img: "https://i.ibb.co/Nyn2GMv/one-day.jpg",
            description: " I can go with you to guide for one day tour .You will get a hole day service and the most atractive places that can cover in a day.Let's Checkout.",
            price: '100'
        },
        {
            id: 2,
            name: 'Two Day Tour',
            img: "https://i.ibb.co/zVfmp7k/two-day.jpg",
            description: 'I will go with you to guide for a 2 day tour. It will cover some distant travel that cab be cover in two day, with hotel.Lets Check it out.',
            price: '200'
        },
        {
            id: 3,
            name: 'Week Tour',
            img: "https://i.ibb.co/KXwckNT/week.jpg",
            description: "I will go for a week tour to guide you. It will cover all places near cox's bazar, also I will provide you hotel if you want.Let's check it out.",
            price: '300'
        }
    ]
    return (

        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-center text-gray-800  capitalize lg:text-4xl dark:text-white">  Services</h1>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
                    {
                        serviceElements.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;