import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { projectData } from '../../data/projectData'
import GridProject from './GridProject'

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6 relative">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
                    <div>
                        <h2 className="text-sm font-bold tracking-widest text-softBlue uppercase mb-2" data-i18n="projSub">PORTFOLIO</h2>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-textMain dark:text-white" data-i18n="projTitle">
                            Selected  <span className="italic text-primary">Projects</span>
                        </h3>
                    </div>
                </div>

                <GridProject/>
            </div>
        </section>
    )
}

export default Projects
