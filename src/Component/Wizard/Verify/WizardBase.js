import React, {useState} from 'react'
import {VerifyStepper} from './VerifyStepper'
import {EmailVerify} from './EmailVerify'
import {PhoneNumberVerify} from './PhoneNumberVerify'
import {ShahkarCode} from './ShahkarCode'
import {Button, Card, CardActions, CardContent} from "@mui/material";


export const WizardBase = () => {

    const [stepCount, setStepCount] = useState(0)
    const stepsLabel = ['Verify email', 'Verify phone number', 'Shahkar code'];

    const handelSteooer = () => {

    }

    return (
        <React.Fragment>
            <Card sx={{ width: 'calc(100%)'}}>
                <CardContent>
                    <VerifyStepper labels={stepsLabel} step={stepCount}/>
                </CardContent>
                <CardContent style={{borderTop: '1px solid black', borderBottom: '1px solid black'}}>
                    {stepCount === 0 && <EmailVerify/>}
                    {stepCount === 1 && <PhoneNumberVerify/>}
                    {stepCount === 2 && <ShahkarCode/>}

                </CardContent>


                <CardActions style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem'}}>
                    {stepCount !== 0 && <Button onClick={() => setStepCount(stepCount - 1)}> Back</Button>}
                    <Button  onClick={() => setStepCount(stepCount + 1)}>next</Button>
                </CardActions>

            </Card>
        </React.Fragment>
    )
}
