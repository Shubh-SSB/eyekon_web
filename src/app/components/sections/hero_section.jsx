import React from 'react'
import Download from '../buttons/download';

const HeroSection = () => {
    return (
        <div className="relative min-h-[calc(100vh-2rem)] w-full">
            <div className="absolute left-8 top-0 h-full w-px bg-white/40" />
            <div className="absolute right-8 top-0 h-full w-px bg-white/40" />

            <div className="absolute top-8 left-0 h-px w-full bg-white/40" />
            <div className="absolute bottom-8 left-0 h-px w-full bg-white/40" />
            <div
                aria-hidden="true"
                className="absolute inset-0 m-4 bg-[url('/Images/brown-eye.png')] bg-cover bg-center sm:m-8"
            />
            <div
                aria-hidden="true"
                className="absolute inset-0 m-4 bg-linear-to-l from-neutral-800/40 to-neutral-900/80 sm:m-9"
            />
            <div className="absolute right-6 top-6 z-10 rounded-full backdrop-blur-sm sm:right-12 sm:top-12">
                <Download />
            </div>
            <div className="absolute bottom-6 left-6 z-10 flex max-w-xl flex-col items-start justify-center rounded-2xl bg-transparent p-4 text-white sm:bottom-0 sm:left-12 sm:max-w-2xl">
                {/* Hero content goes here */}
                <h1 className="mb-4 text-3xl font-bold font-bodoni sm:text-5xl">
                    Your Eyes <span className='text-orange-400'>Never</span> Stop Working. Neither Do <span className='text-orange-400'>We.</span>
                </h1>
                <p className="mb-8 max-w-lg text-base sm:mb-10 sm:text-xl">
                    Advanced computer vision analyzes fatigue, focus, and visual
                    wellness in real time to help you work smarter and healthier.
                </p>
            </div>
        </div>
    )
}

export default HeroSection;
