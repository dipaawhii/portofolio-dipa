import React from 'react'
import { ArrowRight } from 'lucide-react'
import { contactData } from '../data/contactData'


const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden bg-transparent dark:bg-transparent min-h-[80vh] flex items-center">
      <div className="container mx-auto max-w-4xl text-center relative z-10">

        {/* Header Section */}
        <div className="mb-12 reveal">
          <h2 className="text-6xl md:text-8xl font-serif font-bold text-textMain dark:text-white mb-6 tracking-tighter" data-i18n="contactTitle">
            <span className="italic text-[#c22b64]">CONTACT</span>
          </h2>
          {/* <p className="text-xl text-gray-700 dark:text-gray-400 font-light mb-12 max-w-2xl mx-auto" data-i18n="contactDesc">
            Punya ide elegan yang ingin diwujudkan lewat desain atau kode? Saya selalu terbuka untuk diskusi kolaborasi.
          </p> */}
        </div>

        {/* Contact Links Container */}
        <div className="max-w-3xl mx-auto bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-sm border border-white/80 dark:border-gray-800 reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {contactData.map((contact, index) => {
              const Icon = contact.icon; // Render ikon sebagai komponen
              return (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-direction={index % 2 === 0 ? 'left' : 'right'}
                  style={{ transitionDelay: `${index * 80}ms` }}
                  className={`group flex items-center p-6 bg-white/80 dark:bg-gray-800/80 rounded-2xl border border-transparent transition-all duration-500 ease-out shadow-sm hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 hover:scale-[1.03] ${index % 2 === 0 ? 'hover:-rotate-1' : 'hover:rotate-1'} hover:bg-white/95 dark:hover:bg-slate-800/90 ${contact.hoverClass} reveal`}
                >
                  {/* Ikon Kiri */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#f8f9fa] dark:bg-gray-700 group-hover:bg-white dark:group-hover:bg-gray-800 flex items-center justify-center text-textMain dark:text-white transition-colors duration-300 group-hover:text-inherit border border-gray-100 dark:border-gray-700 group-hover:border-transparent">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Teks */}
                  <div className="ml-5 text-left flex-1">
                    <h3 className="text-xl font-serif font-semibold text-textMain dark:text-white group-hover:text-inherit transition-colors">
                      {contact.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-light mt-1">
                      {contact.detail}
                    </p>
                  </div>

                  {/* Panah Kanan */}
                  <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-current">
                    <ArrowRight className="w-5 h-5"/>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200/60 dark:border-gray-700/60 text-sm text-gray-400 font-light">
            Silakan pilih platform yang paling nyaman untuk Anda.
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact
