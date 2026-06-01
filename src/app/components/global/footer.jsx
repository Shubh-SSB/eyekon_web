import React from 'react'

const Footer = () => {
    return (
        <footer className="relative z-10 flex items-center justify-center text-sm text-black/80">
            <div className="absolute left-6 -top-6 h-px w-14 bg-white/60 sm:left-10" />
            <div className="absolute left-10 -top-10 h-14 w-px bg-white/60 sm:left-12" />
            <div className="absolute -top-6 h-px w-32 bg-white/60 sm:w-44" />
            <div className="absolute right-6 -top-6 h-px w-14 bg-white/60 sm:right-10" />
            <div className="absolute right-10 -top-10 h-14 w-px bg-white/60 sm:right-12" />
            <div className="flex w-full max-w-6xl flex-col gap-8 rounded-t-xl bg-white px-6 py-8 md:flex-row md:justify-between">
                <div className="flex-1">
                    <p className="mb-4 text-4xl font-kalam text-black sm:text-6xl lg:text-8xl">EYEKON-AI</p>
                    <p className="max-w-md text-base leading-tight text-black/60 sm:text-lg">
                        Human-first computer vision for healthier focus. Built to
                        protect attention, reduce fatigue, and guide better habits.
                    </p>
                </div>
                <div className="grid gap-6 text-black/70 md:grid-cols-3">
                    <div>
                        <p className="text-md uppercase tracking-[0.3em] text-black/50">Quick Links</p>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li>Home</li>
                            <li>Features</li>
                            <li>Products</li>
                            <li>About</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-md uppercase tracking-[0.3em] text-black/50">Resources</p>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li>Docs</li>
                            <li>Publications</li>
                            <li>Security</li>
                            <li>Integrations</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-md uppercase tracking-[0.3em] text-black/50">Company</p>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li>Careers</li>
                            <li>Contact</li>
                            <li>Press</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer
