import React from 'react'
import TextField from '@mui/material/TextField';
import {Button, Card, Divider, Grid2, IconButton} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import {useNavigate} from 'react-router-dom'
import {useState} from "react";
import  './../../App.css'
import i18n from './../../i18n';
import {useTranslation} from "react-i18next";
import changeLanguage from "../../helper"
import SimpleSnackbar from "../Mui/snakbar";

export const Login = () => {
    let navigate = useNavigate()
    const { t } = useTranslation('login');


    // useState=====================================
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [emailVal, setEmailVal] = useState('')
    const [passVal, setPassVal] = useState('')
    const [emailError, setEmailError] = useState('');
    const [result, setResult] = useState(false)



    // useEffect=====================================



    // FUNCTIONS=====================================

    const handelCloseShow = (value) => {
        setShowSnackbar(!value)
    }
    const login = () => {
        if(emailVal !== 'sia@gmail.com' && passVal !== '12345')
            setResult(false)
        else{
            setResult(true)
            navigate('/home')
        }
        setShowSnackbar(true);
    };
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const handleEmailChange = (e) => {
        const value = e;
        setEmailVal(value);

        if (!validateEmail(value)) {
            setEmailError(t('login.alert.invalidMail'));
        } else {
            setEmailError('');
        }
    };



    return (
        <React.Fragment>
           <Card style={{ width: '50%', scale: '1.8', background: '#1E201E'}}>
               <Grid2 container>
                   <Grid2 size={{xs: 12, sm: 12, md: 5}} style={{padding: '1rem', background: '#ffffff'}}>
                       <Divider>
                           <span style={{fontSize: '1.2rem', fontWeight: '500'}}>{t('login.form.title')}</span>
                       </Divider>
                       <Grid2 style={{marginTop: '1rem'}} container spacing={1}>
                           <Grid2 size={12}>
                               <TextField
                                   className="TextField"
                                   size="small"
                                   style={{  width: '100%'}}
                                   id="outlined-basic"
                                   type={"email"}
                                   value={emailVal}
                                   error={!!emailError}
                                   helperText={emailError}
                                   onChange={(e) => handleEmailChange(e.target.value)}
                                   label={t('login.form.email')}
                                   variant={"outlined"}
                               />
                           </Grid2>
                           <Grid2 size={12}>
                               <TextField
                                   size="small"
                                   style={{  width: '100%'}}
                                   id="outlined-basic"
                                   type={"password"}
                                   label={t('login.form.password')}
                                   variant="outlined"
                                   value={passVal}
                                   onChange={(e) => setPassVal(e.target.value) }
                               />
                           </Grid2>
                           <Grid2 size={12}>
                               <Button
                                   style={{display: 'block',   width: '100%'}}
                                   size="small"
                                   variant="contained"
                                   onClick={login}
                                   disabled={!emailVal || !passVal}
                               >
                                   {t('login.form.loginBtn')}
                               </Button>
                           </Grid2>
                           <Grid2 size={12}>
                               <Divider style={{fontSize: '.5rem'}}>{t('login.form.or')}</Divider>
                               <div style={{display: 'flex', justifyContent: "space-around", marginTop: '0.6rem'}}>
                                   <IconButton className='hover-icon btn' aria-label="git" style={{color: '#1E201E', width: '20px', height: '20px'}} size='small'>
                                      <GitHubIcon fontSize='x-small'/>
                                   </IconButton>
                                   <IconButton className='hover-icon btn' aria-label="google" style={{color: '#1E201E', width: '20px', height: '20px'}} size='small'>
                                       <GoogleIcon fontSize='x-small'/>
                                   </IconButton>
                                   <IconButton className='hover-icon' aria-label="apple" style={{ color: '#1E201E', width: '20px', height: '20px'}} size='small'>
                                       <AppleIcon fontSize='x-small btn'/>
                                   </IconButton>
                               </div>
                           </Grid2>
                       </Grid2>
                   </Grid2>

                   <Grid2
                       sx={{ display: { xs: 'none', sm: 'none', md: 'block'} }}
                       size={{ xs: 12, sm: 12, md: 7 }}
                       style={{background: '#1E201E', padding: '0.5rem'}}
                   >
                       <Button
                           size='small'
                           variant='outlined'
                           className="btn"
                           style={{
                               fontSize: '9px',
                               padding: '0',
                               position: 'absolute',
                               left: i18n.language === 'fa' ? '0.7rem': '',
                               right: i18n.language === 'en' ? '0.7rem': '',
                               border: '1px solid white'}}
                           onClick={() => changeLanguage(  i18n.language === 'fa' ?  'en' :  'fa')}
                       >
                           {i18n.language === 'fa' ? t('login.btn.fa') : t('login.btn.en')}
                       </Button>
                       <div style={{ position: "relative", top: '50%', left: '50%', transform:  'translate(-50%, -50%)'}}>
                           <Grid2 size={12}>
                             <span style={{color: 'white', fontSize: '.8rem', textTransform: 'capitalize', fontWeight: '700'}}>
                                 {t('login.description.title')}
                             </span>
                           </Grid2>
                           <Grid2 size={12}>
                             <span style={{color: 'white', fontSize: '.4rem'}}>
                               {t('login.description.welcome')}
                             </span>
                           </Grid2>
                           <Grid2 size={12} style={{marginTop: '0.7rem'}}>
                               <Button
                                   style={{fontSize: '.5rem'}}
                                   className="btn"
                                   variant="outlined"
                                   onClick={() => navigate('/register')}
                               >
                                   {t('login.description.dontHaveAnAccount')}
                               </Button>
                           </Grid2>
                       </div>
                   </Grid2>
               </Grid2>

           </Card>
           <SimpleSnackbar show={showSnackbar} result={result} closeSnak={handelCloseShow}/>
        </React.Fragment>
    )
}