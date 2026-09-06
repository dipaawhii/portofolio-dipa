import React, { useState } from 'react'
import { FaMagnifyingGlassPlus, FaXmark } from "react-icons/fa6";
import { CertificatesData } from '../../data/certificatesData';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openCertificate = (certificate) => setSelectedCertificate(certificate);
  const closeCertificate = () => setSelectedCertificate(null);

  return (
    <>
      <section id="certificates" className="py-24 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 reveal">
            <h2 className="text-sm font-bold tracking-widest text-softBlue uppercase mb-2" data-i18n="certSub">CERTIFICATIONS</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-textMain dark:text-white" data-i18n="certTitle">
              Learning <span className="italic text-primary">Achievements</span>
            </h3>
            <p className="text-gray-700 dark:text-gray-400 mt-4 font-light" data-i18n="certDesc">A collection of certifications and training experiences that have contributed to my personal and professional development.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CertificatesData.map((certificate) => (
              <div
                key={certificate.nama}
                className="glass p-3 rounded-4xl reveal group tilt-element cursor-pointer border border-white/60 shadow-sm"
                onClick={() => openCertificate(certificate)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openCertificate(certificate);
                  }
                }}
              >
                <div className="overflow-hidden rounded-3xl relative tilt-content aspect-4/3 bg-white">
                  <img
                    src={certificate.img}
                    alt={certificate.nama}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(event) => {
                      event.target.src = 'https://placehold.co/900x600/B4C6DF/FFF?text=Certificate';
                    }}
                  />
                  <button
                    type="button"
                    className="absolute inset-0 bg-textMain/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center"
                    onClick={(event) => {
                      event.stopPropagation();
                      openCertificate(certificate);
                    }}
                  >
                    <FaMagnifyingGlassPlus className="text-3xl text-white mb-2" />
                    <span className="text-white font-medium" data-i18n="viewCert">View </span>
                  </button>
                </div>
                <div className="p-5 text-center tilt-content">
                  <h4 className="font-bold text-lg text-textMain dark:text-white mb-1">{certificate.nama}</h4>
                  <p className="text-sm text-gray-500 font-medium">{certificate.penerbit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
          onClick={closeCertificate}
        >
          <div
            className="relative w-full max-w-3xl rounded-[2rem] border border-white/20 bg-white p-4 shadow-2xl dark:bg-slate-900"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeCertificate}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg transition hover:scale-105"
              aria-label="Close certificate"
            >
              <FaXmark className="text-lg" />
            </button>

            <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
              <img
                src={selectedCertificate.img}
                alt={selectedCertificate.nama}
                className="w-full max-h-[70vh] object-contain"
                onError={(event) => {
                  event.target.src = 'https://placehold.co/900x600/B4C6DF/FFF?text=Certificate';
                }}
              />
            </div>

            <div className="mt-4 text-center">
              <h4 className="text-xl font-bold text-textMain dark:text-white">{selectedCertificate.nama}</h4>
              <p className="mt-1 text-sm font-medium text-gray-500">{selectedCertificate.penerbit}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Certificates
