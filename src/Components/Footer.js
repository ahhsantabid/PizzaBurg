import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import '../Style/FooterStyle.css'






const Footer = () => {
  return (
    <>
    
    <div className="navbar">
        <div className="icons">
            <div className="icon">
            <BsInstagram className='footerIcon'/>
            <BsFacebook className='footerIcon'/>
            <BsLinkedin className='footerIcon'/>
            <MdEmail className='footerIcon'/>
            </div>
        </div>
        <div className="address"><p>Branch: Mirpur 1,Edgah math</p>
    <p>Phone: 015896321455</p></div>
    <div className="copyright"><p>All Reserved copy&2022</p><p>Website made by @ahhsanTabid</p></div>

    </div>
   
    
    
    </>
  )
}

export default Footer