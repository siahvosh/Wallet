import React, {useEffect, useState} from 'react'
import {VerifyStepper} from './VerifyStepper'
import {EmailVerify} from './EmailVerify'
import {PhoneNumberVerify} from './PhoneNumberVerify'
import {ShahkarCode} from './ShahkarCode'
import {Button, Card, CardActions, CardContent, Grid2} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";


export const WizardBase = () => {
    let navigate = useNavigate()
    const { t } = useTranslation('register')

    const [stepCount, setStepCount] = useState(0)
    const [disable, setDisable] = useState(true)
    const stepsLabel = ['verify.step1.label', 'verify.step2.label', 'verify.step3.label'];

    const handelStepper = () => {
        setDisable(true)

        setStepCount(stepCount + 1)
        if(stepCount >= 2)
            navigate('/home')
    }
    const handelDisableBtn = (value) => {
        setDisable(!value)
    }

    return (
        <React.Fragment>
            <Card sx={{ width: 'calc(100%)'}}>
                <CardContent>
                    <VerifyStepper labels={stepsLabel} step={stepCount}/>
                </CardContent>
                <CardContent>
                    {stepCount === 0 && <EmailVerify disableStep1={handelDisableBtn}/>}
                    {stepCount === 1 && <PhoneNumberVerify disableStep2={handelDisableBtn}/>}
                    {stepCount === 2 && <ShahkarCode disableStep3={handelDisableBtn}/>}
                </CardContent>
                <CardActions style={{padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                    {stepCount !== 0 ? <Button onClick={() => setStepCount(stepCount - 1)} > {t('wizardBase.back')} </Button> : <span></span>}
                    <Button disabled={disable}  onClick={handelStepper}> {stepCount > 1 ? t('wizardBase.finish') : t('wizardBase.next')}</Button>
                </CardActions>
            </Card>
        </React.Fragment>
    )
}
