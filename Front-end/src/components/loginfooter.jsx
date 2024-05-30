import React from 'react';
import Buttoncomponent from './buttoncomponent';

const Footer = () => {
  return (
    <footer className="flex flex-col bg-[#202024] py-8 items-center mt-80 ">
<div className='flex flex-col justify-center items-center'>
<h1 className='text-center  mx-[5px] text-[white] text-[15px] font-trial'>Get All Alerts- and important information related to cultivation weather and crop updates</h1>

<div className='flex  gap-[6px] justify-center items-center w-auto h-auto mt-5'>

<input type="text" placeholder='123example@gmail.com' className=" lg:w-[422px] lg:h-[33px]  " />
<Buttoncomponent name={"submit"} className={"lg:w-[186px] lg:h-[33px] bg-[#F8C02C] text-black font-bold"} />

</div>

</div>

<hr className='mt-[50px] w-[70%]  mb-[50px] text-center'/>

      <div className="w-screen mx-auto lg:px-8  ">
        <div className="flex flex-wrap items-center justify-center gap-16">
          <div className="w-auto ">
            <h3 className="text-lg font-semibold text-white mb-2 ">Categories</h3>
            <ul className="text-gray-300 text-center flex flex-col items-start">
              <li>Farm Machinery</li>
              <li>Crop Management</li>
              <li>Irrigation Systems</li>
            </ul>
          </div>
          <div className=" ">
            <h3 className="text-lg font-semibold text-white mb-2 ">Customer Services</h3>
            <ul className="text-gray-300 text-center flex flex-col items-start">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Policies & Rules</li>
            </ul>
          </div>
          <div className="  ">
            <h3 className="text-lg font-semibold text-white mb-2 ">About Us</h3>
            <ul className="text-gray-300 text-center flex flex-col items-start">
              <li>Our Story</li>
              <li>Our Mission</li>
              <li>Terms of Use</li>
            </ul>
          </div>
          <div className="   ">
            <h3 className="text-lg font-semibold text-white mb-2 ">Join Our Community</h3>
            <ul className="text-gray-300 text-center flex flex-col items-start">
              <li>Free Membership</li>
              <li>Premium Plans</li>
              <li>Marketplace</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex justify-between items-center " >
            
          <div className="text-black flex flex-col items-center justify-center  w-full">
            <div className='w-screen flex justify-center'>
<hr className='mt-[50px] w-[70%]  mb-[50px] text-center'/>


            </div>
          <p className='hover:text-[#15803d]'>  &copy; {new Date().getFullYear()} AgroHub. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            
        
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;