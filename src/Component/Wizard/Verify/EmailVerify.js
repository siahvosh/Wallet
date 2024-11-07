import React from 'react'
import {Card, Grid2} from "@mui/material";
import {OTPInput} from "../../Mui/OTP";
import {useState} from "react";


export const EmailVerify = (props) => {

    const handelOtpNumber = (value) => {
        const isArrayComplete = value.every(element => element !== "");
        props.disableStep1(isArrayComplete)
        console.log(isArrayComplete)
    }

    return (
        <React.Fragment>
            <Card style={{width: 'calc(100%)', padding: '1rem 0 2rem 0'}}>
                <Grid2 container spacing={1} style={{justifyContent: 'center'}}>
                    <Grid2 size={12}>
                        <span style={{fontSize: '2rem', fontWeight: '700'}}>sia@gmail.com</span>
                    </Grid2>
                    <Grid2 size={12}>
                        <span style={{fontSize: '1.5rem', fontWeight: '500'}}>Please check your email for the verification code. Enter the code below to verify your account.</span>
                    </Grid2>
                    <OTPInput otpNumber={handelOtpNumber}/>
                    <span style={{paddingTop: '2rem'}}>Resend code</span>
                </Grid2>
            </Card>
        </React.Fragment>
    )
}
