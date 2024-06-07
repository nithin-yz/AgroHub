import React from 'react'
import bgimg from "../assets/userhome/plant-a-tree.png"
import { AiFillHome } from "react-icons/ai";
import { TiWeatherShower } from "react-icons/ti";
import { GiGrainBundle, GiDiscussion } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaCircleUser } from "react-icons/fa6";



function Header() {
    return (
        <div>


            <div className="bg-[#ffffff] w-[screen] h-auto ">
                <div className=' example mt-[40px] flex flex-wrap  gap-12 lg:gap-24 justify-evenly w-full '>
                    <div className='  w-auto h-auto'>
                        <img src={bgimg} alt="" className='lg:w-[100px]  w-[50px]' />
                        <h1 className='font-agrofont  text-[20px] lg:text-[40px] text-[#15803d]'>AgroHub</h1>     
                    </div>
                    <div className='mini flex  justify-evenly w-[1200px]     '>
 
                        <ul className='flex flex-wrap w-full justify-center items-center text-[10px]  lg:text-[20px] gap-16 font-trial  ' >


                            <li className='flex justify-center items-center  flex-col gap-3'>
                                {<AiFillHome className='fill-[#404898]  hover:fill-[#15803d] ' />}
                                <center className='hover:text-[green] '>Home</center ></li>
                            <li className='flex justify-center items-center   flex-col gap-3'>
                               <center className='hover:text-[green]'>{<TiWeatherShower className='fill-[#404898]  hover:fill-[#15803d]' />}</center> 
                        
                                <center className='hover:text-[green]'>Weather</center></li>
                            <li className='flex justify-center items-center  flex-col gap-3'>
                                <center > {<GiGrainBundle className='fill-[#404898]  hover:fill-[#15803d]' />}
                                </center>
                                <center className='hover:text-[green]'>Crop Management</center>

                            </li>
                            <li className='flex justify-center items-center  flex-col gap-3'>
                               <center > {<GiDiscussion className='fill-[#404898]  hover:fill-[#15803d]' />}</center>

                                <center className='hover:text-[green]'> Discussion Forum</center>

                            </li>


                            <li className='flex justify-center items-center  flex-col gap-3'>

                                <center> {<SiHomeassistantcommunitystore className='fill-[#404898] hover:fill-[#15803d]' />}
                                </center>
                                <center className='hover:text-[green]'>About us</center>
                            </li>
                            <li className='flex  justify-center items-center flex-col gap-3'>

                                {<FaCircleUser className='fill-[#404898]  hover:fill-[#15803d]' />}


                                <center className='hover:text-[green]'>User Profile</center>
                            </li>
                        </ul>



                    </div>

                </div>





            </div>







        </div>
    )
}

export default Header
