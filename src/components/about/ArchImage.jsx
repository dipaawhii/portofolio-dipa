import React from 'react'
import { FaCode, FaPalette } from 'react-icons/fa'
import { FaWandMagicSparkles } from 'react-icons/fa6'

const ArchImage = () => {
  return (
   <div className="md:w-5/12 w-full flex justify-center reveal">
                    <div className="relative w-64 md:w-72 h-80 md:h-112 tilt-element group">
                        <div className="absolute inset-0 border border-softBlue rounded-t-full translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
                        <div className="absolute inset-0 arch-shape overflow-hidden shadow-2xl tilt-content glass p-2">
                            <img src="./../../public/about.jpeg" alt="Aurelia Portrait" className="w-full h-full object-cover arch-shape filter grayscale-30 group-hover:grayscale-0 transition-all duration-700"/>
                        </div>
                        
                        {/* <!-- Badges --> */}
                        <div className="absolute -left-10 top-1/4 glass px-4 py-2 rounded-2xl shadow-xl flex items-center gap-3 animate-float tilt-content z-10 border border-white/50">
                            <FaPalette className=" text-lg text-primary"/>
                            <div className="text-left hidden sm:block"><p className="text-xs font-bold text-textMain dark:text-white">Graphic Design</p></div>
                        </div>
                        <div className="absolute -right-8 top-1/2 glass px-4 py-2 rounded-2xl shadow-xl flex items-center gap-3 animate-float-delay-1 tilt-content z-10 border border-white/50">
                            <div className="text-right hidden sm:block"><p className="text-xs font-bold text-textMain dark:text-white">UI/UX Design</p></div>
                            <FaWandMagicSparkles  className=" text-lg text-softBlue"/>
                        </div>
                        <div className="absolute -left-4 bottom-16 glass px-4 py-2 rounded-2xl shadow-xl flex items-center gap-3 animate-float-delay-2 tilt-content z-10 border border-white/50">
                            <FaCode className=" text-lg text-[#38B2AC]"/>
                            <div className="text-left hidden sm:block"><p className="text-xs font-bold text-textMain dark:text-white">Front-End</p></div>
                        </div>
                    </div>
                </div>
  )
}

export default ArchImage
