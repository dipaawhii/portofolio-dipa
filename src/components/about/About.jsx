import { FaCode, FaPalette } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";


import React from 'react'
import ArchImage from "./ArchImage";
import ContentAbout from "./ContentAbout";

const About = () => {
  return (
    <section id="about" className="bg-cream dark:bg-transparent  py-24 px-6 relative">
        <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col md:flex-row gap-16 items-center">
                {/* <!-- Arch Image --> */}
                <ArchImage/>

                {/* <!-- Text Content --> */}
                <ContentAbout/>
            </div>
        </div>
    </section>
  )
}

export default About
