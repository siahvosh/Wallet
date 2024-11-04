import React from 'react'
import TextField from '@mui/material/TextField';
import {Button, Card, Divider, Grid2, IconButton} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import {useNavigate} from 'react-router-dom'
import {useEffect, useState} from "react";
import  './../../App.css'


export const Login = () => {


    let navigate = useNavigate()
    return (
        <React.Fragment>
           <Card style={{ width: '40%', scale: '1.8'}}>
                    <Grid2 container spacing={2}>
                        <Grid2 size={{xs: 12, sm: 12, md: 5}} style={{padding: '1rem'}}>
                            <Divider style={{fontSize: '.6rem'}}>Login</Divider>
                            <Grid2 style={{marginTop: '1rem'}} container spacing={2}>
                                <Grid2 size={12}>
                                    <TextField
                                        shrink
                                        size="small"
                                        style={{  width: '100%'}}
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
                                        sing in
                                    </Button>
                                </Grid2>
                                <Grid2 size={12} spacing={2}>
                                    <Divider style={{fontSize: '.5rem'}}>Or</Divider>
                                    <div style={{display: 'flex', justifyContent: "space-around", marginTop: '0.6rem'}}>
                                        <IconButton className='hover-icon' aria-label="git" style={{color: '#1E201E', width: '20px', height: '20px'}} size='small'>
                                           <GitHubIcon fontSize='x-small' />
                                        </IconButton>
                                        <IconButton className='hover-icon' aria-label="google" style={{color: '#1E201E', width: '20px', height: '20px'}} size='small'>
                                            <GoogleIcon fontSize='x-small'/>
                                        </IconButton>
                                        <IconButton className='hover-icon' aria-label="apple" style={{ color: '#1E201E', width: '20px', height: '20px'}} size='small'>
                                            <AppleIcon fontSize='x-small'/>
                                        </IconButton>
                                    </div>
                                </Grid2>
                            </Grid2>
                        </Grid2>
                        <Grid2 sx={{ display: { xs: 'none', sm: 'none', md: 'block'} }}  size={{ xs: 12, sm: 12, md: 7 }} style={{background: '#1E201E', padding: '10px'}} >
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
                                <Grid2 size={12} style={{marginTop: '0.7rem'}}>
                                    <Button
                                        className='btn'
                                        style={{fontSize: '.5rem', border: '1px solid white'}}
                                        variant="outlined"
                                        onClick={() => navigate('/register')}
                                    >
                                        I don't have an account
                                    </Button>
                                </Grid2>
                            </div>
                        </Grid2>
                    </Grid2>
                </Card>
        </React.Fragment>
    )
}