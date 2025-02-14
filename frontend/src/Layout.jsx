import React from 'react'
import {Outlet} from 'react-router-dom'
import Topnav from '../components/Navbar'




const Layout = () => {
  return (
   <>
 
<Topnav/>

   <main>
    <Outlet/>
   </main>

 
   </>
  )
}

export default Layout
