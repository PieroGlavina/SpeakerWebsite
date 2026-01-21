import React from 'react'
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Hero = () => {

    useGSAP(() => {

        const heroTl = gsap.timeline();

        heroTl.fromTo("#hero-video", {opacity: 0, y:30}, {opacity:1 , y:0, duration:1, ease: "power2.out", delay:0.2})
        heroTl.fromTo("#hero-title", {opacity: 0, y:30}, {opacity:1 , y:0, duration:0.5, ease: "power2.inOut", delay:2})
        heroTl.fromTo("#hero-description", {opacity: 0, y:30}, {opacity:1 , y:0, duration:0.5, ease: "power2.inOut"})
        heroTl.fromTo("#hero-button", {opacity: 0, y:30}, {opacity:1 , y:0, duration:0.5, ease: "power2.inOut"})

    }, [])



    return (
        <section className="relative w-full h-screen overf/**/low-hidden bg-white">

            <div className="absolute inset-0 z-0">
                <img
                    src="/images/Document.png"
                    alt="Background Texture"
                    className="w-full h-full object-cover"
                />
            </div>

{/*          <div className="absolute inset-0 flex items-center justify-center z-0">
                <h1 className="text-[30vw] font-above leading-none opacity-30 whitespace-nowrap text-amber-900">
                    AURIX
                </h1>
            </div>*/}

            <div className="absolute inset-0 z-10 w-full h-full" id="hero-video">
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

                    <div className="hidden md:block"></div>

                    <div className="flex flex-col justify-center px-8 md:px-16 gap-5">
                        <h2 className="text-5xl md:text-7xl font-bold text-yellow-900" id="hero-title">
                            AURIX A700 Mk II
                        </h2>

                        <p className="mt-6 text-xl max-w-md" id="hero-description">
                            Experience the next evolution of sound.
                            Precision engineering meets auditory perfection.
                        </p>

                        <a className="mt-24" id="hero-button">
                            <div className="w-2/3 border-2 p-3 flex items-center justify-center text-yellow-900 border-yellow-900 rounded-2xl cursor-pointer hover:bg-yellow-900 hover:text-white transition-all">
                                <p className="text-lg">Discover more of it!</p>
                            </div>
                        </a>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero