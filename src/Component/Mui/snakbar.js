import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

export default function SimpleSnackbar(props) {
    // const [open, setOpen] = useState(false);



    useEffect(() => {
        setState({...state, open: props.show})
    }, [props.show])

    const [state, setState] = useState({
        open: false,
        vertical: 'center',
        horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;
    const { t } = useTranslation('login');
    const handleClose = () => {
        setState({...state, open: false} );
        props.closeSnak(open);
    };

    return (
        <div>
            <Snackbar
                open={open}
                anchorOrigin={{ vertical, horizontal }}
                autoHideDuration={2000}
                onClose={handleClose}
                message={props.result ? t('login.alert.incorrectMail') : t('login.alert.incorrectMail')}
            />
        </div>
    );
}