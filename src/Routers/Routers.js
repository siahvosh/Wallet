import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {Login} from './../Component/Login/Login';
import {Register} from './../Component/Register/Register';
import {WizardBase} from './../Component/Wizard/Verify/WizardBase';
import {EmailVerify} from "../Component/Wizard/Verify/EmailVerify";
import {PhoneNumberVerify} from "../Component/Wizard/Verify/PhoneNumberVerify";
import {ShahkarCode} from "../Component/Wizard/Verify/ShahkarCode";

export const Routers = () => {
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register/>}/>
            <Route path={'verifyWizardBase'} element={<WizardBase/>}>
                <Route path={'emailVerify'} element={<EmailVerify/>}/>
                <Route path={'shahkarCode'} element={<ShahkarCode/>}/>
                <Route path={'phoneNumberVerify'} element={<PhoneNumberVerify/>}/>
            </Route>
            <Route path="/*" element={<div style={{color: "red", margin: "auto", fontSize: '5rem'}}> NOT FOUND 404</div>}/>
        </Routes>
    )
}