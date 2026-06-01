"use client";

import React, { useEffect, useRef, useState } from "react";
import { scroll } from "motion";

const steps = [
    {
        step: "01",
        title: "Observe",
        kicker: "Signal capture",
        description:
            "Eyekon tracks blink cadence, gaze drift, focus behavior, and posture shifts in real time to build an attention map.",
        tags: ["Blink cadence", "Gaze drift", "Posture shifts"],
    },
    {
        step: "02",
        title: "Interpret",
        kicker: "AI insight",
        description:
            "Advanced models compare your live signals to a personal baseline and surface early signs of fatigue, distraction, and strain.",
        tags: ["Baseline learning", "Fatigue signals", "Focus variance"],
    },
    {
        step: "03",
        title: "Guide",
        kicker: "Personalized nudges",
        description:
            "Context-aware prompts suggest micro-breaks, posture resets, and focus recovery routines without breaking your flow.",
        tags: ["Micro-breaks", "Posture reset", "Focus recovery"],
    },
    {
        step: "04",
        title: "Improve",
        kicker: "Progress tracking",
        description:
            "Trends turn into wellness scores, productivity insights, and fatigue analytics you can act on every week.",
        tags: ["Wellness score", "Weekly trends", "Analytics"],
    },
];

const FeaturesSection = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const trackRef = useRef(null);
    const dotRef = useRef(null);
    const cardRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const update = (progress) => {
            const eased = progress * progress * (3 - 2 * progress);

            if (headingRef.current) {
                headingRef.current.style.transform = `translateY(${40 - 40 * eased}px)`;
                headingRef.current.style.opacity = `${0.15 + 0.85 * eased}`;
            }

            if (trackRef.current) {
                trackRef.current.style.transform = `translateY(${16 - 32 * eased}px)`;
            }

            if (dotRef.current) {
                dotRef.current.style.transform = `translate(-50%, ${eased * 160}px)`;
            }

            const cards = cardRefs.current;
            if (cards.length) {
                const cardStart = 0.1;
                const cardStep = 0.18;
                const cardSpan = 0.28;

                cards.forEach((card, index) => {
                    if (!card) return;
                    const start = cardStart + index * cardStep;
                    const end = start + cardSpan;
                    const localProgress = Math.min(
                        Math.max((progress - start) / (end - start), 0),
                        1
                    );
                    const easedCard =
                        localProgress * localProgress * (3 - 2 * localProgress);
                    card.style.opacity = `${0.2 + 0.8 * easedCard}`;
                    card.style.transform = `translateY(${24 - 24 * easedCard}px)`;
                    card.style.filter = `blur(${6 - 6 * easedCard}px)`;
                });
            }
        };

        update(0);

        const controls = scroll(update, {
            target: section,
            offset: ["start start", "end end"],
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
        <div ref={sectionRef} className="relative min-h-screen text-white md:min-h-[280vh]">
            <div className="relative min-h-screen md:sticky md:top-0 md:h-screen md:overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute left-1/2 top-1/2 h-px w-[60vw] -translate-x-1/2 -translate-y-1/2 bg-white/10" />
                    <div className="absolute left-1/2 top-1/2 h-[60vh] w-px -translate-x-1/2 -translate-y-1/2 bg-white/10" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center">
                        <div
                            ref={headingRef}
                            className="about-mask font-bodoni text-[clamp(2.5rem,10vw,8rem)] tracking-[0.18em] opacity-5 text-white/15 sm:text-[clamp(3.5rem,12vw,10rem)] sm:tracking-[0.35em]"
                        >
                            FEATURES
                        </div>
                    </div>
                </div>

                <div className="relative z-10 mx-auto flex h-auto max-w-6xl items-center gap-12 px-6 sm:px-12 flex-col md:h-full">
                    <div className="w-full max-w-xl flex flex-col items-center text-center">
                        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                            A four-step intelligence cycle for healthier focus.
                        </h2>
                        <p className="mt-5 text-base leading-7 text-white/70">
                            Every session moves through a loop: observing micro-signals,
                            interpreting intent, guiding action, and improving over time.
                        </p>

                        <div className="mt-2 flex flex-col items-center gap-6">
                            <div className="relative h-48 rotate-270 w-px bg-white/20">
                                <span
                                    ref={dotRef}
                                    className="absolute left-1/3 top-3 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-200 shadow-[0_0_20px_rgba(251,191,36,0.6)]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-full">
                        <div
                            ref={trackRef}
                            className="flex flex-col gap-4 md:flex-row md:items-start md:space-y-0"
                        >
                            {steps.map((step, index) => {
                                const isActive = activeIndex === index;
                                return (
                                    <div
                                        key={step.step}
                                        ref={(el) => {
                                            cardRefs.current[index] = el;
                                        }}
                                        role="button"
                                        tabIndex={0}
                                        aria-pressed={isActive}
                                        onClick={() =>
                                            setActiveIndex(isActive ? null : index)
                                        }
                                        onKeyDown={(event) => {
                                            if (event.key === "Enter" || event.key === " ") {
                                                event.preventDefault();
                                                setActiveIndex(isActive ? null : index);
                                            }
                                        }}
                                        className={`group w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300/60 md:flex-1 md:basis-0 md:hover:flex-[1.4] md:hover:text-3xl ${isActive
                                                ? "md:flex-[1.4] md:border-orange-200/40 md:shadow-[0_0_45px_rgba(251,191,36,0.2)]"
                                                : ""
                                            }`}
                                        style={{
                                            opacity: 0.2,
                                            transform: "translateY(24px)",
                                            filter: "blur(6px)",
                                        }}
                                    >
                                        <div className="flex items-center justify-between">
                                            <p className="text-xs uppercase tracking-[0.3em] text-[#FFE6C8]">
                                                Step {step.step}
                                            </p>
                                            {/* <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/70">
                                            {step.kicker}
                                        </span> */}
                                        </div>
                                        <h3 className="relative mt-4 pb-3 text-2xl font-semibold text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-1/3 after:bg-white after:transition-all after:duration-300 after:ease-out group-hover:after:w-full">
                                            {step.title}
                                        </h3>
                                        <p className="mt-3 text-sm leading-6 text-white/70">
                                            {step.description}
                                        </p>
                                        {/* <div className="mt-4 flex flex-wrap gap-2">
                                        {step.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/60"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div> */}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;
