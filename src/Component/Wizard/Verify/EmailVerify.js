import React from 'react'
import {Card, Grid2} from "@mui/material";

export const EmailVerify = () => {
    return (
        <React.Fragment>
            <Card style={{width: 'calc(100%)', padding: '1rem 0 2rem 0'}}>
                <Grid2 spacing={6}>
                    <Grid2 size={12}>
                        <span style={{fontSize: '2rem', fontWeight: '700'}}>sia@gmail.com</span>
                    </Grid2>
                    <Grid2 size={12}>
                        <span style={{fontSize: '1.5rem', fontWeight: '500'}}>Please check your email for the verification code. Enter the code below to verify your account.</span>
                    </Grid2>
                </Grid2>
            </Card>
        </React.Fragment>
    )
}
