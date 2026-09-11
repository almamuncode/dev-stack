import { useState } from "react";
import logo from "../assets/logo-text.png";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative flex h-16 items-center justify-between lg:h-20">
          <button
            className="btn btn-ghost btn-square lg:hidden"
            type="button"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>

          <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
            <img className="w-24 sm:w-32" src={logo} alt="Dev Stack" />
          </div>

          <div className="hidden lg:block">
            <ul className="flex gap-7">
              {navLinks.map((link) => <li key={link}>{link}</li>)}
            </ul>
          </div>

          <div className="flex gap-1.5 sm:gap-3 lg:gap-5">
            <button className="btn btn-sm rounded-full px-2 text-xs sm:btn-md sm:px-4 sm:text-base">Sign In</button>
            <button className="btn btn-sm rounded-full bg-dev-gradient px-2 text-xs text-white sm:btn-md sm:px-4 sm:text-base">Sign Up</button>
          </div>

        </div>
        {isMenuOpen && (
          <div className="border-t border-slate-200/60 py-3 lg:hidden">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link}>
                  <button
                    className="w-full rounded-lg px-3 py-2 text-left hover:bg-slate-100"
                    type="button"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
