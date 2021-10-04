import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { GiOpenBook } from "react-icons/gi";
import { BiLogInCircle, BiHomeCircle } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import './NavComponents.css'
import img from '../../images/brandImage.png'
const NavComponent = () => {
    const [toggle, setToogle] = useState(false);
    const handleToggle = () => {
        setToogle(toggle => !toggle)
    }
    return (
        <>
            <nav className='nav '>
                <div className='nav-bar container mx-auto'>
                    <div className="nav-name">
                        <NavLink to='/home'><img src={img} alt="" /></NavLink>
                    </div>
                    <div className='nav-link custom-bg'>
                        <NavLink className='nav-option' to='/home'><BiHomeCircle /> <span>Home</span></NavLink>
                        <NavLink className='nav-option nav-option2' to='/service'><GiOpenBook /> <span>Service</span></NavLink>
                        <NavLink className='nav-option nav-option2' to='/about-us'><HiOutlineUserGroup /><span>About Us</span></NavLink>
                        <NavLink className='nav-option nav-option2' to='/login'><BiLogInCircle /> <span>Login</span></NavLink>
                    </div>
                </div>
            </nav>
            <nav className="mobile-nav">
                <div className='nav-bar container mx-auto'>
                    <div className="nav-name">
                        <img src={img} alt="" />
                    </div>
                    <button onClick={handleToggle} className='text-2xl toggle'><FaBars /></button>
                </div>
                <div className={`nav-link custom-bg responsive-nav ${toggle ? 'show-navs' : 'hide-navs'} `}>
                    <NavLink className='nav-option' to='/home'><BiHomeCircle /> <span>Home</span></NavLink>
                    <NavLink className='nav-option nav-option2' to='/service'><GiOpenBook /> <span>Service</span></NavLink>
                    <NavLink className='nav-option nav-option2' to='/about-us'><HiOutlineUserGroup /><span>About Us</span></NavLink>
                    <NavLink className='nav-option nav-option2' to='/login'><BiLogInCircle /> <span>Login</span></NavLink>
                </div>

            </nav>
        </>
    )
}

export default NavComponent
