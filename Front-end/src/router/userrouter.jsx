import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginap from "./../Pages/users/Loginpage";
import Signup from "../Pages/users/Signup";

import UserhomeLayout from "./../Layout/userhomelayout";
import UserHome from "./../Pages/users/UserHome";
import OTPPage from "../Pages/users/Otppage";

function Userrouter() {
  return (
    <Routes>
      <Route path="/farmer/login" element={<Loginap />} />
      <Route path="/farmer/signup" element={<Signup />} />
      <Route path="/farmer/signup/otp" element={<OTPPage/>}/>
      <Route path="/" element={<UserHome />}>
        <Route path="/" element={<UserhomeLayout />} />
        <Route path="/home" element={<UserhomeLayout />} />
        
      </Route>
    </Routes>
  );
}

export default Userrouter;
