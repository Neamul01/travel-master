import React from 'react';
import { CircularProgress } from '@mui/material';


const Loading = () => {

    return (
        <div className='w-full flex justify-center items-center'>
            <CircularProgress />
        </div>
    );
};

export default Loading;