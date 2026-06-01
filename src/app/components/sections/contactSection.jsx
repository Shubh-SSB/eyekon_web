import React from "react";

const ContactSection = () => {
    return (
        <section
            id="contact"
            className="relative min-h-screen overflow-hidden px-6 py-24 sm:px-12"
        >
            <div className="absolute inset-0 blueprint-grid opacity-30" />
            {/* <div className="absolute -left-32 top-12 h-72 w-72 rounded-full blueprint-glow" />
            <div className="absolute -right-24 bottom-10 h-64 w-64 rounded-full blueprint-glow" /> */}

            <div className="relative mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-[1.1fr_1fr]">
                <div className="space-y-6">
                    <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                        Contact
                    </p>
                    <h2 className="font-bodoni text-4xl font-semibold text-white sm:text-5xl">
                        Let’s design healthier focus together.
                    </h2>
                    <p className="max-w-lg text-base leading-7 text-white/70">
                        Tell us about your team, your challenges, or the environment you want
                        to elevate. We’ll respond with a tailored demo and rollout plan.
                    </p>

                    <div className="space-y-3 text-sm text-white/70">
                        <div className="flex items-center justify-between border-b border-white/10 pb-2">
                            <span className="uppercase tracking-[0.3em] text-white/50">Email</span>
                            <span>contact-us@eyekon.ai</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-white/10 pb-2">
                            <span className="uppercase tracking-[0.3em] text-white/50">Schedule</span>
                            <span>Mon–Fri · 09:00–18:00</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-white/10 pb-2">
                            <span className="uppercase tracking-[0.3em] text-white/50">Location</span>
                            <span>Global · Remote-first</span>
                        </div>
                    </div>
                </div>

                <div className="blueprint-card relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6">
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 pointer-events-none bg-[url('/Images/pico-hi.png')] bg-cover bg-center opacity-40"
                    />
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 pointer-events-none bg-black/50"
                    />
                    <form className="relative">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 pointer-events-none bg-[url('/Images/contact-form-bg.jpg')] bg-contain bg-center bg-no-repeat opacity-40"
                            />
                            <div className="z-10 grid gap-4">
                                <div>
                                    <label className="text-xs uppercase tracking-[0.3em] text-white/60">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-md text-white placeholder:text-white/40 focus:border-orange-200/60 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs uppercase tracking-[0.3em] text-white/60">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="you@company.com"
                                        className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-md text-white placeholder:text-white/40 focus:border-orange-200/60 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs uppercase tracking-[0.3em] text-white/60">
                                        Message
                                    </label>
                                    <textarea
                                        rows={4}
                                        placeholder="Tell us what you want to improve"
                                        className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-md text-white placeholder:text-white/40 focus:border-orange-200/60 focus:outline-none"
                                    />
                                </div>

                                <button
                                    type="button"
                                    className="inline-flex items-center gap-2 rounded-full border border-orange-200/50 bg-orange-200/10 px-5 py-3 text-xs uppercase tracking-[0.3em] text-orange-100 transition hover:bg-orange-200/20"
                                >
                                    Send request
                                </button>
                            </div>
                        </div>

                    </form>
                </div>
            </div >
        </section >
    );
};

export default ContactSection;
