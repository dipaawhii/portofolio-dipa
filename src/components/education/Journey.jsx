import React from 'react'

const Journey = () => {
  return (
    <section id="journey" className="py-24 px-6 relative">
        <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-20 reveal">
                <h2 className="text-sm font-bold tracking-widest text-softBlue uppercase mb-2" data-i18n="eduSub">EDUCATION</h2>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-textMain dark:text-white" data-i18n="eduTitle">
                    Academic  <span className="italic text-primary">Journey</span>
                </h3>
            </div>

            <div className="relative">
                <div className="absolute left-3.75 md:left-1/2 top-0 bottom-0 w-px bg-softBlue md:-translate-x-1/2 opacity-50"></div>

                {/* <!-- SMA --> */}
                <div className="relative flex flex-col md:flex-row justify-between items-center w-full mb-16 reveal">
                    <div className="md:w-[45%] w-full pl-12 md:pl-0 text-left md:text-right pr-0 md:pr-12">
                        <h4 className="text-xl font-bold text-textMain dark:text-white mb-1" data-i18n="edu1Title">Senior High School</h4>
                        <p className="text-primary font-medium mb-2" data-i18n="edu1Sub">SMA Negeri 1 Sungai Raya - Science Major (IPA)</p>
                    </div>
                    <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-cream dark:bg-darkBg border-4 border-softBlue transform -translate-x-0.5 md:-translate-x-1/2 flex items-center justify-center z-10">
                        <div className="w-2 h-2 bg-textMain dark:bg-white rounded-full"></div>
                    </div>
                    <div className="md:w-[45%] w-full pl-12 md:pl-12 mt-2 md:mt-0 text-gray-500 text-sm font-bold font-serif italic">2018 — 2021</div>
                </div>

                {/* <!-- Kuliah --> */}
                <div className="relative flex flex-col md:flex-row-reverse justify-between items-center w-full reveal">
                    <div className="md:w-[45%] w-full pl-12 md:pl-0 text-left pr-0 md:pr-12">
                        <h4 className="text-xl font-bold text-textMain dark:text-white mb-1" data-i18n="edu2Title">Bachelor of Informatics Engineering</h4>
                        <p className="text-primary font-medium mb-2" data-i18n="edu2Sub">Universitas Muhammadiyah Pontianak</p>
                        {/* <p className="text-sm text-gray-700 dark:text-gray-400 font-light" data-i18n="edu2Desc">Lulus dengan predikat Cumlaude. Mengasah hardskill pemrograman web sekaligus memperdalam UI/UX design.</p> */}
                    </div>
                    <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-cream dark:bg-darkBg border-4 border-softBlue transform -translate-x-0.5 md:-translate-x-1/2 flex items-center justify-center z-10">
                        <div className="w-2 h-2 bg-textMain dark:bg-white rounded-full"></div>
                    </div>
                    <div className="md:w-[45%] w-full pl-12 md:pl-0 mt-2 md:mt-0 md:pr-12 text-left md:text-right text-gray-500 text-sm font-bold font-serif italic">2021 — 2025</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Journey
