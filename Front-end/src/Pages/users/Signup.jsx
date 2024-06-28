  import React, { useState ,lazy} from "react";
  import { Link } from 'react-router-dom';
  import axios from "axios"
  import api from "./../../instance/axiosinstance"
  import Swal from 'sweetalert2';
  import { useNavigate } from "react-router-dom";

  import { Formik, Form, Field, ErrorMessage } from "formik";
  import { FaEye, FaEyeSlash } from "react-icons/fa";
  import Buttoncomponent from "./../../components/buttoncomponent";
  import mainlogo from "./../../assets/loginsignup/plant-a-tree.png";
  import handfarmer from "./../../assets/loginsignup/landlord.jpg";
  import handfarmer1 from "./../../assets/loginsignup/handfarmer.jpg";
  import bgimage from "./../../assets/loginsignup/bg.jpg";
  import rice from "./../../assets/loginsignup/rice.jpg";
  import grape1 from "./../../assets/loginsignup/grape1.jpg"
  import grape2 from "./../../assets/loginsignup/grape2.jpg"

  import * as Yup from "yup";

  import { GiFarmer } from "react-icons/gi";

  const Signup = () => {
    const [eye, setEye] = useState(true);

    const toggleVisibility = () => {
      setEye(prevEye => !prevEye);
    };


  const navigate=useNavigate()
    const SignupSchema = Yup.object().shape({
  username:Yup.string().required('username is required'),
  fullname:Yup.string().required('Full name is required'),
  email:Yup.string().email('Invalid email').required('email is required'),
  password: Yup.string()
  .min(8, 'Password must be at least 8 characters long')
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
    "Password must contain at least one letter, one number, and one special character"
  )
  .required('Password is required'),
  confirmPassword:Yup.string().oneOf([Yup.ref('password'),null],'password doesnt match').required('Confirm Password is required'),





    })

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
            <Formik
            initialValues={{

  username:"",
  fullname:"",
  email:"",
  password:"",
  confirmPassword:""


            }}

  validationSchema={SignupSchema}
  onSubmit={async (values,{setSubmitting ,resetForm})=>{
  console.log(values);
  try{
  const response = await api.post("/auth/farmer/signup",values)
  console.log(response)

  if(response.status==201){
  Swal.fire({

    icon:"success",
    title:"Success",
    text:"user registration is done "
  })
  .then(()=>{

  resetForm()
    navigate('/farmer/signup/otp')
  })

  }else{


    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: response,
    })



  }




  }catch(error){
console.log(error)

    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: "something unexpected error" ,
    })

  }







  // setSubmitting(false)


  }}
  >


  {({isSubmitting})=>(
            <Form className="flex flex-col gap-4 p-3 xl:p-0 ">
              <div>
                    <Field type="text" name="username" placeholder="Username" className="input-field border-b-2 border-gray-300 focus:outline-none focus:border-green-700 transition duration-200  w-full" />
                    <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div>
                    <Field type="text" name="fullname" placeholder="Full Name" className="input-field border-b-2 border-gray-300 focus:outline-none focus:border-green-700 transition duration-200 w-full"  />
                    <ErrorMessage name="fullname" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div>
                    <Field type="email" name="email" placeholder="Email" className="input-field border-b-2 border-gray-300 focus:outline-none focus:border-green-700 transition duration-200 w-full" />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className="relative">
                    <Field type={eye ? "password" : "text"} name="password" placeholder="Password" className="input-field border-b-2 border-gray-300 focus:outline-none focus:border-green-700 transition duration-200 w-full pr-10" />
                    {eye ? (
                      <FaEyeSlash onClick={toggleVisibility} className="absolute right-2 top-2 cursor-pointer text-gray-500" />
                    ) : (
                      <FaEye onClick={toggleVisibility} className="absolute right-2 top-2 cursor-pointer text-gray-500" />
                    )}
                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div>
                    <Field type="password" name="confirmPassword" placeholder="Confirm Password" className="input-field border-b-2 border-gray-300 focus:outline-none focus:border-green-700 transition duration-200 w-full" />
                    <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
                  </div>
                  <Buttoncomponent type="submit" className="w-full h-10 border border-green-700 rounded-lg bg-green-700 text-white font-semibold mt-4" name="Sign Up" disabled={isSubmitting} /> 
            </Form>
        
          )}
            </Formik>
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
