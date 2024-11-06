import React, {useState} from 'react'
import {VerifyStepper} from './VerifyStepper'
import {EmailVerify} from './EmailVerify'
import {PhoneNumberVerify} from './PhoneNumberVerify'
import {ShahkarCode} from './ShahkarCode'
import {Button, Card, CardActions, CardContent, Grid2} from "@mui/material";
import {useNavigate} from "react-router-dom";


export const WizardBase = () => {
    let navigate = useNavigate()

    const [stepCount, setStepCount] = useState(0)
    const stepsLabel = ['Verify email', 'Verify phone number', 'Shahkar code'];

    const handelStepper = () => {
        setStepCount(stepCount + 1)
        if(stepCount >= 2)
            navigate('/home')
    }

    return (
        <React.Fragment>
            <Card sx={{ width: 'calc(100%)'}}>
                <CardContent>
                    <VerifyStepper labels={stepsLabel} step={stepCount}/>
                </CardContent>


                <CardContent style={{}}>
                    {stepCount === 0 && <EmailVerify/>}
                    {stepCount === 1 && <PhoneNumberVerify/>}
                    {stepCount === 2 && <ShahkarCode/>}
                </CardContent>

                <CardActions style={{padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>

                    {stepCount !== 0 && <Button onClick={() => setStepCount(stepCount - 1)} >Back </Button> }

                    <Button style={{ marginLeft: "auto" }} onClick={handelStepper}>Next</Button>
                </CardActions>

            </Card>
        </React.Fragment>
    )
}
