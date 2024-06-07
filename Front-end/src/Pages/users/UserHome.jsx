import React from 'react'
import Footer from "./../../components/loginfooter"
import Header from '../../components/Header'
import {Outlet} from "react-router-dom"


function UserHome() {
  return (
    <div>
      <Header/>

<div className="middleone">
 <Outlet/>


</div>

<Footer/>



    </div>
  )
}

export default UserHome
