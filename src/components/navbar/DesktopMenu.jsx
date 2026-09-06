import React from 'react'
import { navList } from '../../data/navList'
import { FaMoon, FaSun } from 'react-icons/fa'

const DesktopMenu = ({ isDark, toggle }) => {
    return (
        <div className="hidden lg:flex space-x-6 items-center text-xs font-bold">
            {navList.map(navList =>
                <a href={navList.id} className="text-textMain hover:text-primary dark:text-white dark:hover:text-primary transition-colors font-bold" data-i18n="navBio" key={navList.id}>{navList.label}</a>
            )}
            <div className="w-px h-4 bg-gray-300 dark:bg-gray-700 mx-1"></div>

            {/* <!-- Language Toggle -->
                <button id="langToggleBtn" className="text-xs font-bold px-2 py-1 rounded-full text-textMain dark:text-white hover:text-primary dark:hover:text-primary transition-all">
                    ID
                </button> */}

            {/* <!-- Theme Toggle --> */}
            <button id="themeToggle" className="w-8 h-8 rounded-full flex items-center justify-center text-textMain dark:text-white hover:text-primary dark:hover:text-primary hover:rotate-45 transition-all" onClick={toggle}>
                {isDark ? (<FaSun className="text-lg" />) :
                    (<FaMoon className="text-lg" />)}
            </button>
        </div>
    )
}

export default DesktopMenu
