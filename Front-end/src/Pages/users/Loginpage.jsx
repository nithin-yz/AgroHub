import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Buttoncomponent from "./../../components/buttoncomponent";
import mainlogo from "./../../assets/loginsignup/plant-a-tree.png";
import { useForm } from 'react-hook-form';
import { GiFarmer } from "react-icons/gi";
import bgimg from "./../../assets/loginsignup/bg.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ImShocked } from "react-icons/im";
import { FaRegFaceSmileBeam } from "react-icons/fa6";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [eye, setEye] = useState(true);

  const onSubmit = (data) => {
    console.log(data);
  };

  const toggleVisibility = () => {
    setEye(prevEye => !prevEye);
  };

  return (
    <div className="flex border-red-700 justify-center w-full h-screen items-center bg-[#F5F5F5]" style={{ backgroundImage: `url(${bgimg})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col rounded-2xl w-[320px] h-[600px] xl:w-[438px] xl:h-[620px] border-2 bg-[#ffffff] shadow-2xl"
      >
        <div className="flex w-full justify-center">
          <img src={mainlogo} className="w-[150px] h-[150px]" alt="" />
        </div>
        <h1 className="text-center font-agrofont text-[50px] text-[#326f13]">AgroHub</h1>
        <p className="text-[green] text-center font-agrofont">where farmers <GiFarmer className="w-[50px] h-[50px] fill-[brown] inline-block" style={{ color: 'brown' }} /> meet and yield!!</p>
        <div className="flex flex-col gap-[20px] mt-[20px] justify-center items-center">
          <input
            type="email"
            placeholder="email"
            {...register("email",{required:"email is required",pattern:{value:/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message:"not a valid email"}})}
            className="sm:w-[200px] xl:w-[360px] xl:h-[38px] pl-[10px] sm:placeholder:ml-[50px] placeholder:ml-[100px] border-b focus:outline-[#008a00] focus:rounded-lg bg-transparent"
          />
        
<div className="flex items-start w-full px-11">

{errors.email && <p className=" text-end text-red-600">{errors.email.message}</p>}


</div>

          <div className="relative">
            <input
              type={eye ? "password" : "text"}
              placeholder="password"
              {...register("password",{required:"please fill your password", pattern:{ value: /^.{8,}$/,message:"invalid password"}} )}
              className="sm:w-[200px] xl:w-[360px] xl:h-[38px] pl-[10px] lg:placeholder:ml-[50px] border-b focus:outline-[#008a00] focus:rounded-lg bg-transparent"
            />
            {eye ? (<FaEyeSlash onClick={toggleVisibility} className="absolute right-[0px] top-[0px]" />) : (<FaEye onClick={toggleVisibility} className="absolute right-[0px] top-[0px]" />)}
             {errors.password && <p className="text-red-500">{errors.password.message}</p>} 
           
          </div>
          <Buttoncomponent
            className={"xl:w-[347px] xl:h-[30px] w-[250px] h-[30px] border-[1px] rounded-[10px] bg-[#008a00] text-white"}
            name={"sign in"}
          />
            
            <p></p>
            
                      <div className="flex flex-col mt-[0px] gap-[5px]">
            <p className="font-trial">Forgot your password? {"\u00A0\u00A0\u00A0"} <ImShocked className="inline fill-[#a52a2a]" />{"\u00A0"} <Link to='/signup' className="text-[#00802fc6]">click here</Link></p>
            <p className="text-black font-trial">No account? No problem {"\u00A0"}<FaRegFaceSmileBeam className="inline fill-[#a52a2a]" />{"\u00A0\u00A0\u00A0"}<Link to='/farmer/signup' className="inline text-[#008051c6]">click here</Link></p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
