"use client";
import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { motion, useScroll } from 'framer-motion';

export default function SmoothScroll({ children }) {
    // Sync Framer Motion with Lenis's scroll
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        const lenis = new Lenis({
            duration: 0.2, // Adjust the speed
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing curve
            direction: 'vertical',
            smooth: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    return (
        <>
            {/* Optional: You can animate a progress bar based on scrollYProgress here */}
            {children}
        </>
    );
}
