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
                className="absolute inset-0 m-4 bg-[url('/Images/Brown-eye.png')] bg-cover bg-center sm:m-8"
            />
            <div
                aria-hidden="true"
                className="absolute inset-0 m-3 bg-linear-to-l from-neutral-800/40 to-neutral-900/80 sm:m-9"
            />
            <div className="relative z-10 flex min-h-[calc(100vh-2rem)] flex-col justify-between p-4 sm:p-0">
                <div className="flex justify-end sm:absolute sm:right-12 sm:top-12">
                    <div className="rounded-full backdrop-blur-sm">
                        <Download />
                    </div>
                </div>
                <div className="mt-16 flex max-w-xl flex-col items-start justify-center rounded-2xl bg-black/40 p-4 text-white backdrop-blur-sm sm:absolute sm:bottom-0 sm:left-12 sm:mt-0 sm:max-w-2xl sm:bg-transparent sm:p-4 sm:backdrop-blur-none">
                    <h1 className="mb-4 text-2xl font-bold font-bodoni leading-tight sm:text-5xl">
                        Your Eyes <span className="text-orange-400">Never</span> Stop Working. Neither Do{" "}
                        <span className="text-orange-400">We.</span>
                    </h1>
                    <p className="mb-4 max-w-lg text-sm leading-6 sm:mb-10 sm:text-xl">
                        Advanced computer vision analyzes fatigue, focus, and visual
                        wellness in real time to help you work smarter and healthier.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
