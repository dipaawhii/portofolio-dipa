import React from 'react'
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    //  <!-- Footer -->
   <footer
        className="py-8 text-center border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md">
        <div className="container mx-auto px-6">
            <p className="text-slate-600 dark:text-slate-400 font-medium text-sm flex justify-center items-center gap-1">
                &copy; <span>2026</span>Clara. Built with<FaHeart className=" text-primary"/>   using TailwindCSS & Vanilla JS.
            </p>
        </div>
    </footer>
  )
}

export default Footer
