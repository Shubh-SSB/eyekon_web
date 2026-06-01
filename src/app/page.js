import AboutSection from "./components/sections/aboutSection";
import ContactSection from "./components/sections/contactSection";
import FeaturesSection from "./components/sections/featuresSection";
import HeroSection from "./components/sections/hero_section";
import ProductsSection from "./components/sections/productsSection";
import ScrollToTop from "./components/ScrollToTop";
import ProblemSection from "./components/sections/problemSectiom";
import ReactLenis from "lenis/react";
import Footer from "./components/global/footer";

export default function Home() {
  const lenisOptions = {
    lerp: 0.1, // Scroll animation speed interpolation (lower = smoother)
    duration: 1.5, // The duration of the scroll animation in seconds
    smoothWheel: true, // Enables smooth scrolling via mouse wheel
    wheelMultiplier: 1, // Scroll speed multiplier
    touchMultiplier: 2, // Touch responsiveness speed multiplier
    prevent: false, // Set to true to stop scrolling entirely
  };

  return (
    <ReactLenis root options={lenisOptions}>
      <div className="min-h-screen bg-black/60">
        {/* Corner Grid Lines */}
        <section className="flex min-h-screen z-10 overflow-hidden p-4 items-center justify-center">
          <HeroSection />
        </section>
        <section className="min-h-screen z-10 p-4">
          <ProblemSection />
        </section>
        <section className="z-10 py-6">
          <FeaturesSection />
        </section>
        <ProductsSection />
        <section className="min-h-screen z-10 p-4">
          <AboutSection />
        </section>
        <section className="relative z-10 flex items-center justify-center px-6 py-16">
          <a
            href="/download-variant"
            className="group inline-flex items-center gap-4 rounded-full border border-orange-200/60 bg-orange-200/10 px-10 py-5 text-sm uppercase tracking-[0.35em] text-orange-100 shadow-[0_0_45px_rgba(251,191,36,0.35)] transition hover:bg-orange-200/20">
            Download App
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-200/50 text-orange-100 transition group-hover:translate-x-1">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M12 5v14" />
                <path d="m5 12 7 7 7-7" />
              </svg>
            </span>
          </a>
        </section>
        <section className="min-h-screen z-10">
          <ContactSection />
        </section>
        <ScrollToTop />
        <Footer />
      </div>
    </ReactLenis>
  );
}
