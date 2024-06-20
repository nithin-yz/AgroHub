import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./../Pages/users/Loginpage";
import Signup from "../Pages/users/Signup";

import UserhomeLayout from "./../Layout/userhomelayout";
import UserHome from "./../Pages/users/UserHome";

function Userrouter() {
  return (
    <Routes>
      <Route path="/farmer/login" element={<Login />} />
      <Route path="/farmer/signup" element={<Signup />} />
      <Route path="/" element={<UserHome />}>
        <Route path="/" element={<UserhomeLayout />} />
        <Route path="/userhome" element={<UserhomeLayout />} />
        
      </Route>
    </Routes>
  );
}

export default Userrouter;
