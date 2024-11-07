import React, {useState} from 'react'
import {Button, Card, Grid2, IconButton, TextField} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export const ShahkarCode = (props) => {

    const [disable, setDisable] = useState(true)

    const handelNationalCode = (value) => {
        if(value.length === 10) {
            props.disableStep3(true)
            setDisable(false)
        }
        else {
            props.disableStep3(false)
            setDisable(true)
        }
    }


    return (
        <React.Fragment>
            <Card style={{width: 'calc(100%)', padding: '1rem 0 2rem 0'}}>
                <Grid2>
                    <Grid2 size={12}>
                        <span style={{fontSize: '1.5rem', fontWeight: '500'}}>Please enter you phone number and  check your inbox for the verification code. Enter the code below to verify your account.</span>
                    </Grid2>
                    <Grid2 size={12} container spacing={1} style={{justifyContent: 'center', marginTop: '1rem'}}>
                        <Grid2>
                            <IconButton className='hover-icon' aria-label="google" style={{color: '#1E201E', background: 'white !important'}} >
                                <EditIcon fontSize='small'/>
                            </IconButton>
                        </Grid2>
                        <Grid2>
                            <TextField  label='National code' size="small" onChange={(e) => handelNationalCode(e.target.value)}/>
                        </Grid2>
                        <Grid2>
                            <Button disabled={disable} >Apply</Button>
                        </Grid2>
                    </Grid2>

                </Grid2>
            </Card>
        </React.Fragment>
    )
}