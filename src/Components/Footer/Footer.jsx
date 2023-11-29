import React from 'react'
import './Footer.css'
import { ImLinkedin2 } from "react-icons/im";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
import internet from './../../assets/internet.png'
import { GrLocation } from "react-icons/gr";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaCaretRight } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <footer class="footer">
                <div class="footer-container">
                    <div class="footer-column">
                        <div className='social-title'>
                            <h3>FOLLOW US </h3>
                            <FaCaretRight className='labelicon' />
                        </div>
                        <ul class="social-media">
                            <li><a href="#"><ImLinkedin2 color='#17478d' /></a></li>
                            <li><a href="#"><FaTelegramPlane color='#17478d' /></a></li>
                            <li><a href="#"><FaTwitter color='#17478d' /></a></li>
                        </ul>
                        <div className='internet'>
                            <img src={internet} alt="internet" />
                            <span>https://company.com</span>
                        </div>
                    </div>

                    <div class="footer-column servicesbox">
                        <div className='social-title'>
                            <h3>OUR SERVICES</h3>
                            <FaCaretRight className='labelicon' />
                        </div>
                        <ul class="services">
                            <li><a href="#"><FaAnglesRight size={'.7rem'} className='rightarrow' />Lorem ipsum dolor</a></li>
                            <li><a href="#"><FaAnglesRight size={'.7rem'} className='rightarrow' />Lorem ipsum dolar</a></li>
                            <li><a href="#"><FaAnglesRight size={'.7rem'} className='rightarrow' />Lorem ipsum dolor</a></li>
                            <li><a href="#"><FaAnglesRight size={'.7rem'} className='rightarrow' />Lorem ipsum dolar</a></li>
                            <li><a href="#"><FaAnglesRight size={'.7rem'} className='rightarrow' />Lorem ipsum dolor</a></li>
                            <li><a href="#"><FaAnglesRight size={'.7rem'} className='rightarrow' />Lorem ipsum dolar</a></li>
                            <li><a href="#"><FaAnglesRight size={'.7rem'} className='rightarrow' />Lorem ipsum dolar</a></li>
                            <li><a href="#"><FaAnglesRight size={'.7rem'} className='rightarrow' />Lorem ipsum dolar</a></li>
                        </ul>
                    </div>

                    <div class="footer-column">
                        <div className='social-title'>
                            <h3>GET IN TOUCH </h3>
                            <FaCaretRight className='labelicon' />
                        </div>
                        <ul class="footercontact">
                            <div className="fcitem">
                                <div >
                                    <GrLocation className='fcicon'/>
                                </div>
                                <span>Akshya Nagar 1st Block 1st Cross,<br />Rammurthy Nagar,<br />Bangalore-560016</span>

                            </div>
                            <hr />
                            <div className="fcitem">
                                <div >
                                    <IoIosPhonePortrait  className='fcicon'/>
                                </div>
                                <span className='exep'>Phone : +91 12345 67890</span>
                            </div>
                            <div className="fcitem">
                                <div >
                                    <MdOutlineMailOutline  className='fcicon'/>
                                </div>
                                <span className='exep'>Email : info@company.com</span>
                            </div>

                        </ul>
                    </div>


                </div>

                <div class="copyright">
                    <span>Copyright&copy; 2023, iAssureIT All Rights Reserved</span>
                    <h4>Designed & Developed By <b>iAssure International Technologies Pvt. Ltd</b></h4>
                </div>
            </footer>

        </div>
    )
}

export default Footer