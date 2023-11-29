import React from 'react'
import './Contact.css'
import { GrLocation } from "react-icons/gr";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import ContactForm from './Contactfom';
import Footer from '../Footer/Footer';
import { FaAnglesRight } from "react-icons/fa6";
const Contact = () => {
  return (
    <div>
        <div className="contactContainer">
            <div className="conatctbanner">
                <div className='bannerinfo'>
                    <h2>Contact Us</h2>
                    <p>Lorem ipsum dolor sit, laboriosam explicabo autem eaque doloribus molestiae cupiditate delectus, laborum sequi.</p>
                    <div className='bannerbtn'>
                        <button>Home <FaAnglesRight style={{paddingTop:'3px'}}/> Contact Us</button>
                    </div>
                </div>
            </div>
            <div className="contactinfo">
                <div className="cileft">
                    <h2>Let's Start<br/> Somthing Great!</h2>
                    <p>Lorem, ipsum dolor sit amet doloribus natus voluptas vitae. Iusto ullam neque veniam.</p>
                    <div className="cinfocards">
                        <div className="ccardleft">
                            <GrLocation size={'1.3rem'} color='white'/>
                        </div>
                        <span>Akshya Nagar 1st Block 1st Cross,<br/>Rammurthy Nagar,<br/>Bangalore-560016</span>
                        
                    </div>
                    <div className="cinfocards">
                        <div className="ccardleft" >
                            <IoIosPhonePortrait size={'1.3rem'} color='white'/>
                        </div>
                        <span className='exep'>+91 12345 67890</span>
                        
                    </div>
                    <div className="cinfocards">
                        <div className="ccardleft">
                            <MdOutlineMailOutline size={'1.3rem'} color='white'/>
                        </div>
                        <span className='exep'>info@company.com</span>
                    </div>
                </div>
                <div className="ciright">
                    <ContactForm/>
                </div>
            </div>
            <div className="contactgeolocation">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6681.037167472148!2d77.6719401449427!3d13.007335406976399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1127362c7a41%3A0xd631c07f4cf40dc1!2s1st%20Cross%20Rd%2C%20Ramamurthy%20Nagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1701153107856!5m2!1sen!2sin" width="100%" height="300" style={{border:"0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allow='*'></iframe>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact