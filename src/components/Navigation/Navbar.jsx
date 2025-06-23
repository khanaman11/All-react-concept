import React from 'react'
import "./Navbar.css"
import logo from "../../../public/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='header'>
      <div className="logo-cnt">
        <img src={logo} alt="" width={60} />
        <h3>MyBook</h3>
      </div>
      <div className='nav-link'>
        <Link to="/">Home</Link> 
        <Link to="/about">About us</Link> 
        <Link to="/contact">Contact us</Link>
        <Link to="/services">Services</Link>
      </div>
      <div className="nab-btn-cnt">
        <Link to="" className='login-btn'>Long in</Link> 
        <Link to="" className='signup-btn'>Sign up</Link>
      </div>
    </div>

  )
}

export default Navbar