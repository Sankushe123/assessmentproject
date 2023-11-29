import React, { useState } from 'react'
import './Navbar.css'
import { IoIosPhonePortrait } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  const [isopen,setIsopen] =useState(true);
  return (
    <div>
      <div className='subnav'>
        <div className="snBox">
          <div className="snnumber">
            <div >
            <IoIosPhonePortrait size={'2.5vh'} className='icon'/>
            </div>
            <span>+91 12345 67890</span>
          </div>
          <div className="snnumber">
            <div >
            <CiMail size={'2.5vh'} className='icon'/>
            </div>
            <span>info@company.com</span>
          </div>
        </div>
      </div>
      <div className="mainnav">
        <div className="mnleft">
          <h2>LOGO</h2>
          <RxHamburgerMenu className='menu' onClick={()=>setIsopen(!isopen)}/>
        </div>
        <div className="mnright">
        {isopen && <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT US</a></li>
            <li><a href="#">SERVICES</a></li>
            <li><a href="#">TESTIMONIALS</a></li>
            <li><a href="#">BLOGS</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>}
        </div>
      </div>
    </div>
  )
}

export default Navbar