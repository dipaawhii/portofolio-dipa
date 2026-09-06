import React, { useEffect, useState } from 'react'
const ContentAbout = () => {
    const [isCvOpen, setIsCvOpen] = useState(false)

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setIsCvOpen(false)
            }
        }

        document.addEventListener('keydown', handleEscape)

        return () => {
            document.removeEventListener('keydown', handleEscape)
        }
    }, [])
    return (
        <div className="md:w-7/12 w-full reveal">
            <h2 className="text-sm font-bold tracking-widest text-softBlue uppercase mb-2" data-i18n="aboutSub">ABOUT ME</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-textMain dark:text-white mb-6 leading-tight" data-i18n="aboutTitle">
                Creating Value Through Learning,<span className="italic text-primary font-light"> Creativity, and Growth.</span>
            </h3>

            <div className="space-y-6 text-gray-700 dark:text-gray-300 font-light text-base">
                <p data-i18n="aboutP1">
                    Hello, I'm Dipa, an Informatics graduate with a strong interest in <strong>Technology</strong>, <strong>creativity</strong>, and  <strong>continuous learning</strong>. Throughout my academic journey and project experiences, I have developed the ability to adapt quickly, work collaboratively, and approach challenges with a solution-oriented mindset.
                </p>
                <p data-i18n="aboutP2">
                    I enjoy turning ideas into practical outcomes, whether through  <span className="font-medium text-textMain dark:text-cream">digital projects, design work, data management or team collaboration. </span>For me, every experience is an opportunity to learn, improve, and create meaningful contributions that make a positive impact.
                </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
                {/*  Lihat CV  */}
                <button
                    onClick={() => setIsCvOpen(true)}
                    className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-brandPink dark:bg-brandPinkDark text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brandPink/30 border-2 border-brandPink dark:border-brandPinkDark cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        className="mr-2.5"
                        viewBox="0 0 16 16"
                    >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>

                    Lihat CV
                </button>
                {isCvOpen && (
                    <div
                        onClick={() => setIsCvOpen(false)}
                        onWheel={(e) => window.scrollBy({ top: e.deltaY, behavior: 'auto' })}
                        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white dark:bg-gray-900 w-full max-w-4xl max-h-[calc(100dvh-2rem)] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:border-gray-800"
                        >

                            {/* Header Modal */}
                            <div className="px-4 py-3 sm:px-6 sm:py-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">

                                <div className="min-w-0">
                                    <h3 className="font-serif font-bold text-base sm:text-lg text-gray-900 dark:text-white truncate">
                                        Curriculum Vitae - Dipawhi
                                    </h3>

                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        PDF Document Preview
                                    </p>
                                </div>

                                <div className="flex items-center justify-end gap-2 sm:gap-3">

                                    {/* Download */}
                                    <a
                                        href="/CV.pdf"
                                        download="CV.pdf"
                                        className="inline-flex items-center px-3 py-2 sm:px-4 rounded-full bg-brandPink dark:bg-brandPinkDark text-white font-semibold text-xs sm:text-sm hover:opacity-90 transition-all"
                                    >
                                        Download CV
                                    </a>

                                    {/* Close */}
                                    <button
                                        onClick={() => setIsCvOpen(false)}
                                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400"
                                    >
                                        ✕
                                    </button>

                                </div>
                            </div>

                            {/* PDF */}
                            <div className="flex-1 min-h-0 p-2 sm:p-4 bg-gray-100 dark:bg-gray-950">

                                <iframe
                                    src="/CV.pdf#toolbar=0"
                                    className="w-full h-[calc(100dvh-13rem)] min-h-[20rem] sm:h-[75vh] sm:min-h-0 rounded-xl border border-gray-200 dark:border-gray-800 bg-white"
                                    title="CV Dipawhi Preview"
                                />

                            </div>

                        </div>
                    </div>
                )}
            </div>

            <div classNameName="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6">
                {/* <div className="glass p-4 rounded-2xl text-center">
                            <h4 className="text-2xl font-serif font-bold text-textMain dark:text-white mb-1">3+</h4>
                            <p className="text-xs text-gray-500 uppercase tracking-wider" data-i18n="stat1">Tahun Karier</p>
                        </div> */}
                {/* <div className="glass p-4 rounded-2xl text-center">
                            <h4 className="text-2xl font-serif font-bold text-textMain dark:text-white mb-1">20+</h4>
                            <p className="text-xs text-gray-500 uppercase tracking-wider" data-i18n="stat2">Project Ceria</p>
                        </div> */}
                {/* <div className="glass p-4 rounded-2xl text-center">
                            <h4 className="text-2xl font-serif font-bold text-textMain dark:text-white mb-1">100%</h4>
                            <p className="text-xs text-gray-500 uppercase tracking-wider" data-i18n="stat3">Dedikasi</p>
                        </div> */}
            </div>
        </div>
    )
}

export default ContentAbout
