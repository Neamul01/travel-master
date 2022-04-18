import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Toast = ({ message }) => {
    const [open, setOpen] = useState(true);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    }

    return (
        <div>
            <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={message === "success" ? "success" : "error"} sx={{ width: '100%' }}>
                    {
                        message === "success" ?
                            "Varification Email Sent!"
                            :
                            "Provide a Email"
                    }
                </Alert>
            </Snackbar>

        </div>
    );
};

export default Toast;