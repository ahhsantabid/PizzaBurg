import React from 'react'
import {NavLink} from 'react-router-dom'
import '../Style/NavbarStyle.css'
import { BsPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";






const Navbar = () => {
  return (
    <>
    
    <div className="navbar">
        <div className="logo">

            <NavLink to="/"><h3><span>Pizza</span>Burg</h3>
</NavLink>
        </div>
        <div className="navList">
            
                <NavLink exact to="/" className="navstyle" activeClassName='activeList'>Home</NavLink>
                <NavLink exact  to="/about" className="navstyle" activeClassName='activeList'>About</NavLink>
                <NavLink exact to="/services" className="navstyle" activeClassName='activeList'>Services</NavLink>
                <NavLink exact to="/Contact" className="navstyle"  activeClassName='activeList' >Contact</NavLink>
                <NavLink exact to="/policy" className="navstyle"  activeClassName='activeList'>Policy</NavLink>
        </div>
        <div className="icons">
            <BsPersonFill className='NavbarIcon'/>
            <BsFillTelephoneFill className='NavbarIcon'/>
            <BsSearch className='NavbarIcon'/>

        </div>
    </div>
    
    </>
  )
}

export default Navbar