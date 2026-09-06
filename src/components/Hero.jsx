import React, { useEffect, useRef } from 'react'
import { FaArrowRight, FaCircle } from 'react-icons/fa'

const Hero = () => {
    const heroRef = useRef(null)

    useEffect(() => {
        if (!heroRef.current) return
        const revealItems = heroRef.current.querySelectorAll('.reveal')
        revealItems.forEach((item, index) => {
            window.setTimeout(() => item.classList.add('active'), 100 * (index + 1))
        })
    }, [])

    return (
        <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                <div className="reveal">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-sm font-medium mb-8 text-textMain dark:text-white shadow-sm border border-softBlue/30">
                        <FaCircle className="text-softBlue animate-pulse text-[0.65rem]" />
                        <span data-i18n="heroBadge">Available for Work</span>
                    </div>
                </div>

                <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif font-bold tracking-tighter leading-none mb-6 reveal hover-trigger group" style={{transitionDelay: "100ms"}}>
                    <span className="block text-textMain dark:text-white transition-colors group-hover:text-softBlue">Dipa</span>
                    <span className="block italic font-light text-primary -mt-2 md:-mt-6 text-4xl md:text-7xl" data-i18n="heroTitle">Turning Ideas into Meaningful Results</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl font-light mb-10 reveal" style={{transitionDelay: "200ms"}} data-i18n="heroDesc">
                 Passionate about  <span className="font-medium text-textMain dark:text-white">learning, creativity, and continuous growth</span>. I enjoy transforming ideas into practical solutions, embracing new challenges, and contributing through meaningful work and collaboration.
                </p>

                <div className="flex flex-wrap gap-6 justify-center reveal" style={{transitionDelay: "300ms"}}>
                    <a href="#projects" className="group relative px-8 py-4 bg-textMain dark:bg-white text-cream dark:text-textMain rounded-full font-medium overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
                        <div className="absolute inset-0 w-full h-full bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                        <span className="relative z-10 flex items-center gap-3"><span data-i18n="heroBtn">Explore My Work</span> <FaArrowRight className="transform group-hover:translate-x-1 transition-transform"/></span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
