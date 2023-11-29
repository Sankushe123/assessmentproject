// src/ContactForm.js
import React from "react";
import './Conatctform.css'
import { LuUser2 } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { SlTag } from "react-icons/sl";
import { LuPenLine } from "react-icons/lu";
function Contactform() {
  return (
    <div className="contact-form">
      <h1>Need Help?</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, repellendus?</p>
      <div className="input">
        <LuUser2  className="formicon"/>
        <input type="text" name="name" placeholder="name"/>
      </div>
      <div className="input">
        <MdOutlineMailOutline className="formicon"/>
        <input type="email" name="email" placeholder="Email" />
      </div>
      <div className="input">
        <SlTag  className="formicon"/>
        <input type="text" name="subject" placeholder="Subject" />
      </div>
      <div className="input textarea">
      <LuPenLine  className="formicon"/>
        <textarea name="message" placeholder="Your message" />
      </div>
      
      <button type="submit">SEND INQUIRY</button>
    </div>
  );
}

export default Contactform;
