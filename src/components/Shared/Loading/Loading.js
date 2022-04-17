import React from 'react';
import { CircularProgress } from '@mui/material';


const Loading = () => {

    return (
        <div className='w-full flex justify-center items-center h-[80vh]'>
            <CircularProgress />
        </div>
    );
};

export default Loading;