"use client";

import React, { useEffect, useRef, useState } from "react";
import { scroll } from "motion";

const AboutSection = () => {
    const sectionRef = useRef(null);
    const revealRef = useRef(null);
    const [offsetY, setOffsetY] = useState(90);

    useEffect(() => {
        const updateOffset = () => {
            const section = sectionRef.current;
            if (!section) return;
            const rect = section.getBoundingClientRect();
            const viewportHeight = window.innerHeight || 0;
            const start = viewportHeight;
            const end = viewportHeight * 0.2;
            const progress = Math.min(
                Math.max((start - rect.top) / (start - end), 0),
                1
            );
            setOffsetY((1 - progress) * 90);
        };

        updateOffset();
        window.addEventListener("scroll", updateOffset, { passive: true });
        window.addEventListener("resize", updateOffset);

        return () => {
            window.removeEventListener("scroll", updateOffset);
            window.removeEventListener("resize", updateOffset);
        };
    }, []);

    useEffect(() => {
        const section = sectionRef.current;
        const reveal = revealRef.current;
        if (!section || !reveal) return;

        const updateReveal = (progress) => {
            const delayStart = 0.4;
            const delayedProgress = Math.min(
                Math.max((progress - delayStart) / (1 - delayStart), 0),
                1
            );
            const eased =
                delayedProgress * delayedProgress * (3 - 2 * delayedProgress);
            const radius = 220 * eased;
            reveal.style.clipPath = `circle(${radius}% at 50% 50%)`;
            reveal.style.opacity = `${0.55 + 0.45 * eased}`;
            reveal.style.transform = `scale(${0.98 + 0.02 * eased})`;
        };

        updateReveal(0);

        const controls = scroll(updateReveal, {
            target: section,
            offset: ["start 1%", "end end"],
        });

        return () => {
            if (typeof controls === "function") {
                controls();
                return;
            }
            if (controls && typeof controls.stop === "function") {
                controls.stop();
            }
        };
    }, []);

    return (
        <div ref={sectionRef} className="relative min-h-[220vh] text-white">
            <div className="sticky top-0 h-screen overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center pointer-events-none">
                    <h2
                        className="about-mask font-bodoni text-[clamp(3.5rem,12vw,10rem)] tracking-[0.35em]"
                        style={{ transform: `translateY(${offsetY}px)` }}
                    >
                        ABOUT
                    </h2>
                    <p className="max-w-xl text-sm uppercase tracking-[0.4em] text-white/60">
                        Human-first computer vision
                    </p>
                </div>

                <div
                    ref={revealRef}
                    className="absolute inset-0 h-full w-full"
                    style={{
                        clipPath: "circle(0% at 50% 50%)",
                        opacity: 0.35,
                        transform: "scale(0.98)",
                    }}
                >
                    <div className="relative flex h-full w-full items-center justify-center bg-black">

                        <div className="relative flex w-full max-w-5xl flex-col justify-center px-6 py-16 sm:px-12 lg:px-24 lg:py-24">
                            <div className="pointer-events-none absolute inset-0">
                                <span className="absolute left-0 top-10 hidden h-px w-[12.5rem] bg-white/40 md:block" />
                                <span className="absolute left-10 top-0 hidden h-[12.5rem] w-px bg-white/40 md:block" />

                                {/* <span className="absolute right-10 top-10 h-px w-40 bg-white/40" />
                                <span className="absolute right-10 top-10 h-40 w-px bg-white/40" />

                                <span className="absolute left-10 bottom-10 h-px w-40 bg-white/40" />
                                <span className="absolute left-10 bottom-10 h-40 w-px bg-white/40" /> */}

                                <span className="absolute right-0 bottom-10 hidden h-px w-[12.5rem] bg-white/40 md:block" />
                                <span className="absolute right-10 bottom-0 hidden h-[12.5rem] w-px bg-white/40 md:block" />
                            </div>
                            <p className="text-lg uppercase tracking-[0.4em] text-white/60 underline underline-offset-8">
                                About Eyekon
                            </p>
                            <h3 className="mt-4 text-2xl font-semibold text-[#6E502E] font-bodoni sm:text-4xl">
                                Human-first computer vision for healthier focus.
                            </h3>
                            <p className="mt-6 text-base font-poppins leading-relaxed text-orange-100 sm:text-2xl">
                                We translate subtle eye movements, <span className="underline underline-offset-2">blinking patterns</span> , and posture signals into actionable insights without interrupting your workflow. Eyekon continuously analyzes visual and ergonomic behaviors in real time, helping individuals and teams identify fatigue, maintain focus, and reduce the long-term effects of prolonged screen exposure. By turning complex biometric signals into simple, meaningful recommendations, Eyekon empowers healthier work habits, improved productivity, and a more sustainable digital lifestyle.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
