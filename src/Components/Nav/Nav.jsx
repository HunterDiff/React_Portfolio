import React from 'react'
import './Nav.css'
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdOutlineChecklist } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { GrProjects } from "react-icons/gr";

import { useState } from 'react';




const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <div>
      <nav>
        <a href='#'onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome/></a>
        <a href='#About' onClick={()=> setActiveNav('#About')} className={activeNav === '#About' ? 'active' : ''} ><FaUser/></a>
        <a href='#Exp' onClick={()=> setActiveNav('#Exp')} className={activeNav === '#Exp' ? 'active' : ''}><FaUserCheck/></a>
        <a href='#Services'onClick={()=> setActiveNav('#Services')} className={activeNav === '#Services' ? 'active' : ''}><MdOutlineChecklist/></a>
        <a href='#Folio' onClick={()=> setActiveNav('#Folio')} className={activeNav === '#Folio' ? 'active' : ''}><GrProjects/></a>
        <a href='#Contact'onClick={()=> setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'active' : ''}><LuPhoneCall/></a>
      </nav>
    </div>
  )
}

export default Nav