import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./../Pages/users/Loginpage"
import Signup from "../Pages/users/Signup"
import UserHome from "../Pages/users/UserHome"



function Userrouter() {
        return (

                <Routes>

                        <Route path="/farmer/login" element={<Login />} />
                        <Route path="/farmer/signup" element={<Signup />} />
                        <Route path="/" element={<UserHome />} />



                </Routes>










        )





}

export default Userrouter