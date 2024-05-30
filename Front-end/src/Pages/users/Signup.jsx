import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Buttoncomponent from "./../../components/buttoncomponent";
import mainlogo from "./../../assets/loginsignup/plant-a-tree.png";
import handfarmer from "./../../assets/loginsignup/landlord.jpg";
import handfarmer1 from "./../../assets/loginsignup/handfarmer.jpg";
import bgimage from "./../../assets/loginsignup/bg.jpg";
import rice from "./../../assets/loginsignup/rice.jpg";
import grape1 from "./../../assets/loginsignup/grape1.jpg"
import grape2 from "./../../assets/loginsignup/grape2.jpg"
import { GiFarmer } from "react-icons/gi";

const Signup = () => {
  const [eye, setEye] = useState(true);

  const toggleVisibility = () => {
    setEye(prevEye => !prevEye);
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-[#F5F5F5] signupback">
      <div className="flex  gap-[50px] xl:pl-[70px]">
        <div className="flex flex-col rounded-2xl w-[320px] xl:w-[518px] border-2 bg-[#ffffff] shadow-2xl p-2 xl:p-6 trans">
          <div className="flex justify-center ">
            <img src={mainlogo} className="xl:w-[150px] xl:h-[150px] w-[100px] h-[90px] border-red-500" alt="AgroHub Logo" />
          </div>
          <h1 className="text-center font-agrofont text-[50px] text-[#326f13]">AgroHub</h1>
          <p className="text-green-700 text-center font-semibold font-trial mb-4 ">
            where farmers <GiFarmer className="w-10 h-10 inline-block" /> meet and yield!!
          </p>
          <form className="flex flex-col gap-4 p-3 xl:p-0 ">
            <input type="text" placeholder="Username" className="input-field border-b-2 border-gray-300 focus:outline-none focus:border-green-700 transition duration-200" />
            <input type="text" placeholder="Full Name" className="input-field border-b-2 border-gray-300 focus:outline-none focus:border-green-700 transition duration-200" />
            <input type="email" placeholder="Email" className="input-field border-b-2 border-gray-300 focus:outline-none focus:border-green-700 transition duration-200" />
            <div className="relative">
              <input type={eye ? "password" : "text"} placeholder="Password" className="input-field border-b-2 border-gray-300 focus:outline-none focus:border-green-700 transition duration-200 w-full pr-10" />
              {eye ? (
                <FaEyeSlash onClick={toggleVisibility} className="absolute right-2 top-2 cursor-pointer text-gray-500" />
              ) : (
                <FaEye onClick={toggleVisibility} className="absolute right-2 top-2 cursor-pointer text-gray-500" />
              )}
            </div>
            <input type="password" placeholder="Confirm Password" className="input-field border-b-2 border-gray-300 focus:outline-none focus:border-green-700 transition duration-200" />
            <Buttoncomponent className="w-full h-10 border border-green-700 rounded-lg bg-green-700 text-white font-semibold mt-4" name="Sign Up" />
          </form>
          <div className="flex flex-col items-center mt-4 text-center">
            <p className="text-black font-medium">
              Already have an account? <Link to='/farmer/login' className="text-green-700 font-semibold">Click here</Link>
            </p>
          </div>
        </div>

        <div className="flex flex-col rounded-[30px] h-[550px] w-[478px] xs:hidden md:hidden xl:block" >
          <div className="flex flex-col gap-5">
            <img src={handfarmer} className="rounded-[20px] w-[500px] hover:-scale-x-95 " alt="" />
            <div className="grid grid-cols-3 gap-1 relative" >
              <img src={handfarmer1} className="rounded-[10px] w-[200px] hover:-scale-x-95 " alt="" />
              <img src={handfarmer1} className="rounded-[5px] w-[100px] hover:-scale-x-95 " alt="" />
              {/* <img src={rice} className="rounded-[5px] absolute left-[310px] w-[200px] " alt="" /> */}
              <img src={grape1} className="rounded-[10px] absolute left-[310px] w-[200px] hover:-scale-x-95" alt="" />
              <img src={grape2} className="rounded-[10px] absolute left-[205px] top-[152px] w-[100px] h-[150px] hover:-scale-x-95" alt="" />
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default Signup;
