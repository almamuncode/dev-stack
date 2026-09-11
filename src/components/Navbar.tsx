import React from 'react';
import logo from '../assets/logo-text.png'

const Navbar = () => {
    return (
        <div className='container mx-auto flex border-amber-200 justify-between my-4'>
            <div><img src={logo} alt="" /></div>
            <div>
                <ul className='flex gap-7'>
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='flex gap-5'>
                <button className='btn rounded-full'>Sign In</button>
                <button className='btn rounded-full bg-dev-gradient text-white'>Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;