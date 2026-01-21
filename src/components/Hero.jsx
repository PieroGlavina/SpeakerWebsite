import React from 'react'

const Hero = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-white">

            <div className="absolute inset-0 flex items-center justify-center z-0">
                <h1 className="text-[30vw] font-above leading-none opacity-30 whitespace-nowrap text-amber-900/20">
                    AURIX
                </h1>
            </div>

            <div className="absolute inset-0 z-10 w-full h-full">
                <video
                    className="w-full h-full object-cover object-left"
                    playsInline
                    autoPlay
                    muted
                    disablePictureInPicture
                    poster="/images/heroPoster.png"
                >
                    <source src="/videos/heroVideo.mov" type='video/mp4; codecs="hvc1"' />
                    <source src="/videos/heroVideo.webm" type="video/webm"/>
                </video>
            </div>

            <div className="relative z-20 w-full h-full max-w-[1920px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">

                    <div className="hidden md:block "></div>

                    {/* Right Column (Text Content) */}
                    <div className="flex flex-col justify-center px-8 md:px-16 text-black">
                        <h2 className="text-5xl md:text-7xl font-bold font-above tracking-tighter">
                            AURIX <span className="text-amber-700">A700</span>
                        </h2>
                        <h3 className="text-2xl md:text-4xl font-light tracking-widest mt-2">
                            Mk II
                        </h3>
                        <p className="mt-6 text-lg max-w-md text-gray-700">
                            Experience the next evolution of sound. Precision engineering meets auditory perfection.
                        </p>

                        <button className="mt-8 px-8 py-3 bg-black text-white w-fit hover:bg-amber-700 transition-colors duration-300">
                            DISCOVER
                        </button>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero