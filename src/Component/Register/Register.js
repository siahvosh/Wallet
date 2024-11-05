import React from 'react'
import {Box, Button, Card, Checkbox, Divider, FormControlLabel, Grid2, Icon, IconButton} from "@mui/material";
import TextField from "@mui/material/TextField";
import {useNavigate} from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import './../../i18n';
import i18n from './../../i18n';
import './../../App.css'

export const Register = () => {
    let navigate = useNavigate()
    const { t } = useTranslation('register');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <React.Fragment>
            <Card style={{ width: '40%', scale: '1.8'}}>
                <Grid2 container spacing={2}>
                    <Grid2 sx={{ display: { xs: 'none', sm: 'none', md: 'block'} }}  size={{ xs: 12, sm: 12, md: 7 }} style={{background: '#1E201E', padding: '10px'}} >
                        <Button
                            size='small'
                            variant='outlined'
                            className='btn'
                            style={{fontSize: '9px', padding: '0', position: 'absolute', left: '0.7rem', border: '1px solid white'}}
                            onClick={() => changeLanguage(  i18n.language === 'fa' ?  'en' :  'fa')}
                        >
                            {i18n.language === 'fa' ? t('register.btn.fa') : t('register.btn.en')}
                        </Button>
                        <div style={{ position: "relative", top: '50%', left: '50%', transform:  'translate(-50%, -50%)'}}>
                            <Grid2 size={12}>
                                  <span style={{color: 'white', fontSize: '.8rem', textTransform: 'capitalize', fontWeight: '700'}}>
                                      {t('register.description.title')}
                                  </span>
                            </Grid2>
                            <Grid2 size={12}>
                                  <span style={{color: 'white', fontSize: '.4rem'}}>
                                      {t('register.description.welcome')}
                                  </span>
                            </Grid2>
                            <Grid2 size={12}>
                                <Button
                                    className='btn'
                                    style={{fontSize: '.5rem', border: '1px solid white', marginTop: '0.7rem'}}
                                    variant="outlined"
                                    onClick={() => navigate('/login')}

                                >
                                    {/*I already have an account.*/}
                                    {t('register.btn.haveAnAccount')}
                                </Button>
                            </Grid2>
                        </div>
                    </Grid2>
                    <Grid2 size={{xs: 12, sm: 12, md: 5}} style={{padding: '1rem'}}>
                        <Divider style={{fontSize: '.6rem'}}> {t('register.form.title')} </Divider>
                        <Grid2 style={{marginTop: '1rem'}} container spacing={2}>
                            {/*First name========================================*/}
                            <Grid2 size={{xs: 12, sm: 12, md: 6}}>
                                <TextField
                                    size="small"
                                    style={{width: '100%'}}
                                    id="outlined-basic"
                                    type={"text"}
                                    label={t('register.form.firstName')}
                                    variant="outlined"
                                />
                            </Grid2>
                            {/*Last name=======================================*/}
                            <Grid2 size={{xs: 12, sm: 12, md: 6}}>
                                <TextField
                                    size="small"
                                    style={{width: '100%'}}
                                    id="outlined-basic"
                                    type={"text"}
                                    label={t('register.form.lastName')}
                                    variant="outlined"
                                />
                            </Grid2>
                            {/*Email=======================================*/}
                            <Grid2 size={12}>
                                <TextField
                                    size="small"
                                    style={{width: '100%'}}
                                    id="outlined-basic"
                                    type={"email"}
                                    label={t('register.form.email')}
                                    variant="outlined"
                                />
                            </Grid2>
                            {/*Password=======================================*/}
                            <Grid2 size={12}>
                                <TextField
                                    size="small"
                                    style={{  width: '100%'}}
                                    id="outlined-basic"
                                    type={"password"}
                                    label={t('register.form.password')}
                                    variant="outlined"
                                />
                            </Grid2>
                            {/*button=======================================*/}
                            <Grid2 size={12}>
                                <Button
                                    className='btn'
                                    style={{display: 'block',   width: '100%'}}
                                    size="small"
                                    variant="contained"
                                    onClick={() => navigate('/home')}

                                >
                                    {t('register.form.registerBtn')}
                                </Button>
                                <Checkbox
                                    size='x-small'
                                    style={{width: '10px'}}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                                <span style={{fontSize: '0.5rem'}}>{t('register.btn.rulesCheckBox')}</span>

                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Card>
        </React.Fragment>
    )
}