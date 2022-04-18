import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { checkoutId } = useParams()
    return (
        <div className='mt-32'>
            <h2>This is Checkoutzdf {checkoutId}</h2>
        </div>
    );
};

export default Checkout;