import React, {useState} from 'react'
import {Button, Card, Grid2, IconButton, TextField} from "@mui/material";
import {OTPInput} from "../../Mui/OTP";
import EditIcon from '@mui/icons-material/Edit';
import GoogleIcon from "@mui/icons-material/Google";

export const PhoneNumberVerify = (props) => {
    const [sendEmail, setSendEmail] = useState(false)
    const handelOtpNumber = (value) => {
        const isArrayComplete = value.every(element => element !== "");
        props.disableStep2(isArrayComplete)
        console.log(isArrayComplete)
    }
    return (
        <React.Fragment>
            <React.Fragment>
                <Card style={{width: 'calc(100%)', padding: '1rem 0 2rem 0'}}>
                    <Grid2>
                        <Grid2 size={12}>
                            <span style={{fontSize: '1.5rem', fontWeight: '500'}}>Please enter you phone number and  check your inbox for the verification code. Enter the code below to verify your account.</span>
                        </Grid2>
                        <Grid2 size={12} container spacing={1} style={{justifyContent: 'center', marginTop: '1rem'}}>
                            <Grid2>
                               <IconButton onClick={() => setSendEmail(false)} className='hover-icon ' aria-label="google" style={{color: '#1E201E', background: 'white !important'}} >
                              <EditIcon fontSize='small'/>
                            </IconButton>
                            </Grid2>
                            <Grid2>
                                <TextField disabled={sendEmail} label='phone number' size="small" style={{}}/>
                            </Grid2>
                            <Grid2>
                                <Button disabled={sendEmail} onClick={() => setSendEmail(true)} >Send sms</Button>
                            </Grid2>
                        </Grid2>

                        {
                            sendEmail &&
                            <Grid2 size={12} container spacing={1} style={{justifyContent: 'center'}}>
                              <Grid2 size={12}>
                                <OTPInput otpNumber={handelOtpNumber}/>
                              </Grid2>
                              <Grid2>
                                <span style={{paddingTop: '5rem'}}>Resend code</span>
                              </Grid2>
                            </Grid2>
                        }

                    </Grid2>
                </Card>
            </React.Fragment>
        </React.Fragment>
    )
}