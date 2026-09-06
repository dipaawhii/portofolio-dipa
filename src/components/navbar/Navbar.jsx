import React from 'react'
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import { FaBarsStaggered, FaX, FaXmark } from "react-icons/fa6";
import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";


const Navbar = ({ isDark, toggle, navMobileToggle, openNavMobile }) => {
    return (
        <div className="fixed w-full z-50 top-6 px-4 flex justify-center pointer-events-none">
            <nav id="navbar" className="pointer-events-auto glass rounded-full px-8 py-3 flex justify-between items-center gap-6 md:gap-8 shadow-lg transition-all duration-300">
                <Logo/>

                <DesktopMenu isDark={isDark} toggle={toggle} />


                <div className="lg:hidden flex items-center gap-4">
                    {/* <button id="langToggleMobile" className="text-xs font-bold text-textMain dark:text-white hover:text-primary">ID</button> */}
                    <button id="themeToggleMobile" className="text-black dark:text-white hover:text-pink-500 dark:hover:text-pink-500 hover:rotate-45 transition-all duration-300" onClick={toggle}>
                        {isDark ? (<FaSun className="text-lg" />) :
                            (<FaMoon className="text-lg" />)}
                    </button>
                    <button id="mobileMenuBtn" className="text-textMain dark:text-white text-xl focus:outline-none" onClick={navMobileToggle}>
                        {
                            openNavMobile ? (<FaXmark />) :
                                <FaBarsStaggered />
                        }
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
