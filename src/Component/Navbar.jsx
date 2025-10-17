import React from 'react';
import { NavLink } from 'react-router';
import userLogo from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between mt-5'>
           <div className=''></div>
           <div className='nav flex gap-5 text-accent'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/career'>Career</NavLink>
           </div>
           <div className='login-btn flex items-center gap-5'>
            <img src={userLogo} alt="" />
            <button className='text-white bg-primary px-10 py-2'>Login</button>
            </div> 
        </div>
    );
};

export default Navbar;