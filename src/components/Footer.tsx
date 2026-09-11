import React from 'react';
import logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <div className='mt-30'>
            <div className="divider"></div>
            <footer className="container mx-auto footer sm:footer-horizontal text-base-content p-10">
            <div>
                <img src={logo} alt="" />
                <p>
                    Curated tools, technologies, and resources <br /> for developers building
                    modern software.
                </p>
            </div>
            <div>
                <h3 className="font-semibold">PRODUCT</h3>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Technologies</a>
                <a className="link link-hover">Projects</a>
            </div>
            <div>
                <h3 className="font-semibold">COMPANY</h3>
                <a className="link link-hover">About</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Careers</a>
            </div>
            <div>
                <h3 className="font-semibold">LEGAL</h3>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Terms of Service</a>
            </div>
        </footer>
        <div className="divider"></div>
        <div className='flex justify-between container mx-auto mb-5'>
            <div><p className='text-sm text-gray-500'>© 2026 Dev Stack. All rights reserved.</p></div>
            <div className='text-sm text-gray-500 flex gap-5'>
                <a className="link link-hover">Privacy</a>
                <a className="link link-hover">Terms</a>
            </div>
        </div>
        </div>
    );
};

export default Footer;