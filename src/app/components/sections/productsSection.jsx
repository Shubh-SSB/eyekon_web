"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate } from "motion";
import { Cross, CrossIcon, X } from "lucide-react";

const softwareProducts = [
    {
        name: "Focus Monitor",
        tag: "Live signals",
        description:
            "A real-time focus layer that tracks gaze stability, blink rhythm, and attention drift without interrupting work.",
        highlights: ["Gaze stability", "Blink rhythm", "Distraction alerts"],
    },
    {
        name: "Fatigue Radar",
        tag: "Early warning",
        description:
            "Detects micro-fatigue patterns before they compound, so teams can intervene early and stay sharp.",
        highlights: ["Micro-fatigue", "Risk scoring", "Recovery cues"],
    },
    {
        name: "Posture Coach",
        tag: "Ergonomic",
        description:
            "Gentle posture nudges based on shoulder alignment, head tilt, and sustained tension signals.",
        highlights: ["Posture drift", "Neck relief", "Session resets"],
    },
];

const hardwareBuddies = [
    {
        name: "PICO",
        tag: "Hardware",
        description:
            "A desk companion that pairs with Eyekon to surface instant focus cues and session momentum.",
        highlights: ["Desk device", "Live cues", "Ambient status"],
        image: "/Images/pico-blueprint.png",
        expandedImage: "/Images/pico-oil.png",
        link: "#products",
        linkLabel: "Want one? Join the waitlist",
        gradient:
            "radial-gradient(60% 70% at 20% 20%, rgba(255, 214, 166, 0.6), transparent 70%), linear-gradient(140deg, rgba(35, 41, 53, 0.85), rgba(9, 13, 20, 0.95))",
    },
    {
        name: "KIZSU",
        tag: "Hardware",
        description:
            "Guides posture resets with subtle haptics and visual indicators tuned to your work rhythm.",
        highlights: ["Ergo feedback", "Haptic prompts", "Quiet alerts"],
        image: "/Images/kizsu-blueprint.png",
        expandedImage: "/Images/kizsu-oil.png",
        link: "#products",
        linkLabel: "Want one? Join the waitlist",
        gradient:
            "radial-gradient(60% 70% at 80% 20%, rgba(185, 210, 255, 0.55), transparent 70%), linear-gradient(140deg, rgba(26, 35, 49, 0.85), rgba(8, 12, 18, 0.95))",
    },
    {
        name: "BIT",
        tag: "Hardware",
        description:
            "Tracks break quality and recovery windows to keep energy balanced across long sessions.",
        highlights: ["Break tracking", "Recovery scores", "Rhythm support"],
        image: "/Images/bit-blueprint.png",
        expandedImage: "/Images/bit-oil.png",
        link: "#products",
        linkLabel: "Want one? Join the waitlist",
        gradient:
            "radial-gradient(60% 70% at 50% 10%, rgba(255, 186, 140, 0.5), transparent 70%), linear-gradient(140deg, rgba(31, 26, 32, 0.85), rgba(10, 9, 14, 0.95))",
    },
];

const ProductsSection = () => {
    const [activeBuddy, setActiveBuddy] = useState(null);
    const panelRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        if (activeBuddy === null) return;
        const panel = panelRef.current;
        const image = imageRef.current;
        if (!panel || !image) return;

        const panelAnim = animate(
            panel,
            {
                opacity: [0, 1],
                transform: ["translateY(360px)", "translateY(0px)"],
            },
            { duration: 0.4, easing: "ease-out" }
        );

        const imageAnim = animate(
            image,
            { rotateY: [90, 0], scale: [0.2, 1] },
            { duration: 0.4, easing: "ease-in" }
        );

        return () => {
            panelAnim.stop();
            imageAnim.stop();
        };
    }, [activeBuddy]);

    const activeBuddyData =
        activeBuddy !== null ? hardwareBuddies[activeBuddy] : null;

    return (
        <section
            id="products"
            className="relative min-h-screen overflow-hidden px-6 py-20 sm:px-12"
        >
            <div className="absolute inset-0 blueprint-grid" />
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-8 top-10 h-px w-44 bg-white/60" />
                <div className="absolute left-16 top-6 h-44 w-px bg-white/60" />
                <div className="absolute right-8 bottom-10 h-px w-44 bg-white/60" />
                <div className="absolute right-16 bottom-6 h-44 w-px bg-white/60" />
            </div>

            <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12">
                <div className="max-w-2xl">
                    <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                        Products
                    </p>
                    <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                        Tools that turn eye signals into daily performance gains.
                    </h2>
                    <p className="mt-5 text-base leading-7 text-white/70">
                        Each product is built to fit into existing workflows, delivering
                        gentle guidance without slowing teams down.
                    </p>
                </div>

                <div className="grid gap-8">
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-white">Software</h3>
                            <span className="text-xs uppercase tracking-[0.3em] text-white/50">
                                3 products
                            </span>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {softwareProducts.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="group blueprint-card relative overflow-hidden rounded-2xl border border-white/10 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.45)] transition duration-300 ease-out hover:border-orange-200/40"
                                >
                                    <h3 className="text-xl font-semibold text-white group-hover:text-orange-100">
                                        {item.name}
                                    </h3>
                                    <div className="mt-6 h-[2px] w-12 bg-white/20 transition-all duration-300 group-hover:w-24 group-hover:bg-orange-200/70" />
                                    <div className="relative z-10">
                                        <p className="mt-4 text-sm leading-6 text-white/70">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-white">Buddy Hardware</h3>
                            <span className="text-xs uppercase tracking-[0.3em] text-white/50">
                                3 buddies
                            </span>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {hardwareBuddies.map((item, index) => (
                                <button
                                    key={item.name}
                                    type="button"
                                    onClick={() =>
                                        setActiveBuddy(
                                            activeBuddy === index ? null : index
                                        )
                                    }
                                    aria-pressed={activeBuddy === index}
                                    className={`group blueprint-card relative min-h-[320px] overflow-hidden rounded-2xl border border-white/55 shadow-[0_24px_60px_rgba(0,0,0,0.45)] transition duration-300 ease-out hover:border-orange-200/40 sm:min-h-[420px] ${activeBuddy === index
                                        ? "border-orange-200/60 shadow-[0_0_45px_rgba(251,191,36,0.25)]"
                                        : ""
                                        }`}
                                    style={{
                                        backgroundImage: item.image
                                            ? `url(${item.expandedImage})`
                                            : item.gradient,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                >
                                    <div
                                        className="absolute inset-0 bg-black/50 rounded-2xl"
                                    // style={{
                                    //     background: item.gradient,
                                    // }}
                                    />
                                    <div className="relative z-10 flex h-full flex-col justify-end text-left p-6">
                                        {/* <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                                            Hardware
                                        </p> */}
                                        <h3 className="mt-2 text-4xl font-semibold text-white group-hover:text-orange-200">
                                            {item.name}
                                        </h3>
                                        <p className="text-lg p-1 leading-6 text-white/80 backdrop-blur-sm rounded-2xl">
                                            {item.description}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {activeBuddyData && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center px-6 py-10">
                                <button
                                    type="button"
                                    aria-label="Close buddy details"
                                    onClick={() => setActiveBuddy(null)}
                                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                                />
                                <div
                                    ref={panelRef}
                                    className="blueprint-card relative z-10 grid w-full max-w-5xl gap-8 overflow-hidden rounded-3xl border border-white p-6 shadow-[0_40px_120px_rgba(0,0,0,0.6)] md:grid-cols-[1.1fr_1fr]"
                                    style={{ opacity: 0, transform: "translateY(2px)" }}
                                >
                                    <div
                                        className="relative overflow-hidden rounded-2xl border border-white/10"
                                        style={{ perspective: "1400px" }}
                                    >
                                        <div
                                            ref={imageRef}
                                            className="h-[240px] w-full sm:h-[360px]"
                                            style={{
                                                backgroundImage: activeBuddyData.image
                                                    ? `url(${activeBuddyData.image})`
                                                    : activeBuddyData.gradient,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                transformStyle: "preserve-3d",
                                                backfaceVisibility: "hidden",
                                                borderRadius: "16px",
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
                                    </div>

                                    <div className="relative z-10 flex flex-col justify-start gap-5">
                                        <div className="flex items-center justify-end">
                                            {/* <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                                                Buddy Hardware
                                            </p> */}
                                            <button
                                                type="button"
                                                onClick={() => setActiveBuddy(null)}
                                                className="text-md uppercase tracking-[0.2em] text-red-500 cursor-pointer"
                                            >
                                                <X />
                                            </button>
                                        </div>
                                        <h3 className="text-3xl font-semibold text-white">
                                            {activeBuddyData.name}
                                        </h3>
                                        <p className="text-base leading-7 text-white/70">
                                            {activeBuddyData.description}
                                        </p>
                                        <ul className="list-disc space-y-2 pl-5 text-sm text-white/70">
                                            {activeBuddyData.highlights.map((highlight) => (
                                                <li key={highlight}>{highlight}</li>
                                            ))}
                                        </ul>
                                        <a
                                            href={activeBuddyData.link}
                                            className="inline-flex w-fit items-center gap-2 rounded-full border border-yellow-200/60 bg-orange-200/10 px-4 py-4 text-sm uppercase tracking-widest text-orange-100 transition hover:bg-orange-200/20"
                                        >
                                            {activeBuddyData.linkLabel}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;
