import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Adminrouter from "./router/Adminrouter"
import Userrouter from  "./router/userrouter"



function App() {
  return(
<>



<BrowserRouter>
<Routes>

<Route path="/admin/"  element={<Adminrouter/>} />
<Route path="/*"  element ={<Userrouter/>}/>



</Routes>


</BrowserRouter>

</>
  )
  
}

export default App
