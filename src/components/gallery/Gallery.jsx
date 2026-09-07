import React from 'react'

const Gallery = () => {
    return (
        <section id="gallery" className="py-24 px-6 relative">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16 reveal">
                    <h2 className="text-sm font-bold tracking-widest text-softBlue uppercase mb-2" data-i18n="galSub">MEMORIES </h2>
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-textMain dark:text-white" data-i18n="galTitle">
                        Journey  <span className="italic text-primary">Highlights</span>
                    </h3>
                </div>

                <div className="bento-grid">
                    {/* <!-- wisuda --> */}
                    <div className="bento-tall glass rounded-3xl overflow-hidden group reveal relative p-1">
                        <img src="/img/wisuda.jpeg" alt="Sidang Skripsi" className="w-full h-full object-cover rounded-[1.3rem] filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-textMain/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6 rounded-3xl">
                            <div>
                                <h4 className="text-white font-serif text-2xl font-bold mb-1" data-i18n="gal1Title">Wisuda</h4>
                                <p className="text-creamDark/80 text-sm" data-i18n="gal1Desc">Resmi menyandang gelar sarjana.</p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- sidang --> */}
                    <div className="bento-wide glass rounded-3xl overflow-hidden group reveal relative p-1">
                        <img src="/img/sidang2.jpeg" alt="Wisuda" className="w-full h-full object-cover rounded-[1.3rem] object-center filter grayscale-20 group-hover:grayscale-0 transition-all duration-700" />
                        <div className="absolute inset-0 bg-linear-to-t from-textMain/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6 rounded-3xl">
                            <div>
                                <h4 className="text-white font-serif text-2xl font-bold mb-1" data-i18n="gal2Title">Lulus Sidang!</h4>
                                <p className="text-creamDark/80 text-sm" data-i18n="gal2Desc">Momen berharga paska sidang akhir.</p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Yudis --> */}
                    <div className="glass rounded-3xl overflow-hidden group reveal relative p-1">
                        <img src="/img/yudis2.jpeg" alt="Magang" className="w-full h-full object-cover rounded-[1.3rem] filter grayscale-20 group-hover:grayscale-0 transition-all duration-700" />
                        <div className="absolute inset-0 bg-textMain/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm rounded-3xl">
                            <h4 className="text-white font-serif text-xl font-bold" data-i18n="gal3Title">Yudisium</h4>
                        </div>
                    </div>

                    {/* <!-- KKU --> */}
                    <div className="glass rounded-3xl overflow-hidden group reveal relative p-1">
                        <img src="/img/kku.jpeg" alt="Yudisium" className="w-full h-full object-cover rounded-[1.3rem] filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" />
                        <div className="absolute inset-0 bg-textMain/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm rounded-3xl">
                            <h4 className="text-white font-serif text-xl font-bold" data-i18n="gal4Title">KKU</h4>
                        </div>
                    </div>

                    {/* <!-- magang --> */}
                    <div className="bento-wide glass rounded-3xl overflow-hidden group reveal relative p-1">
                        <img src="/img/magang.JPEG" alt="KKU" className="w-full h-full object-cover rounded-[1.3rem] filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-textMain/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6 rounded-3xl">
                            <div>
                                <h4 className="text-white font-serif text-2xl font-bold mb-1" data-i18n="gal5Title">Magang di POLDA Kalbar</h4>
                                <p className="text-creamDark/80 text-sm" data-i18n="gal5Desc">Pengalaman berharga di lapangan.</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* <div className="bento-wide glass rounded-3xl overflow-hidden group reveal relative p-1">
                        <img
                            src="/img/himpunan.PNG"
                            alt="Buka Puasa HM-TI"
                            className="w-full h-full object-cover rounded-[1.3rem] filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-textMain/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6 rounded-3xl">
                            <div>
                                <h4 className="text-white font-serif text-2xl font-bold mb-1" data-i18n="gal6Title">
                                    Buka Puasa Bersama
                                </h4>
                                <p className="text-creamDark/80 text-sm" data-i18n="gal6Desc">
                                    Momen kebersamaan bersama Himpunan Mahasiswa Teknik Informatika.
                                </p>
                            </div>
                        </div>
                    </div>

                    
                    <div className="bento-wide glass rounded-3xl overflow-hidden group reveal relative p-1">
                        <img
                            src="/img/bukber-bsi.jpeg"
                            alt="Buka Puasa Awardee BSI Scholarship"
                            className="w-full h-full object-cover rounded-[1.3rem] filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-textMain/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6 rounded-3xl">
                            <div>
                                <h4 className="text-white font-serif text-2xl font-bold mb-1" data-i18n="gal7Title">
                                    Ramadhan Berbagi
                                </h4>
                                <p className="text-creamDark/80 text-sm" data-i18n="gal7Desc">
                                    Kegiatan buka puasa bersama para Awardee BSI Scholarship.
                                </p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Gallery
