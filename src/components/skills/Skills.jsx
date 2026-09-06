import React from 'react'
import { skillData } from '../../data/skillData'

const Skills = () => {
    return (
        <section id="skills" className="reveal py-28 px-4 relative overflow-hidden bg-transparent">

            {/* CSS Khusus untuk animasi melayang berkelanjutan (Floating) */}
            <style dangerouslySetInnerHTML={{
                __html: `
          @keyframes float-skill {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .animate-float-skill {
            animation: float-skill 5s ease-in-out infinite;
          }
        `}} />

            {/* Aesthetic Background Bubbles (Efek Gelembung Kaca) */}
            <div className="absolute top-20 left-[10%] w-32 h-32 bg-linear-to-br from-white to-white/20 dark:from-white/10 dark:to-transparent rounded-full blur-sm border border-white/40 shadow-[0_10px_30px_rgba(0,0,0,0.05)] animate-float-skill pointer-events-none" style={{ animationDelay: '0s', animationDuration: '7s' }}></div>
            <div className="absolute bottom-20 right-[15%] w-48 h-48 bg-linear-to-br from-pink-100/50 to-purple-100/50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-full blur-md border border-white/50 shadow-[0_10px_40px_rgba(236,72,153,0.1)] animate-float-skill pointer-events-none" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-white/30 dark:bg-slate-900/30 rounded-[100%] blur-[100px] pointer-events-none -z-10"></div>

            <div className="container mx-auto max-w-5xl text-center relative z-10">

                {/* Header Area yang Elegan */}
                <div className="inline-flex items-center justify-center mb-6 relative">
                    <span className="absolute inset-0 bg-linear-to-r from-pink-300 to-indigo-300 opacity-40 blur-xl rounded-full"></span>
                                        <div className="relative px-6 py-2.5 bg-white/80 dark:bg-slate-800/80 rounded-full backdrop-blur-md border border-white dark:border-slate-700 shadow-[0_8px_20px_rgba(0,0,0,0.04)] flex items-center gap-2">
                                                                    <span className="w-4 h-4 text-pink-500">✨</span>
                                        <h2 className="text-sm font-extrabold tracking-widest text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-indigo-500 uppercase" data-i18n="skillSub">
                            MY TOOLKIT

                        </h2>
                                                    <span className="w-4 h-4 text-indigo-500">✨</span>
                    </div>
                </div>

                <h3 className="text-4xl md:text-6xl font-serif font-extrabold text-slate-800 dark:text-slate-100 mb-20 drop-shadow-sm" data-i18n="skillTitle">
                    Skills <span className="italic text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 relative">
                        & Tools
                        {/* Garis bawah melengkung dekoratif */}
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-pink-400 opacity-70" viewBox="0 0 100 20" preserveAspectRatio="none">
                            <path d="M0 10 Q 50 20 100 10" fill="transparent" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                    </span>
                </h3>

                <div className="flex flex-wrap justify-center gap-4 md:gap-6 px-2">
                    {skillData.map((skill, index) => (
                        <div
                            className={`
                    reveal bg-white/70 dark:bg-slate-800/60 backdrop-blur-xl px-5 py-3.5 md:px-7 md:py-4 
                    rounded-full flex items-center gap-3 md:gap-4 cursor-pointer group animate-float-skill
                    border border-white dark:border-slate-600/50
                    shadow-[0_8px_25px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_25px_rgba(0,0,0,0.2)]
                    transition-all duration-500 ease-out
                    hover:-translate-y-3 hover:scale-110 hover:border-white dark:hover:border-slate-500
                    hover:bg-white dark:hover:bg-slate-700
                    ${skill.bgGlow} hover:shadow-2xl
                  `}
                            style={{ animationDelay: `${index * 80}ms` }}
                            key={index}
                        >
                            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 group-hover:bg-white dark:group-hover:bg-slate-800 shadow-inner transition-colors duration-500">
                                <skill.icon
                                    className={`w-5 h-5 md:w-6 md:h-6 text-slate-500 dark:text-slate-400 transition-all duration-500
                                    group-hover:scale-125 group-hover:-rotate-12 ${skill.color}`}
                                    strokeWidth={2}
                                />
                            </div>

                            <span className="font-bold text-sm md:text-base text-slate-700 dark:text-slate-200 tracking-wide group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
