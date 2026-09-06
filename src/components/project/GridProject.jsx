import React from 'react'
import { projectData } from '../../data/projectData'

const GridProject = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projectData.map((projectData, index) =>
                <div className="group reveal cursor-pointer tilt-element" key={index}>
                    <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden mb-6 tilt-content border border-white/40 shadow-sm">
                        <img src={projectData.img} alt="Project 1" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-creamDark/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center text-textMain transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            <projectData.icon className="-rotate-45" />
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-2 mb-3">
                            {projectData.category.map((item, index) => (

                                <span className={`text-xs font-medium ${item.style} px-3 py-1 rounded-full`} key={index}>{item.name}</span>
                            ))}
                        </div>
                        <h4 className="text-2xl font-serif font-bold mb-2 text-textMain dark:text-white group-hover:text-primary transition-colors" data-i18n="proj1Title">{projectData.nameApp}</h4>
                        <p className="text-gray-700 dark:text-gray-400 font-light" data-i18n="proj1Desc">{projectData.deskripsi}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default GridProject
