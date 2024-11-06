import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

export default function SimpleSnackbar(props) {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation('login');

    useEffect(() => {
        setOpen(props.show)


    },[props.show])
    const handleClose = () => {
        setOpen(false);
        props.closeSnak(open);
    };

    return (
        <div>
            <Snackbar
                open={open}
                autoHideDuration={1000}
                onClose={handleClose}
                message={props.result ? t('login.alert.incorrectMail') : t('login.alert.incorrectMail')}
            />
        </div>
    );
}