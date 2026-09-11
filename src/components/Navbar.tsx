import React from "react";
import logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          
          <div>
            <img src={logo} alt="Dev Stack" />
          </div>

          <div>
            <ul className="flex gap-7">
              <li>Home</li>
              <li>Technologies</li>
              <li>Projects</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="flex gap-5">
            <button className="btn rounded-full">Sign In</button>
            <button className="btn rounded-full bg-dev-gradient text-white">Sign Up</button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
