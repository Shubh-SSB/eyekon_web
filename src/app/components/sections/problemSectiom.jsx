"use client";

import React, { useEffect, useRef, useState } from "react";
import { scroll } from "motion";

const ProblemSection = () => {
    const sectionRef = useRef(null);
    const revealRef = useRef(null);
    const cardRefs = useRef([]);
    const [offsetY, setOffsetY] = useState(90);
    const [headingOpacity, setHeadingOpacity] = useState(0);
    const [headingScale, setHeadingScale] = useState(0.94);
    const [subOpacity, setSubOpacity] = useState(0);

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
            setHeadingOpacity(0.2 + 0.8 * progress);
            setHeadingScale(0.92 + 0.08 * progress);
            setSubOpacity(0.1 + 0.9 * progress);
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
            const delayStart = 0.15;
            const delayedProgress = Math.min(
                Math.max((progress - delayStart) / (1 - delayStart), 0),
                1
            );
            const eased =
                delayedProgress * delayedProgress * (3 - 2 * delayedProgress);
            const radius = 220 * eased;
            reveal.style.clipPath = `circle(${radius}% at 0% 0%)`;
            reveal.style.opacity = `${0.55 + 0.45 * eased}`;
            reveal.style.transform = `scale(${0.98 + 0.02 * eased})`;

            const cards = cardRefs.current;
            if (cards.length) {
                const cardStart = 0.7;
                const cardStep = 0.12;
                const cardSpan = 0.1;

                cards.forEach((card, index) => {
                    if (!card) return;
                    const start = cardStart + index * cardStep;
                    const end = start + cardSpan - 0.04;
                    const localProgress = Math.min(
                        Math.max((progress - start) / (end - start), 0),
                        1
                    );
                    const easedCard =
                        localProgress * localProgress * (3 - 2 * localProgress);
                    card.style.opacity = `${easedCard}`;
                    card.style.transform = `translateY(${20 - 20 * easedCard}px)`;
                    card.style.filter = `blur(${6 - 6 * easedCard}px)`;
                });
            }
        };

        updateReveal(0);

        const controls = scroll(updateReveal, {
            target: section,
            offset: ["start 35%", "end end"],
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
                        className="about-mask font-bodoni text-[clamp(2.5rem,10vw,8rem)] tracking-[0.18em] sm:text-[clamp(3.5rem,12vw,10rem)] sm:tracking-[0.35em]"
                        style={{
                            transform: `translateY(${offsetY}px) scale(${headingScale})`,
                            opacity: headingOpacity,
                        }}
                    >
                        PROBLEMS
                    </h2>
                    <p
                        className="max-w-xl text-sm uppercase tracking-[0.4em] text-white/60"
                        style={{ opacity: subOpacity }}
                    >
                        That Became The Inspiration For Eyekon
                    </p>
                </div>

                <div
                    ref={revealRef}
                    className="absolute inset-0 h-full w-full"
                    style={{
                        clipPath: "circle(0% at 0% 0%)",
                        opacity: 0.35,
                        transform: "scale(0.98)",
                    }}
                >
                    <div className="relative flex h-full w-full items-center justify-center bg-black">
                        <div className="relative flex w-full max-w-6xl flex-col items-center justify-between gap-10 px-4 py-8 sm:px-10 sm:py-24">
                            <div className="relative w-full max-w-6xl">
                                <div className="flex flex-col gap-6 md:flex-row">
                                    <div
                                        ref={(el) => {
                                            cardRefs.current[0] = el;
                                        }}
                                        className="flex-1 rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-6"
                                        style={{
                                            opacity: 0,
                                            transform: "translateY(20px)",
                                            filter: "blur(6px)",
                                        }}
                                    >
                                        <span className="absolute left-0 top-10 hidden h-px w-[12.5rem] bg-white/40 md:block" />
                                        <span className="absolute left-4 top-0 hidden h-40 w-px bg-white/40 md:block" />
                                        <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                                            Card <span className="text-[#FFE6C8]">01</span>
                                        </p>
                                        <h4 className="mt-3 text-xl font-semibold text-white sm:text-3xl">
                                            Eye strain <span className="underline underline-offset-4 text-[#FFE6C8]">overload</span>
                                        </h4>
                                        <p className="mt-1 text-sm text-white/70 sm:text-base">
                                            Prolonged screen focus causes micro-fatigue and
                                            reduces reaction speed.
                                        </p>
                                    </div>
                                    <div
                                        ref={(el) => {
                                            cardRefs.current[1] = el;
                                        }}
                                        className="flex-1 rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-6"
                                        style={{
                                            opacity: 0,
                                            transform: "translateY(20px)",
                                            filter: "blur(6px)",
                                        }}
                                    >
                                        <span className="absolute left-[28rem] top-10 hidden h-px w-80 bg-white/40 md:block" />
                                        <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                                            Card <span className="text-[#FFE6C8]">02</span>
                                        </p>
                                        <h4 className="mt-3 text-xl font-semibold text-white sm:text-3xl">
                                            Focus <span className="underline underline-offset-4 text-[#FFE6C8]">drift</span>
                                        </h4>
                                        <p className="mt-1 text-sm text-white/70 sm:text-base">
                                            Subtle gaze shifts compound into hours of lost
                                            attention.
                                        </p>
                                    </div>
                                    <div
                                        ref={(el) => {
                                            cardRefs.current[2] = el;
                                        }}
                                        className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-6"
                                        style={{
                                            opacity: 0,
                                            transform: "translateY(20px)",
                                            filter: "blur(6px)",
                                        }}
                                    >
                                        <span className="absolute right-0 top-10 hidden h-px w-[12.5rem] bg-white/40 md:block" />
                                        <span className="absolute right-4 top-0 hidden h-40 w-px bg-white/40 md:block" />
                                        <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                                            Card  <span className="text-[#FFE6C8]">03</span>
                                        </p>
                                        <h4 className="mt-3 text-xl font-semibold text-white sm:text-3xl">
                                            <span className="underline underline-offset-4 text-[#FFE6C8]">Posture</span> collapse
                                        </h4>
                                        <p className="mt-1 text-sm text-white/70 sm:text-base">
                                            Compensating posture creates long-term strain and
                                            tension.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProblemSection;
