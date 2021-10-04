import React from 'react'
import { NavLink } from 'react-router-dom';
import {GiOpenBook} from "react-icons/gi";
import {BiLogInCircle, BiHomeCircle} from "react-icons/bi";
import {HiOutlineUserGroup} from "react-icons/hi";
import {FaBars} from "react-icons/fa";
import './NavComponents.css'
import img from '../../images/brandImage.png'
const NavComponent = () => {
    return (
        <nav className='nav'>
            <div className='nav-bar container mx-auto'>
                <div className="nav-name">
                    <img src={img} alt="" />
                </div>
                <div className='nav-link custom-bg'>
                    <NavLink className='nav-option' to='/home'><BiHomeCircle/> <span>Home</span></NavLink>
                    <NavLink className='nav-option nav-option2' to='/service'><GiOpenBook/> <span>Service</span></NavLink>
                    <NavLink className='nav-option nav-option2' to='/about-us'><HiOutlineUserGroup/><span>About Us</span></NavLink>
                    <NavLink className='nav-option nav-option2' to='/login'><BiLogInCircle/> <span>Login</span></NavLink>
                </div>
                <button className='text-2xl'><FaBars/></button>
            </div>
        </nav>
    )
}

export default NavComponent
