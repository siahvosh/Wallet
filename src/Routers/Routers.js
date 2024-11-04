import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {Login} from './../Component/Login/Login'
import {Register} from './../Component/Register/Register'

export const Routers = () => {
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register/>}/>
            <Route path="/*" element={<div> NOT FOUND 404</div>}/>
        </Routes>
    )
}