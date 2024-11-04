import React from 'react'
import {Button, Card, Checkbox, Divider, FormControlLabel, Grid2, IconButton} from "@mui/material";
import TextField from "@mui/material/TextField";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import {useNavigate} from 'react-router-dom'


export const Register = () => {
    let navigate = useNavigate()
    return (
        <React.Fragment>
            <Card style={{ width: '70%', }}>
                <Grid2 container spacing={2}>
                    <Grid2 size={7} style={{background: '#1E201E', padding: '10px'}} >
                        <div style={{ position: "relative", top: '50%', left: '50%', transform:  'translate(-50%, -50%)'}}>
                            <Grid2 size={12}>
                                  <span style={{color: 'white', fontSize: '.8rem', textTransform: 'capitalize', fontWeight: '700'}}>
                                      mirzad wallet
                                  </span>
                            </Grid2>
                            <Grid2 size={12}>
                                  <span style={{color: 'white', fontSize: '.4rem'}}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem blanditiis cum dolorum est eum, expedita facilis inventore magni natus nihil odit placeat quisquam quod quos sequi tempore vel? Sequi!
                                  </span>
                            </Grid2>
                            <Grid2 size={12}>
                                <Button
                                    className='btn'
                                    style={{fontSize: '.5rem', border: '1px solid white', marginTop: '0.7rem'}}
                                    variant="outlined"
                                    onClick={() => navigate('/login')}

                                >
                                    I already have an account.
                                </Button>
                            </Grid2>
                        </div>
                    </Grid2>
                    <Grid2 size={5} style={{padding: '1rem'}}>
                        <Divider style={{fontSize: '.6rem'}}>Register</Divider>
                        <Grid2 style={{marginTop: '1rem'}} container spacing={2}>
                            <Grid2 size={6}>
                                <TextField
                                    size="small"
                                    style={{width: '100%'}}
                                    id="outlined-basic"
                                    type={"text"}
                                    label="First Name"
                                    variant="outlined"
                                />
                            </Grid2>
                            <Grid2 size={6}>
                                <TextField
                                    size="small"
                                    style={{width: '100%'}}
                                    id="outlined-basic"
                                    type={"text"}
                                    label="Last Name"
                                    variant="outlined"
                                />
                            </Grid2>
                            <Grid2 size={12}>
                                <TextField
                                    size="small"
                                    style={{width: '100%'}}
                                    id="outlined-basic"
                                    type={"email"}
                                    label="Email"
                                    variant="outlined"
                                />
                            </Grid2>
                            <Grid2 size={12}>
                                <TextField
                                    size="small"
                                    style={{  width: '100%'}}
                                    id="outlined-basic"
                                    type={"password"}
                                    label="Password"
                                    variant="outlined"
                                />
                            </Grid2>
                            <Grid2 size={12}>
                                <Button
                                    className='btn'
                                    style={{display: 'block',   width: '100%'}}
                                    size="small"
                                    variant="contained"
                                    onClick={() => navigate('/home')}

                                >
                                    sing up
                                </Button>
                                <Checkbox
                                    size='x-small'
                                    style={{width: '10px'}}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                                <span style={{fontSize: '0.5rem'}}>I Agree to Mirzad Privacy Policy.</span>

                            </Grid2>
                        </Grid2>
                    </Grid2>

                </Grid2>
            </Card>
        </React.Fragment>
    )
}