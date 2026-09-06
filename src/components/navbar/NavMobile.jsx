import React from 'react'
import { navList } from '../../data/navList'

const NavMobile = ({ openNavMobile }) => {
    return (

        <div className={`fixed inset-0 w-full h-full dark:bg-darkBg/95   flex flex-col items-center justify-center text-2xl space-y-6 duration-300 transition-transform ${openNavMobile ? 'translate-x-0' : 'translate-x-full'}`}>
            {navList.map(navList =>
                <a href={navList.id} className="font-serif italic dark:text-white hover:text-primary transition-colors" data-i18n="navBio" key={navList.id}>{navList.label}</a>
            )}

        </div>
    )
}

export default NavMobile
